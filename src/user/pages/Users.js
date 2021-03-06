import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList/UsersList";
import ErrorModal from "../../shared/components/UI/ErrorModal";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  // const USERS = [
  //   {
  //     id: "u1",
  //     name: "Imie nazwisko",
  //     image:
  //       "https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg?size=338&ext=jpg",
  //     places: 3,
  //   },
  // ];

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users");

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.message);
      }

      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </>
  );
};

export default Users;
