import React from 'react';
import Button from 'components/Button';

const Home = () => (
  <div style={{ fontSize: '30px', display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    Home page!!!
    <br />
    <Button onClick={() => alert('clicked')}>Click me</Button>
  </div>
);

export default Home;
