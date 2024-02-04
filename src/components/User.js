import { useState } from "react";

const User = (props) => {
const [count, setCount] = useState(0)

    return ( <div className="user-card">
        <h2>Name: Anjali {props.name}</h2>
        <h3>Location: Dehradun</h3>
        <h4>Contact: anjali@mail.com</h4>
        <h4>count:{count}</h4>
    </div>
    )
}

export default User;