package tokyo.keyno63.profile.backend

import tokyo.keyno63.profile.backend.healthcare.controller.HealthcareController
import tokyo.keyno63.profile.backend.healthcare.model.HealthcareJsonCodec.given
import tokyo.keyno63.profile.backend.healthcare.repository.HealthcareRepositorySample
import tokyo.keyno63.profile.backend.healthcare.service.HealthcareServiceLive
import zio._
import zio.http._
import zio.http.Method
import zio.json.EncoderOps

object AppServer extends ZIOAppDefault {

    private val healthcareController =
        HealthcareController(HealthcareServiceLive(HealthcareRepositorySample()))

    private[backend] val routes = Routes(
        Method.GET / Root -> handler(Response.text("Root")),
        Method.GET / "hello" -> handler(Response.text("Hello, World!")),
        Method.GET / "healthcare" / "daily" -> handler {
            Response.json(healthcareController.dailySummaries().toJsonPretty)
        }
    )

    def run = Server.serve(routes).provide(Server.default)
}
