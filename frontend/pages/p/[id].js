import React, { useContext } from 'react'
import Router, { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { useQuery, useMutation } from '@apollo/client'
import POST_QUERY from '../../queries/post.query'
import PUBLISH_MUTATION from '../../queries/publish.mutation'
import DELETE_MUTATION from '../../queries/delete.mutation'
import UserContext from '../../components/UserContext'

function Post() {
  const { user } = useContext(UserContext)
  const postId = useRouter().query.id
  const { loading, error, data, client } = useQuery(POST_QUERY, {
    variables: { id: postId },
  })

  const [publish] = useMutation(PUBLISH_MUTATION)
  const [deletePost] = useMutation(DELETE_MUTATION)

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    console.log(error)
    return <div>Error: {error.message}</div>
  }

  let title = data.post.title
  if (!data.post.published) {
    title = `${title} (Draft)`
  }

  const authorName = data.post.author ? data.post.author.name : 'Unknown author'
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {authorName}</p>
        <p>{data.post.content}</p>
        {data.post &&
          user.user.id === data.post.author.id &&
          !data.post.published && (
            <button
              onClick={async (e) => {
                await publish({
                  variables: {
                    id: postId,
                  },
                })
                await client.clearStore()
                await Router.push('/')
              }}
            >
              Publish
            </button>
          )}
        {user.user.id === data.post.author.id && (
          <button
            onClick={async (e) => {
              await deletePost({
                variables: {
                  id: postId,
                },
              })
              await client.clearStore()
              top.window.location = '/' // very weird bug when using router.push('/')
            }}
          >
            Delete
          </button>
        )}
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }
        .actions {
          margin-top: 2rem;
        }
        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }
        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default Post
