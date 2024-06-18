import app from "../../src/server/app";
import request from "supertest";


describe("Controller - Cidade", () => {
  
  test("GET/ GetAll", async () => {
    
    const response = await request(app)
      .get("/cidade");

    expect(response.statusCode).toBe(200);
    
  });

  test("GET/ GetById", async () => {

    const response = await request(app)
      .get("/cidade/1");

    expect(response.statusCode).toBe(200);

  });

  test("Delete/ Delete", async () => {

    const response = await request(app)
      .delete("/cidade/1");

    expect(response.statusCode).toBe(204);

  });

  test("PUT/ Update", async () => {

    const response = await request(app)
      .put("/cidade")
      .send({
        "id":1,
        "nome":"Barretos"
      });

    expect(response.statusCode).toBe(204);

  });

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