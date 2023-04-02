const accountSid = "ACd9cc5234715afd1fb97b9395a11c2f64";
const authToken = "dca5f71cae7a05390c286462a6809618";
const client = require("twilio")(accountSid, authToken);

function sendMessage(phoneNumber) {
  client.messages
    .create({
      body: "Thank you for reaching out for us. We will look into your message very very soon",
      from: "14752674987",
      to: phoneNumber,
    })
    .then((message) => console.log(message.sid));
}

// // import { sendMessage } from "./twilio";
// const MyContactComponent = () => {
//     // const [phone, setPhone] = useState("");
//     // const handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     sendMessage(phone);
//     // };
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-12 col-sm-10 mt-4">
//                     <div className="col-sm-8">
//                         <h3 className="display-4">Contact Us</h3>
//                         <div id="conform">
//                             <form onSubmit={handleSubmit}>
//                                 Name:<br /> <input type="text" size="40"
//                                     name="ContactName" /> <br />
//                                 {/* <label>
//                                     Phone Number:
//                                     <input
//                                         type="text"
//                                         value={phone}
//                                         onChange={(e) => setPhone(e.target.value)}
//                                     />
//                                 </label> */}
//                                 Message: <br /> <textarea name="ContactComment" rows="6"
//                                     cols="40"></textarea><br />
//                                 <input type="submit" value="Submit" />
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// ReactDOM.render(<MyContactComponent/>, document.getElementById('mycontactcomp'));