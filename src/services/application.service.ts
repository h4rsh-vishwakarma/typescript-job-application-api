import {
  ApplicationStatus,
  JobApplication
} from "../types/application.types";
import {
  CreateApplicationInput
} from "../schemas/application.schema";
import { applicationRepository } from "../repositories/application.repository";

export const applicationService = {
  createApplication(input: CreateApplicationInput): JobApplication {
    return applicationRepository.create(input);
  },

  getApplicationById(id: string): JobApplication {
    const application = applicationRepository.findById(id);

    if (!application) {
      throw new Error("Application not found");
    }

    return application;
  },

  updateApplicationStatus(
    id: string,
    status: ApplicationStatus
  ): JobApplication {
    const application = applicationRepository.updateStatus(id, status);

    if (!application) {
      throw new Error("Application not found");
    }

    return application;
  }
};