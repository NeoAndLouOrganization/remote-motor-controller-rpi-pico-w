import React, {useState} from 'react';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const handleArrowUp = () => {
    console.log('Arrow Up');
  };

  const handleArrowLeft = () => {
    console.log('Arrow Left');
  };

  const handleArrowRight = () => {
    console.log('Arrow Right');
  };

  const handleArrowDown = () => {
    console.log('Arrow Bottom');
  };

  return (
    <React.Fragment>
      <div className="title__container">
        <h1 className="heading-h1">Remote Control</h1>
      </div>

      <div className="outer-flex-container">
        <div className="engine-activation-container">
          {!isActive && (
            <button className="start-engine" onClick={() => setIsActive(true)}>
              Start
            </button>
          )}
          {isActive && (
            <button className="stop-engine" onClick={() => setIsActive(false)}>
              Stop
            </button>
          )}
        </div>

        <div className="controls-container">
          <div className="flex-wrapper--arrow-up" onClick={handleArrowUp}>
            <button className="arrow up"></button>
          </div>
          <div className="flex-wrapper--side-arrows">
            <button className="arrow left" onClick={handleArrowLeft}></button>
            <button className="arrow right" onClick={handleArrowRight}></button>
          </div>
          <div className="flex-wrapper--arrow-down" onClick={handleArrowDown}>
            <button className="arrow down"></button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
