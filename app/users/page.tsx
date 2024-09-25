import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";
import { Suspense } from "react";

interface Props{
  searchParams: { sortOrder: string; };

}

const UsersPage = async ({ searchParams: {sortOrder}}: Props) => {
  return (
    <div className="p-5">
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Link href="/users/new" className='btn'>New User</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
      
    </div>
  );
};

export default UsersPage;