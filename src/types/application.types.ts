export type ApplicationStatus =
  | "applied"
  | "pending"
  | "rejected"
  | "accepted";

export interface JobApplication {
  id: string;
  company: string;
  role: string;
  status: ApplicationStatus;
  createdAt: string;
}