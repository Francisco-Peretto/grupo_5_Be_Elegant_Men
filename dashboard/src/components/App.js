import React from 'react';
import {Route} from "react-router-dom";

import SideBar from './SideBar';
 
function App() {
  return (
    <React.Fragment>
        <Route path="/">
          <div id="wrapper">
            <SideBar />
          </div>
        </Route>
    </React.Fragment>
  );
}

export default App;
