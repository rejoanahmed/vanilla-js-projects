function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ]);
  }, 1000);
}
const finduser = (callback) => {
  getUsers((users) => {
    const res = users.find(({ username, email }) => {
      return username === "john";
    });
    callback(res);
  });
};

// function findUser(callback) {
//   getUsers((users) => {
//     const user = users.find(({ username, email }) => username === "john");
//     callback(user);
//   });
// }
// console.log("first");
finduser(console.log);
// console.log(getUsers().find(({ username, email }) => username === "john"));
