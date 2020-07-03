import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import CreateStatForm from './components/CreateStatForm';
import { Container } from 'reactstrap';

function App() {
  const [stats, setStats] = useState([]);

  return (
    <div className='App'>
      <Navbar />
      <Container>
        <CreateStatForm stats={stats} setStats={setStats} />
        <Stats stats={stats} setStats={setStats} />
      </Container>
    </div>
  );
}

export default App;
