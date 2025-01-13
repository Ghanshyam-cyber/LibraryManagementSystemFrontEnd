import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function BooksTable() {
  const { managerId } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!managerId) return;

    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/manager/${managerId}/books`
        );
        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();

    // fetch(`http://localhost:8080/manager/books/${managerId}`)
    // .then((response) =>response.json())
    // .then((data) => setBooks(data))
    // .then((error) => console.error("Error fetching Data: " + error));
  }, [managerId]);


  // Handle Delete 
  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/manager/${managerId}/book/${bookId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setBooks(books.filter((book) => book.id !== bookId));
        alert("Book deleted successfully.");
      } else {
        alert("Failed to delete Book!");
      }
    } catch (error) {
      console.error("Some error occured: ", error);
      alert("Some error occcured while deleting book.");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-3">Books Managed by Manager {managerId}</h2>
      {books.length > 0 ? (
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">Book Id</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.bookId}</td>
                <td>{book.bookName}</td>
                <td>{book.authorName}</td>
                <td>{book.status ? "Availabe" : "Not Available"}</td>
                <td>
                  {/* Delete button */}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>

                  {/* <button
                    className="btn btn-success"
                    onClick={() => handleDelete(books.id)}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading books...</p>
      )}
    </div>
  );
}
