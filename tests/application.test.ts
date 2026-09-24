import request from "supertest";
import app from "../src/app";

describe("Application API", () => {
  it("should return health status", async () => {
    const response = await request(app)
      .get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  it("should create a job application", async () => {
    const response = await request(app)
      .post("/applications")
      .send({
        company: "Abstrabit Technologies",
        role: "Software Engineer I - SDE1",
        status: "applied"
      });

    expect(response.status).toBe(201);
    expect(response.body.data.company)
      .toBe("Abstrabit Technologies");
  });

  it("should reject invalid application data", async () => {
    const response = await request(app)
      .post("/applications")
      .send({
        company: "A",
        role: "",
        status: "wrong-status"
      });

    expect(response.status).toBe(400);
  });

  it("should update application status", async () => {
    const createResponse = await request(app)
      .post("/applications")
      .send({
        company: "Goodspace",
        role: "Software Engineer",
        status: "applied"
      });

    const id = createResponse.body.data.id;

    const updateResponse = await request(app)
      .patch(`/applications/${id}/status`)
      .send({
        status: "pending"
      });

    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.data.status)
      .toBe("pending");
  });

  it("should return 404 for an unknown application", async () => {
    const response = await request(app)
      .get("/applications/unknown-id");

    expect(response.status).toBe(404);
  });
});