import { Request, Response } from "express";
import {
  createApplicationSchema,
  updateStatusSchema
} from "../schemas/application.schema";
import { applicationService } from "../services/application.service";

export const createApplication = (
  req: Request,
  res: Response
): void => {
  const result = createApplicationSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "Validation failed",
      details: result.error.flatten()
    });
    return;
  }

  const application = applicationService.createApplication(result.data);

  res.status(201).json({
    message: "Application created successfully",
    data: application
  });
};

export const getApplicationById = (
  req: Request,
  res: Response
): void => {
  const { id } = req.params;

  if (typeof id !== "string") {
    res.status(400).json({
      error: "Invalid application id"
    });
    return;
  }

  try {
    const application = applicationService.getApplicationById(id);

    res.status(200).json({
      data: application
    });
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error
        ? error.message
        : "Application not found"
    });
  }
};

export const updateApplicationStatus = (
  req: Request,
  res: Response
): void => {
  const result = updateStatusSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "Invalid status",
      details: result.error.flatten()
    });
    return;
  }

  const { id } = req.params;

if (typeof id !== "string") {
  res.status(400).json({
    error: "Invalid application id"
  });
  return;
}

  try {
    const application =
  applicationService.updateApplicationStatus(
    id,
    result.data.status
  );

    res.status(200).json({
      message: "Application status updated",
      data: application
    });
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error
        ? error.message
        : "Application not found"
    });
  }
};