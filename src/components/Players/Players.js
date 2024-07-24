import { Typography, Button, Container } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { players, managers } from '../../data/member';


function Players() {
  const [view, setView] = useState('players');

  return (
    <div>
      <Typography variant="h4">Players List</Typography>
      
      <Button variant="contained" onClick={() => setView('players')} sx={{ margin: '8px' }}>선수</Button>
      <Button variant="contained" onClick={() => setView('military')} sx={{ margin: '8px' }}>군입대 선수</Button>
      <Button variant="contained" onClick={() => setView('managers')} sx={{ margin: '8px' }}>매니저</Button>
      
      {view === 'players' && (
        <Container>
          <Typography variant="h6" mt={2}>선수</Typography>
          <ul>
            {players.filter(player => player.role === 'player').map(player => (
              <li key={player.id} style={{ marginBottom: '16px' }}>
                <Typography component={Link} to={`/players/${player.id}`} sx={{ textDecoration: 'none', display: 'block' }} color="primary">
                  {player.name}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '4px' }}>등번호: {player.dob}</Typography>
                {player.description && (
                  <Typography variant="body2" sx={{ marginTop: '8px' }}>{player.description}</Typography>
                )}
              </li>
            ))}
          </ul>
        </Container>
      )}

      {view === 'military' && (
        <div>
          <Typography variant="h6" mt={2}>군입대 선수</Typography>
          <ul>
            {players.filter(player => player.role === 'military').map(player => (
              <li key={player.id} style={{ marginBottom: '16px' }}>
                <Typography component={Link} to={`/players/${player.id}`} sx={{ textDecoration: 'none', display: 'block' }} color="primary">
                  {player.name}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '4px' }}>등번호: {player.dob}</Typography>
                {player.description && (
                  <Typography variant="body2" sx={{ marginTop: '8px' }}>{player.description}</Typography>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {view === 'managers' && (
        <div>
          <Typography variant="h6" mt={2}>매니저</Typography>
          <ul>
            {managers.map(manager => (
              <li key={manager.id} style={{ marginBottom: '16px' }}>
                <Typography component={Link} to={`/managers/${manager.id}`} sx={{ textDecoration: 'none', display: 'block' }} color="primary">
                  {manager.name}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '4px' }}>등번호: {manager.dob}</Typography>
                {manager.description && (
                  <Typography variant="body2" sx={{ marginTop: '8px' }}>{manager.description}</Typography>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Players;