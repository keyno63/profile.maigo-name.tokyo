package tokyo.keyno63.profile.backend.healthcare.repository

import java.time.LocalDate

import tokyo.keyno63.profile.backend.healthcare.model.{DailyHealth, MealCalories}

trait HealthcareRepository {
  def fetchDailySummaries(): List[DailyHealth]
}

final class HealthcareRepositorySample extends HealthcareRepository {
  private val today      = LocalDate.now()
  private val yesterday  = today.minusDays(1)
  private val twoDaysAgo = today.minusDays(2)

  private val sampleData: List[DailyHealth] = List(
    DailyHealth(
      date = today.toString.replace("-", "").toInt,
      weightKg = 64,
      calories = MealCalories(breakfast = 420, lunch = 640, dinner = 710, snacks = 180)
    ),
    DailyHealth(
      date = yesterday.toString.replace("-", "").toInt,
      weightKg = 64,
      calories = MealCalories(breakfast = 480, lunch = 610, dinner = 690, snacks = 150)
    ),
    DailyHealth(
      date = twoDaysAgo.toString.replace("-", "").toInt,
      weightKg = 65,
      calories = MealCalories(breakfast = 450, lunch = 630, dinner = 720, snacks = 200)
    )
  )

  override def fetchDailySummaries(): List[DailyHealth] = sampleData
}

object HealthcareRepositorySample {
  def apply(): HealthcareRepositorySample = new HealthcareRepositorySample()
}
