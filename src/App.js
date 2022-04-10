import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';

import SearchPage from './SearchPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (



    // BEM class naming convention
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">

            {/* <h1>Search Page 🥛</h1> */}

            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />

              {/* RecommendedVideos  */}

              <SearchPage />


            </div>
          </Route>

          <Route path="/">
            {/* <h1>Home Page</h1> */}

            {/* <h1>Hello Clever programmer, Let's build Youtube Clone! 🚀 </h1> */}

            {/* Header */}


            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />

              {/* RecommendedVideos  */}

              <RecommendedVideos />


            </div>
          </Route>
        </Switch>
      </Router>


    </div >
  );
}

export default App;
