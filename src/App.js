import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cards from './Components/Home/Cards/Cards';

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/sample" element={<Sample/>}/> */}
          <Route path='/hindi' element={<Cards/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
