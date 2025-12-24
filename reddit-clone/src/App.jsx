import { Routes, Route, Link } from 'react-router-dom';

function LocalHome() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Home Page</h1>
      <Link to="/welcome"><button>Go to Welcome</button></Link>
    </div>
  );
}

function LocalWelcome() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome Page</h1>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LocalHome />} />
      <Route path="/welcome" element={<LocalWelcome />} />
    </Routes>
  );
}