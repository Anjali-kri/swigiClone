import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };
        
        // console.log(props);
        console.log("child constructor");       
    }

    componentDidMount() {
        console.log("child component did mount");
    };

    render() {
        console.log("child render");
        const {count, count2} = this.state;
        return ( <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h2>count: {count}</h2>
        <button onClick={() => {
            this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 1,

            })
        }}>count inscrease</button>
        <h2>count2: {count2}</h2>


        <h3>Location: Dehradungfhg</h3>
        <h4>Contact: anjali@mail.com</h4>
    </div>
    )
    }
}

export default UserClass;