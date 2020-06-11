import React from "react";

import UsersList from "../components/UsersList/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Imie nazwisko",
      image:
        "https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg?size=338&ext=jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
