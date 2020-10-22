import Head from 'next/head'
import styles from '../styles/Home.module.css'
import logo from '../images/logo.png'
import send from '../images/send.png'
import balls from '../images/balls.png'
import humaaans from '../images/humaaans.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nav}>
        <header>
          <img src={ logo } alt="Logo" className={ styles.logo } />
          <h3 className={ styles.textLogo }>Develop Web.</h3>
        </header>
        <nav>
          <ul className={ styles.navigation }>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <main className={styles.main}>
        <div className={ styles.textMain }>
          <img src={ balls } alt="Abstract Image" className={ styles.absImagem } />
          <div className={ styles.intro }>
            <h1 className={ `${ styles.colorRed } ${ styles.mainTitle }` }>Building amazing projects for Web</h1>
            <p className={ `${ styles.colorGrey } ${ styles.textInfo }` }>
              It’s only a prototype of a website, we use to this project only HTML and CSS.
              We can do amazing things with this skills, like website, app to mobile, etc.
            </p>
            <div>
              <button className={ `${ styles.btn } ${ styles.btnPrimary }` }>Get Started</button>
              <button style={{ marginLeft: 25 }} className={ `${ styles.btn } ${ styles.btnSecondary }` }>About</button>
            </div>
          </div>
        </div>
        <div className={ styles.imageMain }>
          <img src={ humaaans } alt="Human image for site" className={ styles.imageSection } />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={ styles.textFooter }>
            <span className={ styles.colorRed }>Develop Web.</span> <span className={ styles.colorGrey }>Made by a Developer</span>
        </div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
            <img src={ send } alt="Send-me an email" className={ styles.sendFooter } />
        </a>
      </footer>
    </div>
  )
}
