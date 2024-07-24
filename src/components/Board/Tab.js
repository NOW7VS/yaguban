import React from 'react';
import { Select, MenuItem, ButtonGroup, Button, Box } from '@mui/material';
import { typeLabels } from '../../data/posts';

const Tab = ({ filter, isMediumScreen, handleFilterChange }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '40px' }}>
      {isMediumScreen ? (
        <Select
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ minHeight: '40px' }}
        >
          <MenuItem value="all">전체</MenuItem>
          {Object.entries(typeLabels).map(([type, label]) => (
            <MenuItem key={type} value={type}>
              {label}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => handleFilterChange('all')} sx={{ minWidth: '80px', height: '40px', whiteSpace: 'nowrap' }}>
            전체
          </Button>
          {Object.entries(typeLabels).map(([type, label]) => (
            <Button key={type} onClick={() => handleFilterChange(type)} sx={{ minWidth: '80px', height: '40px', whiteSpace: 'nowrap' }}>
              {label}
            </Button>
          ))}
        </ButtonGroup>
      )}
    </Box>
  );
};

export default Tab;
