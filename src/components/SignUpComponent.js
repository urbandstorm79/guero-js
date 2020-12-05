import React from 'react';

function SignUp() {
  return (
    <div className="signup-form">
      <form>
        <h2 className="col-12">SignUp</h2>
        <div className="col-md-6 pb-2">
          <label for="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Type first name"
            className="form-control" />
        </div>
        <div className="col-md-6 pb-2">
          <label for="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Type Last name"
            className="form-control" />
        </div>
        <div className="col-12 pb-2">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Type email"
            className="form-control" />
        </div>
        <div className="col-md-7 pb-2">
          <label for="username">Username</label>
          <input
            type="text"
            id="email"
            placeholder="Type username"
            className="form-control" />
        </div>
        <div className="col-md-5 pb-2">
          <label for="pass">Password</label>
          <input
            type="password"
            id="email"
            placeholder="Type email"
            className="form-control" />
        </div>

        <div className="col-md-6 pb-2">
          <label for="phone">Phone number</label>
          <input
            type="phone"
            id="phone"
            placeholder="Type phone number"
            className="form-control" />
        </div>

        <div className="col-md-6 pb-2">
          <label for="dob">Date of birth</label>
          <input
            type="date"
            id="dob"
            placeholder="Date of birth"
            className="form-control" />
        </div>
        <div className="col-12">
        <button
          class="primary-button block-button mt-3">
          SignUp
        </button>
        </div>
        <div className="col-12 mt-3">
          <p>If you don't have an account, click <a href="#">here</a></p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
