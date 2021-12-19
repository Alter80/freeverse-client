import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import AllGames from './components/AllGames/AllGames';
import About from './components/AboutUs/About';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import MyPlaylist from './components/MyPlaylist/MyPlaylist';
import { useSelector } from 'react-redux';
import ByCategory from './components/ByCategory/ByCategory';
import AuthProvider from './context/AuthProvider';
import Dashboard from './components/DashBoard/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const selectedGames = useSelector((state) => state.gameCounter.playList);
  console.log(selectedGames);

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header data={selectedGames}></Header>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/allgames'>
              <AllGames></AllGames>
            </Route>

            <Route exact path='/bycategory'>
              <ByCategory></ByCategory>
            </Route>

            <Route exact path='/about'>
              <About></About>
            </Route>

            <Route exact path='/myplaylist'>
              <MyPlaylist></MyPlaylist>
            </Route>

            <PrivateRoute exact path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>

            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
