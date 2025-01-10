import React from "react";
import { Link } from "react-router";

function Login() {
  return (
    <>
      <div className="container mt-3 mb-3">
        <h1 className="text-center text-decoration-underline">Login Here !</h1>
      </div>
      <div
        className="container mt-3 border border-light rounded"
        style={{ width: "20rem" }}
      >
        <form className="container mt-3 mb-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <hr />
          {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div className="form-text">New user? register here . . . </div>
            <Link class="btn btn-primary" to="/register" role="button">Sign In</Link>
          </div>
        </form>
      </div>

      <div className="container mt-5 mb-5">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dolorem sit blanditiis cum itaque obcaecati id praesentium ullam illum
          voluptatem. Consequuntur perspiciatis accusamus provident quidem,
          atque adipisci sapiente, incidunt cumque maxime corporis architecto
          voluptatem reiciendis quasi tempora nesciunt inventore tempore? Alias
          sed recusandae rem exercitationem quia modi et excepturi. Aperiam?
        </p>
      </div>
    </>
  );
}

export default Login;
