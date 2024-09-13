import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h4>count: {count}</h4>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count increase
        </button>
        <h2>{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Social media:pramodbirla01</h4>
      </div>
    );
  }
}
export default UserClass;
