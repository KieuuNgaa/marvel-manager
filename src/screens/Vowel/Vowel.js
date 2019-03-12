import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./vowel.scss";

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u'];

class Vowel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      newStr: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveVowel = this.handleRemoveVowel.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleRemoveVowel(e) {
    const {value} = this.state;
    e.preventDefault();

    let edit = value.split('').filter((el) => VOWEL_LIST.indexOf(el.toLowerCase()) == -1).join('');
    this.setState({
      newStr: edit
    });
  }

  render() {

    const {value, newStr} = this.state;

    return (
      <div className="ex-wrapper">
        <header>
          <div className="wrapper">
            <Link to="/">Marvel Manager</Link>
          </div>
        </header>
        <div className="wrapper">
          <p><b>Excersie 3:</b></p>
          <blockquote>
            <pre>
              <code>
{`
  const sql = require('mssql');
  const connectionString = 'some-cnn-string';
  const query1 = 'some-query-1';
  const query2 = 'some-query-2';
  const query3 = 'some-query-3';

  module.exports = (apiKey, cb) => {
  sql.connect(connectionString)
  .then(connection => connection.query(query1))
  .then(result => {
    console.log(result1);
    return connection.query(query2, { ...result1 })
  })
  .then(result => {
    console.log(result2);
    return connection.query(query3, { ...result2 }      
  })
  .then(result => console.log(result3))
}`}
              </code>
            </pre>
          </blockquote>
        </div>
        <div className="vowel wrapper">
          <p><b>Excersie 2:</b></p>
          <h4>Five of the 26 alphabet letters are vowels: A, E, I, O, and U.</h4>
          <label><b>Enter string you want remove Vowel:</b></label>
          <br/> 
          <input type="text" value={value} onChange={this.handleChange} />
          <button 
              onClick={this.handleRemoveVowel}>
              Remove
          </button>

          <p className="result"><b>Result:</b> {newStr}</p>
        </div>
      </div>
    )
  }
}

export default Vowel;