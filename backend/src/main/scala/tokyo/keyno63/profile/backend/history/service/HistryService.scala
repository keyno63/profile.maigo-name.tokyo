package tokyo.keyno63.profile.backend.history.service

trait HistoryService {
  def history(): String
}

case class HistoryServiceImpl() extends HistoryService {
  override def history(): String = ???
}
