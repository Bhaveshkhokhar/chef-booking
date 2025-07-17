const getUsers = async (signal) => {
  try {
    const response = await fetch("http://localhost:3001/get-users", {
      signal,
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 401) {
        return { isLoggedIn: false };
      }
      if (response.status === 404) {
        return { isLoggedIn: false };
      }
      if (response.status === 500) {
        throw new Error("Internal server error");
      }
      throw new Error("Failed to fetch authentication status");
    }
    return mapServerUsersToLocalUsers(data.usersdetail);
  } catch (err) {
    throw err;
  }
};
const mapServerUsersToLocalUsers = (users) => {
  return users.map((user) => {
    return {
     id:user.id,
     email:user.email,
     gender:user.gender,
     image:user.image,
     mobile:user.mobile,
     status:user.status,
     name:user.name,
    };
  });
};
export default getUsers;
