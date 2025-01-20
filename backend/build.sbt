inThisBuild(
    List(
        version := "0.1.0-SNAPSHOT",
        scalaVersion := "3.6.0",
        name := "profile-backend"
    )
)

lazy val root = (project in file("."))
  .settings(
    assembly / mainClass := Some("tokyo.keyno63.profile.backend.AppServer"),
    assembly / assemblyJarName := "profile-backend.jar",
    libraryDependencies ++= Seq(
      // zio/http
      "dev.zio" %% "zio-http" % "3.0.1",

      // test
      "org.scalatest" %% "scalatest" % "3.2.19" % Test,
    )
)

assembly / assemblyMergeStrategy := {
  case PathList("META-INF", _*) => MergeStrategy.discard
  case _                        => MergeStrategy.first
}

run / fork := true
