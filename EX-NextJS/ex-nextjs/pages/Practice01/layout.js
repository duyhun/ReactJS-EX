import Link from 'next/link';

export default function Layout({children}) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/Practice01/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/Practice01/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/Practice01/login">
            <a>Logout</a>
          </Link>
        </li>
      </ul>
      <div>
        {children}
      </div>
  </div>
  )
}