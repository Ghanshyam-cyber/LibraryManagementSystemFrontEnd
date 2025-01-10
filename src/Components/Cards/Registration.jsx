import React from "react";

function Registration() {
  return (
    <div className="container mt-3 border border-light rounded" style={{width: "50rem",  height: "50rem"}}>
        <div className="container mt-3"><h2 className="text-center">Registration Form</h2><hr /></div>
      <form className="row g-3 mt-3 mx-2 mb-2">
      <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            First name
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Last name
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Mobile number
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Adhar number
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="example@gmail.ocm"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Password
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Confirm password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Pune India 411001"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>Maharashtra</option>
            <option>Goa</option>
            <option>Madhya Pradesh</option>
            <option>Bihar</option>
            <option>Karnataka</option>
            <option>Punjab</option>
            <option>Telangana</option>

          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Declaration....
            </label>
          </div>
        </div>
        <div className="col-12 d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
