import React from 'react';
import Home from './pages/home/home';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-container">
          <div className="main-content">
            <Home />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
