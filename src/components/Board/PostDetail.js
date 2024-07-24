import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { posts } from '../../data/posts';

function PostDetail() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === parseInt(postId, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {post ? post.title : 'Post not found'}<span style={{ fontSize: '1rem', color: 'grey' }}> [{post ? post.id : ''}]</span>
        </Typography>
        <Typography variant="body1">
          {post ? post.content : 'The post you are looking for does not exist.'}
        </Typography>
      </Box>
    </Container>
  );
}

export default PostDetail;
