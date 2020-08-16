import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

const PostTemplete = () => (
  <Layout>
    <h1
      css={css`
        font-size: 0.75rem;
      `}
    >
      Post title
    </h1>
    <p>Post by (author)</p>
    <p>Post by does here</p>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

export default PostTemplete;
