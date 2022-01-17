import './greeting.css'
function Greeting() {
    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    const customStyle = {
        color: ""
    };

    if (currentTime < 12) {
        greeting = "Good Morning!";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Night!";
    }
    return (
        <h1 className="greeting">{greeting}</h1>
    )

}
export default Greeting