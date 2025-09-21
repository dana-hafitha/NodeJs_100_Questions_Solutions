async function doSomething() {
  if (Math.random() < 0.5) {
    return "Success!";
  } else {
    throw new Error("Failed!");
  }
}

async function retry(fn, times) {
  let Error;
  for (let i = 1; i <= times; i++) {
    try {
      return await fn();
    } catch (err) {
      Error = err;
      if (i === times) {
        throw Error;
      }
    }
  }
}

async function test() {
  try {
    const result = await retry(doSomething, 1);
    console.log("Final result:", result);
  } catch (err) {
    console.error("All attempts failed:", err.message);
  }
};


test();