import * as React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../components/layout'

export default function IndexPage() {
  return (
    <Layout>
      Index Page

      <div style={{ marginTop: '200vh' }}>
        <Link to='/post' state={{ modal: true }}>See Post</Link>
      </div>
    </Layout>
  )
}