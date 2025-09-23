async function insertTwoUsers() {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const user1 = new User({ email: "first@example.com" });
    await user1.save({ session });
    const user2 = new User({ email: "second@example.com" });
    await user2.save({ session });

    await session.commitTransaction();
    console.log("Both users inserted successfully");

  } catch (err) {
    console.error("Transaction error:", err);
    await session.abortTransaction();
  } finally {
    session.endSession();
  }
}