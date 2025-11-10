package tokyo.keyno63.profile.backend.healthcare.service

import tokyo.keyno63.profile.backend.healthcare.model.DailyHealthcareSummary
import tokyo.keyno63.profile.backend.healthcare.repository.HealthcareRepository

trait HealthcareService {
  def dailySummaries(): List[DailyHealthcareSummary]
}

final case class HealthcareServiceLive(repository: HealthcareRepository) extends HealthcareService {
  override def dailySummaries(): List[DailyHealthcareSummary] =
    repository.fetchDailySummaries()
}
