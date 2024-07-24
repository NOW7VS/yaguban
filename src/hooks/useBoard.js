import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { posts } from '../data/posts';

const normalizeString = (str) => {
  return str.toLowerCase().replace(/\s+/g, '');
};

const calculateWeight = (post, keywords) => {
  let weight = 0;
  keywords.forEach((keyword) => {
    if (normalizeString(post.title).includes(keyword)) {
      weight += 2;
    }
    if (normalizeString(post.content).includes(keyword)) {
      weight += 1;
    }
    if (post.id === parseInt(keyword, 10)) {
      weight += 1000;
    }
  });
  return weight;
};

const useBoard = () => {
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilter('all');
      setSearchResults([]);
      setPage(1);
      return;
    }

    const keywords = searchQuery.split(' ').map(normalizeString);
    let results = posts
      .map((post) => ({ ...post, weight: calculateWeight(post, keywords) }))
      .filter((post) => post.weight > 0)
      .sort((a, b) => b.weight - a.weight || b.id - a.id);

    setSearchResults(results);
    setFilter('search');
    setPage(1);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return {
    filter,
    setFilter,
    page,
    setPage,
    searchQuery,
    setSearchQuery,
    searchResults,
    setSearchResults,
    isMediumScreen,
    handleFilterChange,
    handlePageChange,
    handleSearchChange,
    handleKeyPress,
    handleSearch,
  };
};

export default useBoard;
