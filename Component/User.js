import { useState } from "react";

const User = ({ name }) => {
    const [count]=useState(0);
    const [count2]=useState(1);
  return (
    <div className="user-card">
        <h4>count: {count}</h4>
        <h4>count: {count2}</h4>

      <h2>{name}</h2>
      <h3>Location:Indore✨</h3>
      <h4>Social media:pramodbirla01</h4>
    </div>
  );
};

export default User;
