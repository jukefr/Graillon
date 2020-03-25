import Link from 'next/link'
import React, { useContext } from 'react'
import UserContext from './UserContext'

function isActive(pathname) {
  return (
    typeof document !== 'undefined' && document.location.pathname === pathname
  )
}

const Header = () => {
  // Check auth status
  const { user } = useContext(UserContext)

  return (
    <nav>
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive('/')}>
            Blog
          </a>
        </Link>
        <Link href="/drafts">
          <a data-active={isActive('/drafts')}>Drafts</a>
        </Link>
      </div>
      <div className="right">
        {user && user.user && user.user.name ? (
          <section>
            <span>Welcome back {user.user.name} </span>
            <Link href="/create">
              <a data-active={isActive('/create')}>+ Create draft</a>
            </Link>
            <Link href="/logout">
              <a data-active={isActive('/logout')}>Logout</a>
            </Link>
          </section>
        ) : (
          <section>
            <Link href="/signup">
              <a data-active={isActive('/signup')}>Signup</a>
            </Link>
            <Link href="/login">
              <a data-active={isActive('/login')}>Login</a>
            </Link>
          </section>
        )}
      </div>
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }

        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active='true'] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }

        .right {
          margin-left: auto;
        }

        .right a {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 3px;
        }
      `}</style>
    </nav>
  )
}

export default Header
