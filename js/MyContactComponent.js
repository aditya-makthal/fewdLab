// import {handleSubmit} from "./twilio"
// import React from "react";
// import ReactDOM from "react-dom";
import React, { useState } from 'react'
const MyContactComponent = () => {
    // const [phone, setPhone] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(phone);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-10 mt-4">
                    <div className="col-sm-8">
                        <h3 className="display-4">Contact Us</h3>
                        <div id="conform">
                            <form>
                                Name:<br /> <input type="text" size="40"
                                    name="ContactName" /> <br />
                                Phone Number:<input
                                        type="text"
                                        name = "phoneno"
                                        // value={phone}
                                        // onChange={(e) => setPhone(e.target.value)}
                                    /><br/>
                                Message: <br /> <textarea name="ContactComment" rows="6"
                                    cols="40"></textarea><br />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
ReactDOM.render(<MyContactComponent/>, document.getElementById('mycontactcomp'));