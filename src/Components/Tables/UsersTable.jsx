import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function UsersTable() {
  const { managerId } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!managerId) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/manager/${managerId}/users`
        );
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          throw new Error("Failed to fetch users.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [managerId]);

  if (loading) return <p>Loading Users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h2>Users Managed by Manager {managerId}</h2>
      {users.length > 0 ? (
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Books</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
                <td>
                  {user.books.length > 0 ? (
                    <ul>
                      {user.books.map((book) => (
                        <li key={book.bookId}>
                          {book.bookName} by {book.authorName} (
                          {book.status ? "Available" : "Not Available"})
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No books assigned</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found for this manager.</p>
      )}
    </div>
  );
}

export default UsersTable;




