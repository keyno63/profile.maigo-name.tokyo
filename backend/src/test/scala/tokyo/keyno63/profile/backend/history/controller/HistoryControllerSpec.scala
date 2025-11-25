package tokyo.keyno63.profile.backend.history.controller

import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpec
import tokyo.keyno63.profile.backend.history.model.{CarrierHistory, HistoryResponse}
import tokyo.keyno63.profile.backend.history.service.HistoryService

class HistoryControllerSpec extends AnyWordSpec with Matchers {

  "HistoryController" should {
    "delegate to the history service" in {
      val response = HistoryResponse(
        carriers = List(
          CarrierHistory(
            id = 1,
            userId = "user-001",
            belonging = Some("Webサービス"),
            startAt = Some("2019/03"),
            endAt = None,
            descriptions = List("現職"),
            updatedAt = None
          )
        )
      )
      val controller = HistoryController(new HistoryService {
        override def history(): HistoryResponse = response
      })

      controller.history() shouldBe response
    }
  }
}
