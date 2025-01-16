import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function UsersTable() {
  const { managerId } = useParams();
  const [user, setUser] = useState([]);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });

  useEffect(() => {
    if (!managerId) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/manager/${managerId}/users`
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          // console.log(data[0].firstName); // Safely log here

          // console.log(user);
        }
      } catch (error) {
        console.error("Error fetching Users:", error);
      }
      // console.log(user[0].firstName);
      // console.log(user.books);
      // console.log("Check",data[0].firstName); // Safely log here
    };

    fetchUsers();
  }, [managerId]);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/manager/${managerId}/user/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setUser(user.filter((user) => user.userId !== userId));
        setAlert({
          visible: true,
          message: "User deleted successfully.",
          type: "success",
        });
      } else {
        setAlert({
          visible: true,
          message: "Failed to delete user.",
          type: "danger",
        });
      }
    } catch (error) {
      console.error("Some error occured. please try again later.");
      setAlert({
        visible: true,
        message: "Some error occured. Please try again later",
        type: "danger",
      });
    }
    setTimeout(() => {
      setAlert({ visible: false, message: "", type: "" });
    }, 2000);
  };

  return (
    <div className="container">
      <div className="container mt-3">
        {alert.visible && (
          <div className={`alert alert-${alert.type}`} role="alert">
            {alert.message}
          </div>
        )}
      </div>
      <h2>Users Managed by Manager {managerId}</h2>
      {user.length > 0 ? (
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Books</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
                <td>
                  {user.books.length > 0
                    ? user.books.map((book) => book.bookName).join(", ")
                    : "No Books"}
                </td>
                <td>
                  {/* Delete button */}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.userId)}
                  >
                    Delete
                  </button>

                  <div className="ml-3 vr"> </div>
                    <div className="vr"> </div>
                    <div className="vr"> </div>
                  {/* Update button redirects to AddBook with prepopulated data */}
                  <Link
                      to={`/addUser/${managerId}/updateUser/${user.userId}`}
                    >
                      <button className=" btn btn-primary">Update</button>
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading Users...</p>
      )}
    </div>
  );
}

export default UsersTable;
