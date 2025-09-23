// Create a new user
async function createUser(email) {
  try {
    const user = new User({ email });
    const savedUser = await user.save();
    console.log("User created:", savedUser);
  } catch (err) {
    console.error("Error creating user:", err.message);
  }
}

// Find a user by email
async function findUserByEmail(email) {
  try {
    const user = await User.findOne({ email });
    console.log("User found:", user);
  } catch (err) {
    console.error("Error finding user:", err.message);
  }
}

// Update a user by email
async function updateUser(email, newEmail) {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { email: newEmail },
      { new: true } // return updated doc
    );
    console.log("User updated:", updatedUser);
  } catch (err) {
    console.error("Error updating user:", err.message);
  }
}

// Delete a user by email
async function deleteUser(email) {
  try {
    const deletedUser = await User.findOneAndDelete({ email });
    console.log("User deleted:", deletedUser);
  } catch (err) {
    console.error("Error deleting user:", err.message);
  }
}