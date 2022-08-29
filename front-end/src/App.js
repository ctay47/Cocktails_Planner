//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//COMPONENTS
import NavBar from './Components/NavBar';
import Cocktails from './Components/Cocktails'
import CocktailDetails from './Components/CocktailDetails';
import EditCocktail from './Components/EditCocktail';
import NewCocktail from './Components/NewCocktail';


//PAGES
import Home from './Pages/Home';
import Error from './Pages/Error';
import Search from './Pages/Search';


const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/cocktails/new" element={<NewCocktail />} />
          <Route path="/cocktails/:id" element={<CocktailDetails />} />
          <Route path="/cocktails/:id/edit" element={<EditCocktail />} />
          
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
