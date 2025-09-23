const mongoose = require("mongoose");
 
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
    ]
 },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

// use the aggregation to get the sum of users in the same month
async function usersByMonth() {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 }
        },
      },
      { $sort: { "_id": 1 } }
    ]);

    console.log("Users per month:", result);
  } catch (err) {
    console.error("Aggregation error:", err);
  }
}

usersByMonth();