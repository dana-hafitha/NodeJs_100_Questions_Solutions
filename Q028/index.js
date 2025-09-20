const {setTimeout} = require("node:timers/promises");

async function abortedFunction({ signal }) {
  return setTimeout(10000, null, { signal });
}

async function abortFunction() {
  const controller = new AbortController();
  const signal = controller.signal;

  setTimeout(() => controller.abort(), 5000); // Abort after 5 seconds

  try {
    await abortedFunction({ signal });
    console.log("Completed slow operation");
  } catch (err) {
    if (err.name === "AbortError") {
      console.error("Operation aborted");
    } else {
      console.error("Failed to complete slow operation due to error:", err);
    }
  }
}
abortFunction();
