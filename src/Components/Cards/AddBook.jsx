import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function AddBook() {
  const { managerId ,bookId} = useParams();
  const navigate = useNavigate();
  const [bookDetails, setBookDetails] = useState({
    bookName: "",
    authorName: "",
    noOfCopies: "",
  });

  const [alert, setAlert] = useState({
    visibile: false,
    message: "",
    type: "",
  });

  const handleOnChange = (event) => {
    const { id, value } = event.target;
    setBookDetails((prev) => ({
      ...prev,
      [id]: value, // Correctly update the state based on the id
    }));
  };

  // Fetch the book details for update if bookId is available
  useEffect(() => {
    if (bookId) {
      // console.log(`Fetching book with managerId: ${managerId} and bookId: `,bookId);  
      const fetchBookDetails = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/manager/${managerId}/updateBook/${bookId}`, // Correct URL format
            {
              method: "PUT",
              headers: {
                "Content-Type" : "application/json",
              },
              body: JSON.stringify(bookDetails),
            }
          );
          if (response.ok) {
            const data = await response.json();
            setBookDetails(data); // Populate form with current book data
          } else {
            setAlert({
              visible: true,
              message: "Failed to load book details",
              type: "danger",
            });
          }
        } catch (error) {
          console.error("Error fetching book details:", error);
          setAlert({
            visible: true,
            message: "Some error occurred. Please try again later.",
            type: "danger",
          });
        }
      };
  
      fetchBookDetails();
    }
  }, [bookId, managerId]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !bookDetails.bookName ||
      !bookDetails.authorName ||
      !bookDetails.noOfCopies
    ) {
      setAlert({
        visibile: true,
        message: "Please fill all the fields",
        type: "danger",
      });
      return;
    }

    try {  

      const url = bookId
        ? `http://localhost:8080/manager/${managerId}/updateBook/${bookId}`
        : `http://localhost:8080/manager/${managerId}/book`;
      const methods = bookId ? "PUT" : "POST";

      const response = await fetch(url, {
        method: methods,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookDetails),
      });
      if (response.ok) {
        setAlert({
          visibile: true,
          message: bookId
            ? "Book Updated Successfully."
            : "Book added successfully",
          type: "success",
        });
        setBookDetails({ bookName: "", authorName: "", noOfCopies: "" });
        // Redirect after 2 seconds
        setTimeout(() => {
          navigate(`/books/${managerId}`);
        }, 1000);
      } else {
        setAlert({
          visibile: true,
          message: "Failed to add book",
          type: "danger",
        });
      }
    } catch (error) {
      console.error("Error adding Book");
      setAlert({
        visibile: true,
        message: "Some error occured. Please try again later.",
        type: "danger",
      });
    }
    setTimeout(() => {
      setAlert({ visible: false, message: "", type: "" });
    }, 2000);
  };

  return (
    <div
      className="container mt-3 border border-grey rounded"
      style={{ width: "40rem", height: "auto" }}
    >
      <div className="container mt-3">
        {alert.visibile && (
          <div className={`alert alert-${alert.type}`} role="alert">
            {alert.message}
          </div>
        )}
      </div>
      <div className="container mt-3">
        <h3 className="text-center">{bookId ? "UPDATE BOOK" : "ADD BOOK"}</h3>
        <hr className="hr" />
      </div>
      <form className="row g-3 mt-3 mx-2 mb-2">
        <div className="col-12">
          <label htmlFor="bookName" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="bookName"
            placeholder="Book name"
            value={bookDetails.bookName}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="authorName" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="authorName"
            placeholder="Author name"
            value={bookDetails.authorName}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="noOfCopies" className="form-label">
            Number of Copies
          </label>
          <input
            type="text"
            className="form-control"
            id="noOfCopies" // Corrected id to match bookDetails property
            placeholder="Number of copies"
            value={bookDetails.noOfCopies}
            onChange={handleOnChange}
          />
        </div>
        <hr className="hr" />
        <div className="col-12 d-grid gap-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            {bookId ? "Update" : "Book"}
          </button>
        </div>
      </form>
    </div>
  );
}



 // const response = await fetch(
      //   `http://localhost:8080/manager/${managerId}/book`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(bookDetails),
      // }
      // );
      // if (response.ok) {
      //   setAlert({
      //     visibile: true,
      //     message: "Book added successfully",
      //     type: "success",
      //   });
      //   setBookDetails({ bookName: "", authorName: "", noOfCopies: "" });
      // } else {
      //   setAlert({
      //     visibile: true,
      //     message: "Failed to add book",
      //     type: "danger",
      //   });
      // }
