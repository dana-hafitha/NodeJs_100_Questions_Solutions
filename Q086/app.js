"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
];
function printUser(user) {
    console.log(`User: ${user.name} (${user.email})`);
}
users.forEach(printUser);
//# sourceMappingURL=app.js.map