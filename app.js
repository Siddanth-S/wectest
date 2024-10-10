
// Access environment variables
const appName = process.env.APP_NAME || "Unknown App";
const appVersion = process.env.APP_VERSION || "0.0.0";

// Simple application that logs the environment variables
console.log("Welcome to " + appName + " v" + appVersion);