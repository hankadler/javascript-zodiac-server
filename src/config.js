import { dirname } from "path";
import { fileURLToPath } from "url";

// input
const _env = "dev"; // "dev", "test" or "prod"
const _port = "3000";
const _host = ""; // ec2 private-ip

// output
const root = dirname(fileURLToPath(import.meta.url));
const env = _env || "dev";
const port = _port || "3000";
const host = _host || `http://localhost:${port}`;

export default {
  root,
  env,
  port,
  host,
};
