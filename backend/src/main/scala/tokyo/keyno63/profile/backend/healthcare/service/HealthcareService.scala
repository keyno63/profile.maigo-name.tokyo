package tokyo.keyno63.profile.backend.healthcare.service

import tokyo.keyno63.profile.backend.healthcare.model.{HealthResponse}
import tokyo.keyno63.profile.backend.healthcare.repository.HealthcareRepository

trait HealthcareService {
  def dailySummaries(): HealthResponse
}

final case class HealthcareServiceLive(repository: HealthcareRepository) extends HealthcareService {
  override def dailySummaries(): HealthResponse =
    HealthResponse(repository.fetchDailySummaries())
}
