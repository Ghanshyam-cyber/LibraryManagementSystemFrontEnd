import React, { useState } from "react";
import { useParams } from "react-router";

function BookAssign() {
  const [message, setMessage] = useState();
  const { managerId } = useParams();
  const [assign, setAssign] = useState({
    userId: "",
    // userName: "",
    bookId: "",
    // bookName: "",
  });

   // Handle changes to input fields
   const handleOnChange = (event) => {
    const { id, value } = event.target;
    setAssign((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/manager/${managerId}/assign`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(assign),
        }
      );
      if (response.ok) {
        setAssign({
          userId: "",
          bookId: "",
        });
        setMessage("Book has been Assigned successfully.");
      }else{
        setMessage("Book not assigned. Please try again later.");
      }
    } catch (error) {
        console.error("Some error occured!" , error);
        setMessage("Some error occcured. Please again later.")
    }
  };

  return (
    <div
      className="container mt-3 border border-grey rounded"
      style={{ width: "40rem", height: "auto" }}
    >
      <div className="container mt-3">
        <h3 className="text-center">ASSIGN BOOK</h3>

        <hr className="hr" />
      </div>
      <form className="row g-3 mt-3 mx-2 mb-2">
        <div className="col-12">
          <label htmlFor="userId" className=" form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="user id"
            value={assign.userId}
            onChange={handleOnChange}
          />
          {/* <div className="container text-center" value={assign.userName} ></div> */}
        </div>
        <div className="col-12">
          <label htmlFor="bookId" className="form-label">
            Book Id
          </label>
          <input
            type="text"
            className="form-control"
            id="bookId"
            placeholder="book id"
            value={assign.bookId}
            onChange={handleOnChange}
          />
        </div>
        {/* <div className="form-check form-switch">
        <input
         className="form-check-input" 
         type="checkbox" 
         role="switch" 
         id="flexSwitchCheckDefault" 
         checked={bookDetails.status}
         onChange={handleOnChange}
         />
      </div> */}
        <hr className="hr" />

        <div className="col-12 d-grid gap-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Add Book
          </button>
        </div>

        <div className="container text-center mt-3">{message}</div>
      </form>
    </div>
  );
}

export default BookAssign;
