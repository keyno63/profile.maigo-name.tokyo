package tokyo.keyno63.profile.backend.history.repository

import tokyo.keyno63.profile.backend.history.model.CarrierHistory

trait HistoryRepository {
  def fetchCarrierHistory(): List[CarrierHistory]
}

final class HistoryRepositorySample extends HistoryRepository {
  private val sample: List[CarrierHistory] = List(
    CarrierHistory(
      id = 1,
      userId = "user-001",
      belonging = Some("Webサービス"),
      startAt = Some("2019/03"),
      endAt = None,
      descriptions = List(
        "現職",
        "Webのサーバーサイドエンジニア・バックエンドエンジニアとして従事",
        "ポータルサイトのアプリ側バックエンド",
        "広告配信システムのバックエンド"
      ),
      updatedAt = None
    ),
    CarrierHistory(
      id = 2,
      userId = "user-001",
      belonging = Some("株式会社ネクストジェン"),
      startAt = Some("2014/04"),
      endAt = Some("2019/02"),
      descriptions = List(
        "ソフトウェア開発者としてSIP・VoIP製品の開発",
        "C5スイッチ・SBC・通話録音システムの設計・開発・検証などを中心に従事"
      ),
      updatedAt = None
    ),
    CarrierHistory(
      id = 3,
      userId = "user-001",
      belonging = Some("大阪府立大学・大学院（現・大阪公立大学）"),
      startAt = Some("2008/04"),
      endAt = Some("2014/03"),
      descriptions = List(
        "大学・大学院時代は物性物理学の実験を専攻"
      ),
      updatedAt = None
    )
  )

  override def fetchCarrierHistory(): List[CarrierHistory] = sample
}

object HistoryRepositorySample {
  def apply(): HistoryRepositorySample = new HistoryRepositorySample()
}
