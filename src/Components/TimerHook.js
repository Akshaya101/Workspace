import React from 'react';
import { useTimer } from 'react-timer-hook';
import { Row, Col } from 'react-bootstrap'
import beep from './audio/beep.wav'
import './Timer.css'
function TimerHook({ expiryTimestamp, enteredTime }) {
    console.log(expiryTimestamp)
    console.log(enteredTime)
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
        autoStart: false,
        onExpire: () => {
            var audio = new Audio(beep);
            audio.play();
        }
    });


    return (
        <div>
            <Row>
                <Col>
                    <div className='time'>
                        <p><span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span></p>
                    </div>
                </Col>
            </Row>
            {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
            <Row>
                <Col>
                    <button className='timer-button' onClick={start}>START</button>
                </Col>
                <Col>
                    <button className='timer-button' onClick={pause}>PAUSE</button>
                </Col>
            </Row>
            <Row className='bottom-part'>
                <Col>
                    <button className='timer-button' onClick={resume}>RESUME</button>
                </Col>
                <Col>
                    <button className='timer-button' onClick={() => {
                        // Restarts to 5 minutes timer
                        const time = new Date();
                        time.setSeconds(time.getSeconds() + enteredTime);
                        restart(time)
                    }}>RESTART</button>
                </Col>
            </Row>
        </div>
    );
}

export default TimerHook