import React, { Component } from 'react';
import './style.scss';

export default class Signup extends Component {
  render () {
    return (
      <div className="container">
        <div className="form-container">
          <h1>Signup</h1>
          <div className="text-hint">use login credentials</div>
          <input type="text" placeholder="Full Name" className="input-form" />
          <input type="email" placeholder="Email" className="input-form" />
          <input type="password" placeholder="Password" className="input-form" />
          <div className="text-hint">Forgot you password?</div>
          <button type="button" className="signup-button">Signup</button>

          <div className="text-hint font-md">
              If you are already registered, click <a href="/signin">here</a> to signin.
          </div>

        </div>
      </div>
    );
  }
}
