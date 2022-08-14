import { hellTemperature } from "./hello";
describe("Hello", () => {
  it("It's warm in hell", () => {
    expect(hellTemperature()).toBeGreaterThan(1000);
  });

  it("Fusion doesn't happen in hell", () => {
    expect(hellTemperature()).toBeLessThan(100 * 1000 * 1000);
  });
});
