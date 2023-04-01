import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import styles from "../styles/login.module.css"
import { useSession, signIn, signOut } from 'next-auth/react'

const login: NextPage = () => {


  const { data: session } = useSession()
  console.log(session)

  if (session) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>Welcome, {session.user?.name}!</h3>
          <button className={styles.btn}
            onClick={
              () => {
                signOut()
              }
            }>Sign out</button>
          <Link href='/'>... or return to home page</Link>
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