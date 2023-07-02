import React from "react";
import signstyle from "./Signup.module.css";

import Form from "../../components/Form";

function Signup() {
  return (
    <>
      <div className={signstyle.container}>
        <div className={signstyle.left}>
          <h2 className={signstyle.heading}>Discover new things on Superapp</h2>
        </div>
        <Form />
      </div>
    </>
  );
}

export default Signup;
