import TimerHook from "./TimerHook";
import { useState } from 'react'
import './Timer.css'
import { Row, Col } from 'react-bootstrap'
function Timer() {
    const times = new Date();
    const [inputTime, setInputTime] = useState({
        time: '',
        initial: false
    })
    const changeHandler = (e) => setInputTime({
        ...inputTime,
        time: e.target.value,
        initial: false
    })
    const submitHandler = (e) => {
        e.preventDefault()
        setInputTime({
            ...inputTime,
            initial: true
        })
    }
    return (
        <div>
            <div className="content">
                <form onSubmit={submitHandler}>
                    <Row>
                        <Col lg={7}><input value={inputTime.time} type='text' onChange={changeHandler} placeholder="Enter Time In Minutes..." /></Col>
                        <Col lg={5}><button className="submit" type='submit'>SET TIMER</button></Col>
                    </Row>
                </form>
                {inputTime.initial && <TimerHook expiryTimestamp={times.setSeconds(times.getSeconds() + Number(inputTime.time) * 60)} enteredTime={Number(inputTime.time) * 60} />}
            </div>
        </div>
    )
}
export default Timer