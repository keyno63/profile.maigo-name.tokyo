package tokyo.keyno63.profile.backend.healthcare.model

import java.time.{LocalDate, OffsetDateTime}

import zio.json._

final case class MealCalories(
    breakfast: Int,
    lunch: Int,
    dinner: Int,
    snacks: Int
)

final case class HealthcareTimelineEntry(
    recordedAt: OffsetDateTime,
    weightKg: Double
)

final case class DailyHealthcareSummary(
    date: LocalDate,
    weightKg: Double,
    calories: MealCalories,
    timeline: List[HealthcareTimelineEntry]
)

object HealthcareJsonCodec {
  given JsonEncoder[LocalDate] = JsonEncoder[String].contramap(_.toString)
  given JsonDecoder[LocalDate] = JsonDecoder[String].map(LocalDate.parse)

  given JsonEncoder[OffsetDateTime] = JsonEncoder[String].contramap(_.toString)
  given JsonDecoder[OffsetDateTime] = JsonDecoder[String].map(OffsetDateTime.parse)

  given JsonEncoder[MealCalories] = DeriveJsonEncoder.gen[MealCalories]
  given JsonDecoder[MealCalories] = DeriveJsonDecoder.gen[MealCalories]

  given JsonEncoder[HealthcareTimelineEntry] = DeriveJsonEncoder.gen[HealthcareTimelineEntry]
  given JsonDecoder[HealthcareTimelineEntry] = DeriveJsonDecoder.gen[HealthcareTimelineEntry]

  given JsonEncoder[DailyHealthcareSummary] = DeriveJsonEncoder.gen[DailyHealthcareSummary]
  given JsonDecoder[DailyHealthcareSummary] = DeriveJsonDecoder.gen[DailyHealthcareSummary]
}
