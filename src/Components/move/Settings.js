import ReactSlider from 'react-slider';
import PomodoroSettingsContext from './PomodoroSettingsContext'
import { useContext } from "react";

function Settings() {
    const settingsInfo = useContext(PomodoroSettingsContext)
    return (
        <div>
            <label>Work Minutes: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMinutes}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                min={0.1}
                max={180}
            />
            <label>Break Minutes: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                min={1}
                max={30}
            />
        </div>
    )
}
export default Settings