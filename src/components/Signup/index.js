import React, { Component } from 'react';
import './style.scss';

export default class Signup extends Component {
  render () {
    return (
      <div className="absolute inset-0 bg-signup flex justify-center items-center flex-wrap p-6 w-full min-h-screen">
        <div className="form-container overflow-hidden bg-white flex justify-between flex-wrap p-24 rounded-lg">
          <div className="wrapper" />

          <div className="singup-form text-center">
            <div className="font-semibold text-xl mb-3">ShopEasy Register</div>
            <input type="text" placeholder="Full Name" className="input-form" />
            <input type="email" placeholder="Email" className="input-form" />
            <input type="password" placeholder="Password" className="input-form" />
            <div className="text-gray-600 py-3">Forgot you password?</div>
            <button type="button" className="signup-button">Signup</button>
            <div className="text-gray-800 mt-4">
              If you are already registered, click <a href="/signin">here</a> to signin.
            </div>
          </div>

        </div>
      </div>
    );
  }
}
