import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className=" grid grid-cols-5 bg-gray-100/50 ">
        <Sidebar />
        <Feed />
        
    </div>
  );
}

export default App;
