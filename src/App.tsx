import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import './App.css';
import Router from './routes';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <Typography>Sequor - GHApi</Typography>
          <Router/>
        </Box>
      </Container>      
    </div>
  );
}

export default App;
