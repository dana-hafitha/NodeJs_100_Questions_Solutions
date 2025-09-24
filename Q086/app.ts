const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

function printUser(user: User) {
  console.log(`User: ${user.name} (${user.email})`);
}

users.forEach(printUser);