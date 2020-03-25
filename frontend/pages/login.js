import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useMutation } from '@apollo/client'
import LOGIN_MUTATION from '../queries/login.mutation'
import Router from 'next/router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted({ login }) {
      localStorage.setItem('user', JSON.stringify(login))
      // client.resetStore()
      Router.push('/')
    },
  })
  if (loading) {
    return <p>Logging in...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  return (
    <Layout>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            loginMutation({ variables: { email, password } })
          }}
        >
          <h1>Login</h1>

          <input
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address)"
            type="text"
            value={email}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password)"
            type="password"
            value={password}
          />
          <input disabled={!password || !email} type="submit" value="Login" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
        }

        input[type='text'],
        input[type='password'] {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default Login
