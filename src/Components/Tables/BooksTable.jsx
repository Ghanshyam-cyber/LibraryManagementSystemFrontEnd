import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

export default function BooksTable() {
  const { managerId } = useParams();
  const [books, setBooks] = useState([]);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });
  // const [bookDetails, setBookDetails] = {
  //   bookName: "",
  //   authorName: "",
  //   noOfCopies: "",
  // };

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
        setBooks(books.filter((book) => book.bookId !== bookId));
        setAlert({
          visible: true,
          message: "Book deleted successfully",
          type: "success",
        });
      } else {
        setAlert({
          visible: true,
          message: "Book deleted successfully",
          type: "danger",
        });
      }
    } catch (error) {
      console.error("Some error occured: ", error);
      setAlert({
        visible: true,
        message: "Book deleted successfully",
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
      <h2 className="text-center mt-3">Books Managed by Manager {managerId}</h2>
      {books.length > 0 ? (
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">Book Id</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              {/* <th scope="col">Status</th> */}
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.bookId}>
                <td>{book.bookId}</td>
                <td>{book.bookName}</td>
                <td>{book.authorName}</td>
                {/* <td>{book.status ? "Availabe" : "Not Available"}</td> */}
                <td>
                  {/* Delete book */}
                  <div className="container">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(book.bookId)}
                    >
                      Delete
                    </button>
                    <div className="ml-3 vr"> </div>
                    <div className="vr"> </div>
                    <div className="vr"> </div>

                    {/* Update button redirects to AddBook with prepopulated data */}
                    <Link
                      to={`/addBook/${managerId}/updateBook/${book.bookId}`}
                    >
                      <button className=" btn btn-primary">Update</button>
                    </Link>
                  </div>
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
