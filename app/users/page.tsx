import React from "react";
import UserTable from "./UserTable";

interface Props{
  searchParams: { sortOrder: string; };

}

const UsersPage = async ({ searchParams: {sortOrder}}: Props) => {
  return (
    <div className="p-5 text-black">
      <h1>Hello World</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;