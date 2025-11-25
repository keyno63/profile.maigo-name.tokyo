package tokyo.keyno63.profile.backend.history.repository

import tokyo.keyno63.profile.backend.database.DatabaseConfig
import tokyo.keyno63.profile.backend.history.model.CarrierHistory

import org.postgresql.util.PSQLException

import java.sql.DriverManager
import scala.collection.mutable.ListBuffer
import scala.util.Using

final class HistoryRepositoryPostgres(config: DatabaseConfig) extends HistoryRepository {

  Class.forName("org.postgresql.Driver")

  override def fetchCarrierHistory(): List[CarrierHistory] =
    try queryCarrierHistory()
    catch {
      case ex: PSQLException if Option(ex.getSQLState).contains("42P01") =>
        _root_.java.lang.System.err.println("[HistoryRepository] carrier table が見つかりませんでした。サンプルデータにフォールバックします。")
        HistoryRepositorySample().fetchCarrierHistory()
    }

  private def queryCarrierHistory(): List[CarrierHistory] = {
    val sql =
      """
        |SELECT id, user_id, belonging, "description", start_at, end_at, updated_at
        |FROM carrier
        |ORDER BY start_at DESC NULLS LAST, updated_at DESC NULLS LAST, id ASC
        |""".stripMargin

    Using.resource(DriverManager.getConnection(config.url, config.user, config.password)) { connection =>
      Using.resource(connection.prepareStatement(sql)) { statement =>
        Using.resource(statement.executeQuery()) { resultSet =>
          val buffer = ListBuffer[CarrierHistory]()
          while (resultSet.next()) {
            buffer += CarrierHistory(
              id = resultSet.getInt("id"),
              userId = resultSet.getString("user_id"),
              belonging = Option(resultSet.getString("belonging")).filter(_.nonEmpty),
              startAt = Option(resultSet.getString("start_at")).filter(_.nonEmpty),
              endAt = Option(resultSet.getString("end_at")).filter(_.nonEmpty),
              descriptions = Option(resultSet.getString("description"))
                .map(_.split("\\r?\\n").toList.map(_.trim).filter(_.nonEmpty))
                .getOrElse(Nil),
              updatedAt = Option(resultSet.getTimestamp("updated_at")).map(_.toInstant.toString)
            )
          }
          buffer.toList
        }
      }
    }
  }
}

object HistoryRepositoryPostgres {
  def fromEnvironment(env: Map[String, String] = sys.env): Either[String, HistoryRepository] =
    DatabaseConfig.fromEnvironment(env).map(new HistoryRepositoryPostgres(_))
}
