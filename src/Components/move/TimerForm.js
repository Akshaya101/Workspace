import { useState } from 'react'
import { useTimer } from 'react-timer-hook';

function TimerHook({ expiryTimestamp }) {
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
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>react-timer-hook </h1>
            <p>Timer Demo</p>
            <div style={{ fontSize: '100px' }}>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 300);
                restart(time)
            }}>Restart</button>
        </div>
    );
}

function TimerForm() {
    const time = new Date()
    const [currentTime, enterCurrentTime] = useState()
    const [modifyTime, setModifyTime] = useState(60)
    const onChangeHandler = (event) => {
        enterCurrentTime(event.target.value)
    }
    const addTime = () => {
        time.setSeconds(time.getSeconds() + currentTime)
        setModifyTime(() => currentTime)
        enterCurrentTime('')
    }
    console.log(currentTime)

    return (
        <div>
            <h1>Timer</h1>
            <input value={currentTime} onChange={onChangeHandler} />
            <button onClick={addTime}>Submit</button>
            <TimerHook expiryTimestamp={modifyTime} />
        </div>
    )
}
export default TimerForm