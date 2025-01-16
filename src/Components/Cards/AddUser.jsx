import React, { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router";

export default function AddUser() {
  const { managerId, userId } = useParams();
  const navigate = useNavigate();
  // const navigate = useNavigate(); // To redirect after success

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  });
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });

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

  useEffect(() => {
    if (userId) {
      const fetchUserWithId = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/manager/${managerId}/updateUser/${userId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userDetails),
            }
          );
          if (response.ok) {
            const data = await response.json();
            setUserDetails(data);
          } else {
            setAlert({
              visible: true,
              message: "Failed to load user details",
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
      fetchUserWithId();
    }
  }, [managerId, userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.email ||
      !userDetails.mobileNumber
    ) {
      setAlert({
        visible: true,
        message: "Please fill all the fields.",
        type: "danger",
      });
      return;
    }

    try {
      const url = userId
        ? `http://localhost:8080/manager/${managerId}/updateUser/${userId}`
        : `http://localhost:8080/manager/${managerId}/user`;

      const methods = userId ? "PUT" : "POST";

      const response = await fetch(url,
        {
          method: methods,
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(userDetails),
        });    
      if (response.ok) {
        setUserDetails({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
        });
        setAlert({
          visible: true,
          message: userId ? "User details Updated Successfully." : "User added successfully.",
          type: "success",
        });
        setTimeout(() =>{
          navigate(`/users/${managerId}`)
        },1000);
      } else {
        const errorData = await response.text();
        // alert("Error: " + errorData);
        setAlert({
          visible: true,
          message: "Failed to add user.",
          type: "danger",
        });
      }
    } catch (error) {
      setAlert({
        visible: true,
        message: "Some error occured. Please try again later",
        type: "danger",
      });
      // alert("An error occurred while adding the user.");
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
        {alert.visible && (
          <div className={`alert alert-${alert.type}`} role="alert">
            {alert.message}
          </div>
        )}
      </div>
      <div className="container mt-3">
        <h2 className="text-center">{userId ? "UPDATE USER" : "ADD USER"}</h2>
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
            {userId ? "UPDATE" : "ADD"}
          </button>
        </div>
      </form>
    </div>
  );
}
  // const response = await fetch(
      //   `http://localhost:8080/manager/${managerId}/user`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(userDetails),
      //   }
      // );