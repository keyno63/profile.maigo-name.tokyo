package tokyo.keyno63.profile.backend.history.controller

import tokyo.keyno63.profile.backend.history.service.HistoryService


case class HistoryController(service: HistoryService) {
  def history(): String = {
    service.history()
  }
}
