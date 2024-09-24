import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <h1>new page</h1>
            <button className='btn btn-primary'>LMAO</button>
            <Link href="/users">Users</Link>
        </div>
    )
}

export default page