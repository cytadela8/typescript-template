import { getLogger } from "./logging";
import "dotenv/config";

const logger = getLogger("hello");

export const hellTemperature = (): number => 10000;

const main = () => {
  const temperature = hellTemperature();
  logger.info(process.env["MSG"] ?? "Hell World", { temperature });
};

if (require.main === module) {
  main();
}
