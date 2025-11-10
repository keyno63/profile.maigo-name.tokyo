package tokyo.keyno63.profile.backend.healthcare.controller

import tokyo.keyno63.profile.backend.healthcare.model.DailyHealthcareSummary
import tokyo.keyno63.profile.backend.healthcare.service.HealthcareService

final case class HealthcareController(service: HealthcareService) {
  def dailySummaries(): List[DailyHealthcareSummary] =
    service.dailySummaries()
}
