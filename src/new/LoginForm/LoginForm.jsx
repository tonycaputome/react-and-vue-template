import React from "react";
import { router } from "../../routes";

import "./LoginForm.css";

const LoginForm = () => {
  const redirect = (link) => {
    router.push(link);
  };

  return (
    <div className="LoginForm">
      <div>
        <div>
          <span>React form</span>
          <div>name:</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>pass:</div>
          <div>
            <input type="password" />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          redirect("/");
        }}
      >
        go back
      </button>
    </div>
  );
};

export default LoginForm;
