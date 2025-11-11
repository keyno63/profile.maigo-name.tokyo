package tokyo.keyno63.profile.backend

import org.scalatest.OptionValues
import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpec
import tokyo.keyno63.profile.backend.healthcare.model.{HealthResponse, HealthcareJsonCodec}
import zio.http.{Request, Status, URL}
import zio.json.DecoderOps
import zio.{Runtime, Trace, Unsafe, ZIO}

class AppServerSpec extends AnyWordSpec with Matchers with OptionValues {

  import HealthcareJsonCodec.given

  given Trace = Trace.empty

  private def unsafeRun[A](zio: => ZIO[Any, Throwable, A]): A =
    Unsafe.unsafe { implicit unsafe =>
      Runtime.default.unsafe.run(zio).getOrThrowFiberFailure()
    }

  private def runRequest(url: URL) =
    unsafeRun(AppServer.routes.runZIO(Request.get(url)))

  "AppServer routes" should {

    "return Root for GET /" in {
      val response = runRequest(URL.root)

      response.status shouldBe Status.Ok
      unsafeRun(response.body.asString) shouldBe "Root"
    }

    "return greeting for GET /hello" in {
      val response = runRequest(URL.root / "hello")

      response.status shouldBe Status.Ok
      unsafeRun(response.body.asString) shouldBe "Hello, World!"
    }

    "return healthcare summaries for GET /healthcare/daily" in {
      val response = runRequest(URL.root / "healthcare" / "daily")

      response.status shouldBe Status.Ok
      val jsonBody = unsafeRun(response.body.asString)

      val parsed = jsonBody.fromJson[HealthResponse]
      parsed.isRight shouldBe true

      val response = parsed.toOption.value
      response.health should not be empty
      val firstDay = response.health.head
      firstDay.calories.breakfast should be >= 0
    }
  }
}
