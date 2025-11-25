package tokyo.keyno63.profile.backend.history.model

import zio.json._

final case class CarrierHistory(
    id: Int,
    userId: String,
    belonging: Option[String],
    startAt: Option[String],
    endAt: Option[String],
    descriptions: List[String],
    updatedAt: Option[String]
)

final case class HistoryResponse(
    carriers: List[CarrierHistory]
)

object HistoryJsonCodec {
  given JsonEncoder[CarrierHistory] = DeriveJsonEncoder.gen[CarrierHistory]
  given JsonDecoder[CarrierHistory] = DeriveJsonDecoder.gen[CarrierHistory]

  given JsonEncoder[HistoryResponse] = DeriveJsonEncoder.gen[HistoryResponse]
  given JsonDecoder[HistoryResponse] = DeriveJsonDecoder.gen[HistoryResponse]
}
