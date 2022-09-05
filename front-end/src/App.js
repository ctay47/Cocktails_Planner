//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//COMPONENTS
import NavBar from './Components/NavBar';
import SingleCocktail from './Pages/SingleCocktail';
import Menus from './Components/Menus';
import NewMenu from './Components/NewMenu';
import MenuDetail from './Components/MenuDetail';


//PAGES
import Home from './Pages/Home';
import Error from './Pages/Error';
import Search from './Pages/Search';
import MenuPage from './Pages/MenuPage';
import EditMenu from './Components/EditMenu';


const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
          <Route path="/menupage" element={<MenuPage />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/menus/new" element={<NewMenu />} />
          <Route path="/menus/:id" element={<MenuDetail />} />
          <Route path="/menus/:id/edit" element={<EditMenu />} />
          

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
