package tokyo.keyno63.profile.backend.healthcare.repository

import tokyo.keyno63.profile.backend.database.DatabaseConfig
import tokyo.keyno63.profile.backend.healthcare.model.{DailyHealth, MealCalories}

import java.math.RoundingMode
import java.sql.DriverManager
import org.postgresql.util.PSQLException
import scala.collection.mutable.ListBuffer
import scala.util.Using

final class HealthcareRepositoryPostgres(config: DatabaseConfig) extends HealthcareRepository {
  private val MealStatusAliases = Map(
    "breakfast" -> 0,
    "lunch"     -> 1,
    "dinner"    -> 2,
    "snacks"    -> 3
  )

  Class.forName("org.postgresql.Driver")

  override def fetchDailySummaries(): List[DailyHealth] =
    try runQuery()
    catch {
      case ex: PSQLException if Option(ex.getSQLState).contains("42P01") =>
        _root_.java.lang.System.err.println("[HealthcareRepository] health table が見つかりませんでした。サンプルデータにフォールバックします。")
        HealthcareRepositorySample().fetchDailySummaries()
    }

  private def runQuery(): List[DailyHealth] = {
    val sql =
      """
        |SELECT "date", weight_kg, kilocalorie, status
        |FROM health
        |ORDER BY "date" DESC, recorded_at DESC
        |""".stripMargin

    val rows = Using.resource(DriverManager.getConnection(config.url, config.user, config.password)) { connection =>
      Using.resource(connection.prepareStatement(sql)) { statement =>
        Using.resource(statement.executeQuery()) { resultSet =>
          val buffer = ListBuffer[HealthRow]()
          while (resultSet.next()) {
            buffer += HealthRow(
              date = resultSet.getInt("date"),
              weightKg = Option(resultSet.getBigDecimal("weight_kg")).map(_.setScale(0, RoundingMode.HALF_UP).intValue()).getOrElse(0),
              kilocalorie = resultSet.getInt("kilocalorie"),
              status = parseStatus(resultSet.getString("status")).getOrElse(-1)
            )
          }
          buffer.toList
        }
      }
    }

    rows
      .groupBy(_.date)
      .toList
      .sortBy { case (date, _) => -date }
      .map { case (date, entries) =>
        val weight = entries.headOption.map(_.weightKg).getOrElse(0)
        val calories = entries.foldLeft(MealCalories.empty) { (acc, row) =>
          if (row.status >= 0) acc.withCalories(row.status, row.kilocalorie) else acc
        }
        DailyHealth(date = date, weightKg = weight, calories = calories)
      }
  }

  private def parseStatus(value: String): Option[Int] =
    Option(value).map(_.trim).filter(_.nonEmpty).flatMap { text =>
      text.toIntOption.orElse(MealStatusAliases.get(text.toLowerCase()))
    }

  private final case class HealthRow(
      date: Int,
      weightKg: Int,
      kilocalorie: Int,
      status: Int
  )
}

object HealthcareRepositoryPostgres {
  def fromEnvironment(env: Map[String, String] = sys.env): Either[String, HealthcareRepository] =
    DatabaseConfig.fromEnvironment(env).map(new HealthcareRepositoryPostgres(_))
}
