"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe("Application API", () => {
    it("should return health status", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .get("/health");
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("ok");
    });
    it("should create a job application", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
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
        const response = await (0, supertest_1.default)(app_1.default)
            .post("/applications")
            .send({
            company: "A",
            role: "",
            status: "wrong-status"
        });
        expect(response.status).toBe(400);
    });
    it("should update application status", async () => {
        const createResponse = await (0, supertest_1.default)(app_1.default)
            .post("/applications")
            .send({
            company: "Goodspace",
            role: "Software Engineer",
            status: "applied"
        });
        const id = createResponse.body.data.id;
        const updateResponse = await (0, supertest_1.default)(app_1.default)
            .patch(`/applications/${id}/status`)
            .send({
            status: "pending"
        });
        expect(updateResponse.status).toBe(200);
        expect(updateResponse.body.data.status).toBe("pending");
    });
    it("should return 404 for an unknown application", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .get("/applications/unknown-id");
        expect(response.status).toBe(404);
    });
});
