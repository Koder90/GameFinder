import React from 'react'
import styles from '../styles/footer.module.css';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://web.facebook.com/jerko.zlopasa"><a rel="noopener noreferrer" target="_blank"><BsFacebook size={30} /></a></Link>
        <Link href="https://twitter.com/home"><a rel="noopener noreferrer" target="_blank"><BsTwitter size={30} /></a></Link>
        <Link href="https://www.linkedin.com/in/jerko-zlopasa/"><a rel="noopener noreferrer" target="_blank"><BsLinkedin size={30} /></a></Link>
      </div>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.author}>
        <h1>Coded by me</h1>
      </div>
    </div>
  )
}

export default Footer