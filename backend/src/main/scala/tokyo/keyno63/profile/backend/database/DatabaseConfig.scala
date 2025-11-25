package tokyo.keyno63.profile.backend.database

import java.nio.file.{Files, Paths}

final case class DatabaseConfig(url: String, user: String, password: String)

object DatabaseConfig {

  def fromEnvironment(env: Map[String, String] = sys.env): Either[String, DatabaseConfig] = {
    val url  = env.get("DATABASE_URL").filter(_.nonEmpty).toRight("DATABASE_URL is not set")
    val user = env.get("DATABASE_USER").filter(_.nonEmpty).toRight("DATABASE_USER is not set")

    val passwordFile = env.get("DATABASE_PASSWORD_FILE").filter(_.nonEmpty)
    val passwordEnv  = env.get("DATABASE_PASSWORD").filter(_.nonEmpty)

    val password = passwordFile
      .flatMap(readSecretFile)
      .orElse(passwordEnv)
      .getOrElse("")

    for {
      jdbcUrl  <- url
      username <- user
    } yield DatabaseConfig(jdbcUrl, username, password)
  }

  private def readSecretFile(path: String): Option[String] =
    try Some(Files.readString(Paths.get(path)).trim)
    catch { case _: Throwable => None }
}
