import React, { useState } from "react";
import "./Forms.css";
import Buttons from "../Components/Buttons";

function Forms() {
  const [name, setName] = useState("");
  return (
    <>
      <div>
        <form className="forms-direction">
          <div className="forms-spacing">
            <label>
              <input
                className="form1-input"
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                className="form2-input"
                type="text"
                placeholder="Last Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
        </form>
        <form>
          <div>
            <label>
              <input
                className="forms-email-input"
                type="text"
                placeholder="Email"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
        </form>
        <form>
          <div>
            <label>
              <input
                className="forms-message-input"
                type="text"
                placeholder="Your Message"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
        </form>
        <div className="form-submit">
          <Buttons name="Submit" siz="md" />
        </div>
      </div>
    </>
  );
}

export default Forms;
