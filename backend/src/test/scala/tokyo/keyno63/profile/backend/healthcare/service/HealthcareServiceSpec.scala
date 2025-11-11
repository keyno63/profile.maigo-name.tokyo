package tokyo.keyno63.profile.backend.healthcare.service

import org.scalatest.wordspec.AnyWordSpec
import org.scalatest.matchers.should.Matchers
import tokyo.keyno63.profile.backend.healthcare.model.{DailyHealth, MealCalories}
import tokyo.keyno63.profile.backend.healthcare.repository.HealthcareRepository

final class HealthcareServiceSpec extends AnyWordSpec with Matchers {

  private final class FakeHealthcareRepository(rows: List[DailyHealth]) extends HealthcareRepository {
    override def fetchDailySummaries(): List[DailyHealth] = rows
  }

  "HealthcareServiceLive" should {
    "wrap repository rows inside HealthResponse" in {
      val repo = new FakeHealthcareRepository(
        List(
          DailyHealth(
            date = 20241010,
            weightKg = 64,
            calories = MealCalories(breakfast = 300, lunch = 600, dinner = 800, snacks = 150)
          ),
          DailyHealth(
            date = 20241009,
            weightKg = 63,
            calories = MealCalories(breakfast = 250, lunch = 550, dinner = 750, snacks = 100)
          )
        )
      )

      val response = HealthcareServiceLive(repo).dailySummaries()

      response.health should have size 2
      response.health.head.date shouldBe 20241010
      response.health.head.calories.dinner shouldBe 800
    }
  }

  "MealCalories.withCalories" should {
    "assign calories to the correct meal slot based on status code" in {
      val base = MealCalories.empty
        .withCalories(0, 100)
        .withCalories(1, 200)
        .withCalories(2, 300)
        .withCalories(3, 400)
        .withCalories(99, 999) // ignored

      base.breakfast shouldBe 100
      base.lunch shouldBe 200
      base.dinner shouldBe 300
      base.snacks shouldBe 400
    }
  }
}
