import config from "./config";
import app from "./app";

let server;

try {
  server = app.listen(config.port, () => console.log(`Server on port: ${config.port}\n`));
} catch (err) {
  console.log(err.message);
  process.kill(process.pid, "SIGTERM");
}

process.on("SIGTERM", () => {
  server.close(() => console.log("Server closed"));
});
