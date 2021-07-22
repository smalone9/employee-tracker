const { test } = require("@jest/globals");
const checkServer = require("../utils/checkServer");

test("checkServer() returns null if all properties appear", () => {
    const obj = {name: "Trevor"};

    expect(checkServer(obj, "name")).toBe(null);
});