import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const headerButton = document.getElementById("header-button");

function App() {
    const [popup, setPopup] = React.useState(false);

    headerButton.addEventListener("click", () => {
        setPopup(!popup);
      }
    );

    return (
        <form id="popup">
            <input type="text" id="registration-name" placeholder="Name" />
            <input type="email" id="registration-email" placeholder="Email" />
            <input type="number" id="registration-phone" placeholder="Phone Number" />
            <button type="submit">Submit</button>
        </form>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));