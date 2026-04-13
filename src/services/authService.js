const users = [
  { username: "Tayyaba", password: "Altamash786Tayyaba" },
];

export const loginUser = (username, password) => {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("auth", "true");
    return true;
  }
  return false;
};

export const logoutUser = () => {
  localStorage.removeItem("auth");
};