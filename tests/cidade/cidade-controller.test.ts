import app from "../../src/server/app";
import request from "supertest";


describe("Controller - Cidade", () => {
  test("POST/ Create", async () => {
    
    const response = await request(app)
      .post("/cidade")
      .send({
        "id":1,
        "nome":"Barretos"
      });

    expect(response.statusCode).toBe(201);
    
  });

  return;
});