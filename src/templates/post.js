import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        slug
      }
      body
    }
  }
`;

const PostTemplete = ({ data: { mdx: post } }) => (
  <Layout>
    <h1
      css={css`
        font-size: 0.75rem;
      `}
    >
      {post.frontmatter.title}
    </h1>
    <p>{post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

export default PostTemplete;
