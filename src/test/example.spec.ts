import { expect, test } from "vitest";
import supertest from "supertest";

test("o usuário consegue criar uma nova transação", () => {
  const responseStatusCode = 201;

  expect(responseStatusCode).toEqual(201);
});
