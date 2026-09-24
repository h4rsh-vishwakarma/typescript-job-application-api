import { randomUUID } from "crypto";
import {
  JobApplication,
  ApplicationStatus
} from "../types/application.types";
import { CreateApplicationInput } from "../schemas/application.schema";

const applications: JobApplication[] = [];

export const applicationRepository = {
  create(input: CreateApplicationInput): JobApplication {
    const application: JobApplication = {
      id: randomUUID(),
      company: input.company,
      role: input.role,
      status: input.status,
      createdAt: new Date().toISOString()
    };

    applications.push(application);
    return application;
  },

  findById(id: string): JobApplication | undefined {
    return applications.find((application) => application.id === id);
  },

  updateStatus(
    id: string,
    status: ApplicationStatus
  ): JobApplication | undefined {
    const application = applications.find(
      (application) => application.id === id
    );

    if (!application) {
      return undefined;
    }

    application.status = status;
    return application;
  }
};