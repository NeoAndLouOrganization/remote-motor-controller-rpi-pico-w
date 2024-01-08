import React, {RefObject, useRef, useState} from 'react';
import {enableMotor} from '../../http/enable-motor';
import {disableMotor} from '../../http/disable-motor';
import {moveBackward} from '../../http/move-backward';
import {moveForward} from '../../http/move-forward';
import {toggleLed} from '../../http/toggle-led';

enum Arrows {
  ArrowLeft = 'left',
  ArrowRight = 'right',
  ArrowUp = 'up',
  ArrowDown = 'down',
}

const Home = () => {
  const arrowLeftRef: RefObject<HTMLElement> = useRef(null);
  const arrowRightRef: RefObject<HTMLElement> = useRef(null);
  const arrowUpRef: RefObject<HTMLElement> = useRef(null);
  const arrowDownRef: RefObject<HTMLElement> = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const wrapTemporaryPulse = (ref: RefObject<HTMLElement>) => {
    ref.current?.classList.add('pulse');
    setTimeout(() => ref.current?.classList.remove('pulse'), 600);
  };

  const addPulseAnimation = (arrow: string) => {
    switch (arrow) {
      case Arrows.ArrowLeft:
        wrapTemporaryPulse(arrowLeftRef);
        break;
      case Arrows.ArrowRight:
        wrapTemporaryPulse(arrowRightRef);
        break;
      case Arrows.ArrowDown:
        wrapTemporaryPulse(arrowDownRef);
        break;
      case Arrows.ArrowUp:
        wrapTemporaryPulse(arrowUpRef);
        break;
      default:
        break;
    }
  };
  const handleArrowUp = async (arrow: string) => {
    addPulseAnimation(arrow);

    await moveForward();
    console.log('Arrow Up');
  };

  // const handleArrowLeft = (arrow: string) => {
  //   addPulseAnimation(arrow);

  //   console.log('Arrow Left');
  // };

  // const handleArrowRight = (arrow: string) => {
  //   addPulseAnimation(arrow);

  //   console.log('Arrow Right');
  // };

  const handleArrowDown = async (arrow: string) => {
    addPulseAnimation(arrow);

    await moveBackward();
    console.log('Arrow Bottom');
  };

  const startEngine = async () => {
    await enableMotor();
    setIsActive(true);
  };

  const stopEngine = async () => {
    await disableMotor();
    setIsActive(false);
  };

  return (
    <React.Fragment>
      <div className="title__container">
        <h1 className="heading-h1">Remote Control</h1>
      </div>
      <div className="toggle-led--wrapper">
        <button className="toggle-led" onClick={async () => await toggleLed()}>
          Toggle Led
        </button>
      </div>
      <div className="outer-flex-container">
        <div className="engine-activation-container">
          {!isActive && (
            <button className="start-engine" onClick={startEngine}>
              Start
            </button>
          )}
          {isActive && (
            <button className="stop-engine" onClick={stopEngine}>
              Stop
            </button>
          )}
        </div>

        <div className="controls-container">
          <div className="flex-wrapper--arrow-up">
            <div className="pulse-wrapper" ref={arrowUpRef}>
              <button
                onClick={() => handleArrowUp('up')}
                className="arrow up"
              ></button>
            </div>
          </div>
          {/* <div className="flex-wrapper--side-arrows">
            <div className="pulse-wrapper" ref={arrowLeftRef}>
              <button
                className="arrow left"
                onClick={() => handleArrowLeft('left')}
              ></button>
            </div>

            <div className="pulse-wrapper" ref={arrowRightRef}>
              <button
                className="arrow right"
                onClick={() => handleArrowRight('right')}
              ></button>
            </div>
          </div> */}
          <div className="flex-wrapper--arrow-down">
            <div className="pulse-wrapper" ref={arrowDownRef}>
              <button
                onClick={() => handleArrowDown('down')}
                className="arrow down"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
