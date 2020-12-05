import React from 'react';

function LoginComponent() {
  let email = null;
  let password = null;
  return (
    <div class="card-form-login">
        <h2>Login</h2>
          <form>
            <div>
              <label for="email">Email</label>
              <input id="email" placeholder="Please enter your email" type="email" value={email}/>
            </div>
            <div>
              <label for="password">Password</label>
              <input id="password" placeholder="Please enter your password" type="password" value={password}/>
            </div>
            <div>
              <button
                class="primary-button block-button"
                onClick={validateLogin(email, password)}>
                  Login
              </button>
            </div>
            <p>If you don't have an account, click <a href="#">here</a></p>
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