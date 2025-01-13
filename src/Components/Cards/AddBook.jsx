import React, { useState } from "react";
import { useParams } from "react-router";

export default function AddBook() {
  const { managerId } = useParams();

  const [bookDetails, setBookDetails] = useState({
    bookName: "",
    authorName: "",
    status: false,
  });

  const [message, setMessage] = useState();

  const handleOnChange = (event) => {
    const { id, value, type, checked } = event.target;
    setBookDetails((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Submitting Book Details:", bookDetails);

    // Validation 
    if(!bookDetails.authorName || !bookDetails.authorName || !bookDetails.status){
      setMessage("Please fill in all fields before submitting.")
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/manager/${managerId}/book`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookDetails),
        }
      );
      if(response.ok){
        setMessage("Book Added Successfully...!")
        setBookDetails({bookName : "", authorName : "", status : false});
      }else {
        setMessage("Failed to add book. Please try again.");
      }
    } catch (error) {
      console.error("Error adding Book");
      setMessage("An error occured. Please try again.")
    }
  };

  return (
    <div
      className="container mt-3 border border-grey rounded"
      style={{ width: "40rem", height: "auto" }}
    >
      <div className="container mt-3">
        <h3 className="text-center">ADD BOOK</h3>
        
        <hr className="hr" />
      </div>
      <form className="row g-3 mt-3 mx-2 mb-2">
        <div className="col-12">
          <label htmlFor="inputName" className=" form-label">
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
          <label htmlFor="inputName" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="authorName"
            placeholder="Author name here!"
            value={bookDetails.authorName}
            onChange={handleOnChange}
          />
        </div>
         <div className="form-check form-switch">
          <input
           className="form-check-input" 
           type="checkbox" 
           role="switch" 
           id="flexSwitchCheckDefault" 
           checked={bookDetails.status}
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
            Add Book
          </button>
        </div>

        <div className="container text-center mt-3">{message}</div>
      </form>
    </div>
  );
}
