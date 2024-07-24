import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, Button, ButtonGroup, Pagination, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { posts, typeLabels, typeColors } from '../../data/posts';
import useBoard from '../../hooks/useBoard';
import SearchBar from './SearchBar';
import Tab from './Tab';

const labelStyles = {
  width: '50px',
  padding: '4px',
  textAlign: 'center',
};

const POSTS_PER_PAGE = 10;

function MainBoard() {
  const {
    filter,
    page,
    searchQuery,
    searchResults,
    isMediumScreen,
    handleFilterChange,
    handlePageChange,
    handleSearchChange,
    handleKeyPress,
    handleSearch,
  } = useBoard();

  const announcementPosts = posts
    .filter((post) => post.type === 'announcement')
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);
  const otherPosts = posts.filter((post) => post.type !== 'announcement');
  const filteredPosts =
    filter === 'all'
      ? otherPosts
      : filter === 'search'
      ? searchResults
      : posts.filter((post) => post.type === filter);
  const sortedPosts = filteredPosts.sort((a, b) => b.id - a.id);
  const paginatedPosts = sortedPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (

    <Box sx={{ my: 4, px: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        커뮤니티
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center', height: '40px' }}>
        <Tab filter={filter} isMediumScreen={isMediumScreen} handleFilterChange={handleFilterChange} />
        <SearchBar
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          handleKeyPress={handleKeyPress}
          handleSearch={handleSearch}
        />
      </Box>
      <List>
        {filter === 'all' &&
          announcementPosts.map((post) => (
            <ListItem key={post.id} alignItems="flex-start" divider button component={Link} to={`/community/${post.id}`} sx={{ bgcolor: '#fff6d4', '&:hover': { bgcolor: '#fff6d4' } }}>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ bgcolor: typeColors[post.type], color: '#fff', px: 1, py: 0.5, borderRadius: 1, ...labelStyles }}>{typeLabels[post.type]}</Box>
                    <Box sx={{ ml: 1 }}>{post.title}</Box>
                  </Box>
                }
                secondary={
                  <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{post.content}</Typography>
                }
              />
            </ListItem>
          ))}
        {paginatedPosts.map((post) => (
          <ListItem key={post.id} alignItems="flex-start" divider button component={Link} to={`/community/${post.id}`}>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ bgcolor: typeColors[post.type], color: '#fff', px: 1, py: 0.5, borderRadius: 1, ...labelStyles }}>{typeLabels[post.type]}</Box>
                  <Box sx={{ ml: 1 }}>{post.title}</Box>
                </Box>
              }
              secondary={
                <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{post.content}</Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      <Pagination count={Math.ceil(sortedPosts.length / POSTS_PER_PAGE)} page={page} onChange={handlePageChange} sx={{ mt: 2, display: 'flex', justifyContent: 'center' }} />
    </Box>

  );
}

export default MainBoard;
