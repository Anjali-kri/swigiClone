import React from 'react'
import User from './User'
import UserClass from './UserClass'
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent component")
  }

  componentDidMount() {
    console.log("child component did mount");
};
  render() {
    console.log("parent render")
    return (
      <div>About
        <User name={"anjali"} />
        <UserClass name={"class component"} />
      </div>
    );
  }
}



export default About