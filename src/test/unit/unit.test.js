import getSigner from "../../utils/getSigner";
import getUsers from "../../utils/getUsers";

/* To be completed */

describe("getSigner()", () => {
  test("should return signer", async () => {
    const signer = await getSigner();

    expect(signer).toBe(true);
  });
});

describe("getUser()", () => {
  test("should return users", async () => {
    const users = await getUsers();

    expect(signer).toBe(true);
  });
});
