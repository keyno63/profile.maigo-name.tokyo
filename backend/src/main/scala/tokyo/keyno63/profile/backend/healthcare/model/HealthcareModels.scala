package tokyo.keyno63.profile.backend.healthcare.model

import zio.json._

final case class MealCalories(
    breakfast: Int,
    lunch: Int,
    dinner: Int,
    snacks: Int
) {
  def withCalories(status: Int, calories: Int): MealCalories =
    status match {
      case 0 => copy(breakfast = calories)
      case 1 => copy(lunch = calories)
      case 2 => copy(dinner = calories)
      case 3 => copy(snacks = calories)
      case _ => this
    }
}

object MealCalories {
  val empty: MealCalories = MealCalories(0, 0, 0, 0)
}

final case class DailyHealth(
    date: Int,
    weightKg: Int,
    calories: MealCalories
)

final case class HealthResponse(
    health: List[DailyHealth]
)

object HealthcareJsonCodec {
  given JsonEncoder[MealCalories] = DeriveJsonEncoder.gen[MealCalories]
  given JsonDecoder[MealCalories] = DeriveJsonDecoder.gen[MealCalories]

  given JsonEncoder[DailyHealth] = DeriveJsonEncoder.gen[DailyHealth]
  given JsonDecoder[DailyHealth] = DeriveJsonDecoder.gen[DailyHealth]

  given JsonEncoder[HealthResponse] = DeriveJsonEncoder.gen[HealthResponse]
  given JsonDecoder[HealthResponse] = DeriveJsonDecoder.gen[HealthResponse]
}
