const reqeust = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/conection");

describe("ong", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ong", async () => {
    const response = await reqeust(app)
      .post("/ongs")
      .send({
        name: "ong nova",
        email: "ong@nova.com",
        whatsapp: "1234567890",
        city: "Gotham",
        uf: "BT"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
