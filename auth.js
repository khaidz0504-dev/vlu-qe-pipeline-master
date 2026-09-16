const lockedUsers = ["locked"];

function login(username, password) {
    if (!username || !password) {
        return false;
    }

    if (lockedUsers.includes(username)) {
        return false;
    }

   return username === "admin" && password === "9999";
}

module.exports = { login };
// Updated login validation
