const getUsers = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        { username: "john", email: "john@test.com" },
        { username: "jane", email: "jane@test.com" },
      ]);
    }, 1000);
  });
};
getUsers().then((users) => {
  const john = users.find(({ username, email }) => username === "john");
  console.log(john);
});
