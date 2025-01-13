import React, { useState } from "react";
import { useParams } from "react-router";

export default function AddUser() {
  const { managerId } = useParams();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  });
  const [message, setMessage] = useState();

  const handleOnChange = (event) => {
    const { id, value } = event.target;
    setUserDetails((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

    // const handleOnChange = (event) => {
    //     setUserDetails(event.target.value);
    // }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!userDetails.firstName || !userDetails.lastName || !userDetails.email || !userDetails.mobileNumber){
        setMessage("Please fill all fields before sumitting.")
        return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/manager/${managerId}/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        }
      );
      if (response.ok) {
        setUserDetails({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
        });
        setMessage("User added successfully...!");
      } else {
        const errorData = await response.text();
        alert("Error: " + errorData);
      }
    } catch (error) {
      setMessage("Some error occur while addind user. please try again later.");
      alert("An error occurred while adding the user.");
    }
  };

  return (
    <div
      className="container mt-3 border border-grey rounded"
      style={{ width: "40rem", height: "auto" }}
    >
      <div className="container mt-3">
        <h2 className="text-center">ADD USER</h2>
        <hr />
      </div>
      <form className="row g-3 mt-3 mx-2 mb-2">
        <div className="col-12">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={userDetails.firstName}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={userDetails.lastName}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={userDetails.email}
            onChange={handleOnChange}
            // placeholder="example@gmail.ocm"
          />
        </div>

        <div className="col-12">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            value={userDetails.mobileNumber}
            onChange={handleOnChange}
          />
        </div>

        <hr className="hr" />

        <div className="col-12 d-grid gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>

        <div className="contaier text-center">{message}</div>
      </form>
    </div>
  );
}
