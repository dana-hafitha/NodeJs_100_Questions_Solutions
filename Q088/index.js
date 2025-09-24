const express = require("express");
const {z} = require("zod");

const app = express();
app.use(express.json());

const userSchema = z.object({
  email: z.string().email(),
  age: z.number().int().positive(),
});

app.get("/user", (req, res) => {
  try {
    const validatedData = userSchema.parse({
      email: req.query.email,
      age: Number(req.query.age)
    });
    res.send({ message: "User is valid!", data: validatedData });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ message: "Validation failed", errors: err.errors });
    }
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));