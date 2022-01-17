import { useContext, useState, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs'
import './Pomodoro.css'
import PomodoroSettingsContext from './PomodoroSettingsContext'

function PlayButton(props) {
    return (
        <center>
            <BsFillPlayCircleFill className='play-pause-icon' {...props} />
        </center>
    )
}
function PauseButton(props) {
    return (
        <center>
            <BsFillPauseCircleFill className='play-pause-icon' {...props} />
        </center>
    )
}

const red = '#f54e4e'
const green = '#4aec8c'
function Pomodoro() {
    const settingsInfo = useContext(PomodoroSettingsContext)
    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work'); // work/break/null
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    useEffect(() => {

        function switchMode() {
            const nextMode = modeRef.current === 'work' ? 'break' : 'work';
            const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

            setMode(nextMode);
            modeRef.current = nextMode;

            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;
        }

        secondsLeftRef.current = settingsInfo.workMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [settingsInfo]);
    const totalSeconds = mode === 'work'
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;
    return (
        <div>
            <Row>
                <Col></Col>
                <Col>
                    <CircularProgressbar className='progress-bar' value={percentage} text={minutes + ':' + seconds} styles={buildStyles({
                        textColor: '#000',
                        pathColor: mode === 'work' ? red : green,
                        tailColor: 'rgba(255,255,255,.2)'
                    })} />
                    <div>
                        <Row>
                            {isPaused
                                ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
                                : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
                        </Row>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}
export default Pomodoro

/*
React Slider
Track = horizontal bar
Thumb = round button thingy
Mark = the on that is appeard onsetting it
*/
/*
useContext used Twice because useContext can only be used inside a functional component
and not at the top level
*/