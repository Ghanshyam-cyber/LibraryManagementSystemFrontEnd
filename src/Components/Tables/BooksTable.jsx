import React, { useState, useEffect } from "react";
import { data, useParams } from "react-router";

export default function BooksTable() {
  const {managerId} = useParams();
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
          </tr>
        </thead>
        <tbody>
          {books.map((books)=> (
            <tr key={books.id}>
              <td>{books.bookId}</td>
              <td>{books.bookName}</td>
              <td>{books.authorName}</td>
              <td>{books.status ? "Availabe" : "Not Available"}</td>
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
