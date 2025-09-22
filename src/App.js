import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/sample" element={<Sample/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
