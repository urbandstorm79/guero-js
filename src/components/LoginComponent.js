import React from 'react';
import { Link } from "react-router-dom";

function LoginComponent() {
  let email = null;
  let password = null;
  return (
    <div className="card-form-login">
        <h2>Login</h2>
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="Please enter your email" type="email"/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" placeholder="Please enter your password" type="password"/>
            </div>
            <div>
              <button
                className="primary-button block-button"
                onClick={validateLogin(email, password)}>
                  Login
              </button>
            </div>
            <p>If you don't have an account, click <Link to="signup">here</Link></p>
          </form>
      </div>
  );
}

function validateLogin(email, password) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passRegex = /^[A-z0-9]{8}$/;
  if (!emailRegex.test(email)) {
    console.log('Invalid email')
  }

  if (!passRegex.test(password)) {
    console.log('Invalid password');
  }
}

export default LoginComponent;