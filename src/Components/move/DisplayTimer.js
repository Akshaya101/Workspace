import Settings from "./Settings";
import { useState } from "react";
import PomodoroSettingsContext from "./PomodoroSettingsContext";
import Pomodoro from "./Pomodoro";
function DisplayTimer() {
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);
    return (
        <div>
            <PomodoroSettingsContext.Provider value={{
                workMinutes,
                breakMinutes,
                setWorkMinutes,
                setBreakMinutes
            }}>
                {/* pomodoro is the actual time calculator */}
                <Pomodoro />
                {/* settings holds the values of user input */}
                <Settings />
            </PomodoroSettingsContext.Provider>
        </div>
    )
}
export default DisplayTimer