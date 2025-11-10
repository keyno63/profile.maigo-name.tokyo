package tokyo.keyno63.profile.backend.history.controller

import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpec
import tokyo.keyno63.profile.backend.history.service.HistoryService

class HistoryControllerSpec extends AnyWordSpec with Matchers {

  "HistoryController" should {
    "delegate to the history service" in {
      val expected = "career history"
      val controller = HistoryController(new HistoryService {
        override def history(): String = expected
      })

      controller.history() shouldBe expected
    }
  }
}
