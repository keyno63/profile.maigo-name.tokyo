package tokyo.keyno63.profile.backend.history.controller

import tokyo.keyno63.profile.backend.history.model.HistoryResponse
import tokyo.keyno63.profile.backend.history.service.HistoryService

final case class HistoryController(service: HistoryService) {
  def history(): HistoryResponse =
    service.history()
}
