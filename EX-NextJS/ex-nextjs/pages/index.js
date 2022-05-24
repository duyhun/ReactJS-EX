import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Link href='/components/covid-api/home'>CovidHome</Link>
      <br/>
      <Link href='/components/weather-api/home'> Weather API</Link>
    </div>
  )
}