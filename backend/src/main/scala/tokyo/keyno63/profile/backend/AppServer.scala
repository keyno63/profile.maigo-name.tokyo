package tokyo.keyno63.profile.backend

import tokyo.keyno63.profile.backend.healthcare.controller.HealthcareController
import tokyo.keyno63.profile.backend.healthcare.model.HealthcareJsonCodec.given
import tokyo.keyno63.profile.backend.healthcare.repository.{HealthcareRepository, HealthcareRepositoryPostgres, HealthcareRepositorySample}
import tokyo.keyno63.profile.backend.healthcare.service.HealthcareServiceLive
import tokyo.keyno63.profile.backend.history.controller.HistoryController
import tokyo.keyno63.profile.backend.history.model.HistoryJsonCodec.given
import tokyo.keyno63.profile.backend.history.repository.{HistoryRepository, HistoryRepositoryPostgres, HistoryRepositorySample}
import tokyo.keyno63.profile.backend.history.service.HistoryServiceLive
import zio._
import zio.http._
import zio.http.Method
import zio.json.EncoderOps

object AppServer extends ZIOAppDefault {

    private val healthcareRepository: HealthcareRepository =
        HealthcareRepositoryPostgres
            .fromEnvironment()
            .fold(
                err => {
                    _root_.java.lang.System.err.println(s"[HealthcareRepository] $err. Falling back to sample data.")
                    HealthcareRepositorySample()
                },
                identity
            )

    private val historyRepository: HistoryRepository =
        HistoryRepositoryPostgres
            .fromEnvironment()
            .fold(
                err => {
                    _root_.java.lang.System.err.println(s"[HistoryRepository] $err. Falling back to sample data.")
                    HistoryRepositorySample()
                },
                identity
            )

    private val healthcareController =
        HealthcareController(HealthcareServiceLive(healthcareRepository))

    private val historyController =
        HistoryController(HistoryServiceLive(historyRepository))

    private[backend] val routes = Routes(
        Method.GET / Root -> handler(Response.text("Root")),
        Method.GET / "health" / "live" -> handler(Response.text("implemented now")),
        Method.GET / "health" / "ready" -> handler(Response.text("implemented now")),
        Method.GET / "hello" -> handler(Response.text("Hello, World!")),
        Method.GET / "healthcare" / "daily" -> handler {
            Response.json(healthcareController.dailySummaries().toJsonPretty)
        },
        Method.GET / "history" -> handler {
            Response.json(historyController.history().toJsonPretty)
        }
    )

    def run = Server.serve(routes).provide(Server.default)
}
