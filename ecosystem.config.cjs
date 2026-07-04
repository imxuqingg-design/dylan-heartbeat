module.exports = {
  apps: [
    {
      name: "gateway",
      script: "server.js",
      cwd: __dirname,
      autorestart: true,
      max_restarts: 10,
    },
    {
      name: "wake-up",
      script: "wake_up.js",
      cwd: __dirname,
      autorestart: true,
      max_restarts: 10,
    },
  ],
};
