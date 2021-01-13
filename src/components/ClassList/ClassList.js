import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => this.setState({students: res.data}))
  }
  render() {
    const students = this.state.students.map((el, i) => (
      <Link to={`/student/${el.id}`}>
        <h3 key={i}>{el.first_name} {el.last_name}</h3>
      </Link>
    ))
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}