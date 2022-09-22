import React from "react";
import Form from "../components/Form";

function Register() {
  return (
    <div className="h-screen w-screen relative bg-gray-300 flex items-center flex-col">
      <div className="bg-gray-600 h-full w-full justify-between flex flex-col items-center lg:max-w-[50%] pt-[2%]">
        <Form />
      </div>
    </div>
  );
}

export default Register;
