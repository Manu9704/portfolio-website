import './App.css';
import { useEffect } from 'react';
import Dashboard from './components/dashboard';
import Sidebar from './components/sidebar';
function App() {
  useEffect(() => {
    document.title = "Manohar Bandaru";
  }, []);
  return (
    <div className="App">
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
