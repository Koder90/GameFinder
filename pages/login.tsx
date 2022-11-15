import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

import { useSession, signIn, signOut } from 'next-auth/react'

const login: NextPage = () => {
  const { data: session } = useSession()
  console.log(session)

  if (session) {
    return (
      <div>
        <div>
          <p>Welcome, {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
          <Link href='/'>return to home page</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <p>You are not signed in</p>
          <button onClick={() => {
            signIn()
          }
          }>Sign in</button>
        </div>
      </div>
    )
  }
}

export default login