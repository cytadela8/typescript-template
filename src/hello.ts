import { getLogger } from "./logging";
import "dotenv/config";

const logger = getLogger("hello");

export const hellTemperature = (): number => 10000;

const main = () => {
  const temperature = hellTemperature();
  const message = process.env["MSG"] ?? "Hell world";
  logger.info(message, { temperature });
};

if (require.main === module) {
  main();
}
