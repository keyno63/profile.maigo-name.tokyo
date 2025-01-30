package tokyo.keyno63.profile.backend

import zio._
import zio.http._
import zio.http.Method

object AppServer extends ZIOAppDefault {

    private val routes = Routes(
        Method.GET / Root -> handler(Response.text("Root")),
        Method.GET / "hello" -> handler(Response.text("Hello, World!"))
    )

    def run = Server.serve(routes).provide(Server.default)
}
