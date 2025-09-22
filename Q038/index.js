function runMiddlewares(middlewares, req, res) {
  let index = 0;

  function next(err) { // to handle the asynchronous behavior
    if (err) {
      console.error("Middleware error:", err);
      return;
    }
    const middleware = middlewares[index++];
    if (middleware) {
      middleware(req, res, proceed);
    }
  }
  next();
}


const middlewares = [
  (req, res, next) => {
    console.log("Middleware 1: Logging request");
    next();
  },
  (req, res, next) => {
    console.log("Middleware 2: Adding data to response");
    next();
  },
  (req, res, next) => {
    console.log("Middleware 3: Final step");
    next();
  }
];

const req = {};
const res = {};

runMiddlewares(middlewares, req, res);

