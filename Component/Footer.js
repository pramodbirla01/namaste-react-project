import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class Footer extends React.Component {
  constructor(props)
  {
    super(props);

  };

  componentDidMount() {
    console.log("componentDidMount");
    
  }
  render() {
    return (
      <div className="foot">
        <div className="desc">
          <UserClass name={"Pramod (class based)"} location={"Dehradun🗻"} />
        </div>
        <div className="about">
          <h4>
            We are hear to experience you the real <br></br> <span>test..</span>{" "}
          </h4>
        </div>
        <div className="s-media">
          <h5>Connect us on..</h5>
          <ul>
            <li>Instagram</li>
            <li>Linkdin</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
