import React from "react";
import UserTable from "./UserTable";

const UsersPage = async () => {
  return (
    <div className="p-5 text-black">
      <h1>Hello World</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable />
    </div>
  );
};

export default UsersPage;