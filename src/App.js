import './App.css';
import BlogData from './Components/BlogData/BlogData';
import { Route, Routes } from 'react-router-dom';
import { AdminPanel } from './Components/Admin/AdminPanel';
import AppContextProvider from './contexts/AppContextProvider';
function App() {
 
  return (
    <div className="App">
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<BlogData />} />
          <Route path='admin' element={<AdminPanel />} />
        </Routes>
      </AppContextProvider>
    </div>
  );
}

export default App;
