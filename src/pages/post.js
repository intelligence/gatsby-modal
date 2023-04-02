import * as React from 'react'
import { PageRenderer } from 'gatsby'
import { globalHistory } from '@reach/router'

import { Layout } from '../components/layout'
import { Modal } from '../components/modal'

export default function Post({ children }) {
  const location = globalHistory.location
  return (
    <>
      { location?.state?.modal ? (
        <Layout>
          <PageRenderer location={{ pathname: '/' }} />
          <Modal>
            <PostContent />
          </Modal>
        </Layout>
      ):(
        <Layout>
          <PostContent />
        </Layout>
      )}
    </>
  )
}

const PostContent = () => (<div>I am post content</div>)