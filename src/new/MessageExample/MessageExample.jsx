import React from "react";
import "./MessageExample.css";
import { router } from "../../routes";

const MessageExample = ({ message, reset }) => {
  const redirect = (link) => {
    router.push({ path: link });
  };

  return (
    <div>
      <div className="message" onClick={reset}>
        {message}
      </div>
      <a
        onClick={() => {
          redirect("/login");
        }}
      >
        please login
      </a>
    </div>
  );
};

export default MessageExample;
