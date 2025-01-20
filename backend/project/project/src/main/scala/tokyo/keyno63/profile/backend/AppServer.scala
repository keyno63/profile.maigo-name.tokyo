package tokyo.keyno63.profile.backend

import zio._
import zio.http._
import zio.http.model._

object AppServer extends ZIOAppDefault {

    val app: HttpApp[Any, Nothing] = Http.collect[Request] {
        case Method.GET -> !! / "hello" => Response.text("Hello, ZIO HTTP!")
    }

    override def run: URIO[ZEnv, ExitCode] = {
        Server.start(8080, app).exitCode
    }
}
