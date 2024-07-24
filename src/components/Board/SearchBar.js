import React from 'react';
import { TextField, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ searchQuery, handleSearchChange, handleKeyPress, handleSearch }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <TextField
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="검색어를 입력하세요"
      variant="outlined"
      size="small"
      onKeyDown={handleKeyPress}
      sx={{ width: '300px', minWidth: '200px' }} // 고정 길이 설정
    />
    <IconButton onClick={handleSearch} sx={{ ml: 1 }}>
      <SearchIcon />
    </IconButton>
  </Box>
);

export default SearchBar;
