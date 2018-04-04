import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from "./actions/session_actions";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // Test begin
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // Test end

  ReactDOM.render(<h1>Food is better fried</h1>, root);
});
