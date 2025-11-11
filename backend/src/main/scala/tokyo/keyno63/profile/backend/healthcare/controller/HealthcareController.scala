package tokyo.keyno63.profile.backend.healthcare.controller

import tokyo.keyno63.profile.backend.healthcare.model.HealthResponse
import tokyo.keyno63.profile.backend.healthcare.service.HealthcareService

final case class HealthcareController(service: HealthcareService) {
  def dailySummaries(): HealthResponse =
    service.dailySummaries()
}
