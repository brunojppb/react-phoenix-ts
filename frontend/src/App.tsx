import { useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.replace('/app');
    }
  }, []);

  return (
    <BrowserRouter basename="app">
      <nav style={{display: 'flex', gap: 8, padding: 8}}>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings Page</Link><br/>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="settings" element={<SettingsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function SettingsPage() {
  return(
    <div>
      <h1>Settings Page</h1>
      <ul>
        <li>My profile</li>
        <li>Music</li>
        <li>About</li>
      </ul>
    </div>
  );
}

function HomePage() {
  return(
    <div style={{padding: 8}}>
      <h1>React TS Home</h1>
      <p>Welcome to the homepage</p>
    </div>
  );
}

export default App;
