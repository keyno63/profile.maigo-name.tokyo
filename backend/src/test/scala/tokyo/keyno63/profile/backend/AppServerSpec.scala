package tokyo.keyno63.profile.backend

import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpec
import zio.http.{Request, Status, URL}
import zio.{Runtime, Trace, Unsafe, ZIO}

class AppServerSpec extends AnyWordSpec with Matchers {

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
  }
}
