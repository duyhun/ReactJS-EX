import styles from '/styles/Layouts/Login.module.css';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter()
    return (
      <div className={styles.wrapper}>
        <div className={styles.formContent}>
          <h2>Login</h2>
          <form>
            <input className={styles.input} type="text" id="login" name="login" placeholder="login" />
            <input className={styles.input} type="text" id="password" name="login" placeholder="password" />
            <button type="button" className={styles.button} onClick={() => router.push('/')}>Log In</button>
          </form>
        </div>
      </div>
    )
}