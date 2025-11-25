package tokyo.keyno63.profile.backend.history.service

import tokyo.keyno63.profile.backend.history.model.{HistoryResponse}
import tokyo.keyno63.profile.backend.history.repository.HistoryRepository

trait HistoryService {
  def history(): HistoryResponse
}

final case class HistoryServiceLive(repository: HistoryRepository) extends HistoryService {
  override def history(): HistoryResponse =
    HistoryResponse(repository.fetchCarrierHistory())
}
