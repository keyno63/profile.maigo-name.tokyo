package tokyo.keyno63.profile.backend.healthcare.repository

import java.time.{LocalDate, LocalTime, OffsetDateTime, ZoneOffset}

import tokyo.keyno63.profile.backend.healthcare.model._

trait HealthcareRepository {
  def fetchDailySummaries(): List[DailyHealthcareSummary]
}

final class HealthcareRepositorySample extends HealthcareRepository {
  private val timezone    = ZoneOffset.ofHours(9)
  private val today       = LocalDate.now(timezone)
  private val yesterday   = today.minusDays(1)
  private val twoDaysAgo  = today.minusDays(2)

  // Compose timeline samples for readability
  private def timelineFor(date: LocalDate, baseWeight: Double): List[HealthcareTimelineEntry] =
    List(
      HealthcareTimelineEntry(OffsetDateTime.of(date, LocalTime.of(7, 30), timezone), baseWeight + 0.2),
      HealthcareTimelineEntry(OffsetDateTime.of(date, LocalTime.of(12, 15), timezone), baseWeight),
      HealthcareTimelineEntry(OffsetDateTime.of(date, LocalTime.of(21, 0), timezone), baseWeight - 0.3)
    )

  private val sampleData: List[DailyHealthcareSummary] = List(
    DailyHealthcareSummary(
      date = today,
      weightKg = 63.4,
      calories = MealCalories(breakfast = 420, lunch = 640, dinner = 710, snacks = 180),
      timeline = timelineFor(today, 63.4)
    ),
    DailyHealthcareSummary(
      date = yesterday,
      weightKg = 63.8,
      calories = MealCalories(breakfast = 480, lunch = 610, dinner = 690, snacks = 150),
      timeline = timelineFor(yesterday, 63.8)
    ),
    DailyHealthcareSummary(
      date = twoDaysAgo,
      weightKg = 64.1,
      calories = MealCalories(breakfast = 450, lunch = 630, dinner = 720, snacks = 200),
      timeline = timelineFor(twoDaysAgo, 64.1)
    )
  )

  override def fetchDailySummaries(): List[DailyHealthcareSummary] = sampleData
}

object HealthcareRepositorySample {
  def apply(): HealthcareRepositorySample = new HealthcareRepositorySample()
}
