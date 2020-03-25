import Router from 'next/router'
import ME_QUERY from '../queries/me.query'
import { useQuery } from '@apollo/client'
import Layout from '../components/Layout'

const Logout = () => {
  const { data, loading, error, client } = useQuery(ME_QUERY)

  if (data) {
    localStorage.removeItem('user')
    client.resetStore()
    Router.push('/')
  }

  return <Layout></Layout>
}

export default Logout
