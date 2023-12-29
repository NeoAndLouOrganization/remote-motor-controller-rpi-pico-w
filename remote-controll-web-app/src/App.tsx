import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/home';

import {withRouter} from './hooks/with-router';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-container">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
