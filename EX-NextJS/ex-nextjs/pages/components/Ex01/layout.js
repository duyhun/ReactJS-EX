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
          <Link href="/components/Ex01/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/components/Ex01/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/components/Ex01/login">
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