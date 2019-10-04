import React, { Component } from "react";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyCxtoi3oYdi_J86XicHf57owdW55cPvFTM",
  authDomain: "lo-que-ustedes-gusten.firebaseapp.com",
  databaseURL: "https://lo-que-ustedes-gusten.firebaseio.com",
  projectId: "lo-que-ustedes-gusten",
  storageBucket: "",
  messagingSenderId: "93629556314",
  appId: "1:93629556314:web:3108d5362e6623eb6c9a63"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database().ref("/movimientos");

class Dashboard extends Component {

  render() {
    return (
      <div style={{ width: "100%" }}>
        <h1>Balance: {this.props.ingresos - this.props.gastos}</h1>
        <div className="w-50" style={{ width: "50%", float: "left" }}>
            <h3>Ingresos: {this.props.ingresos}</h3>
        </div>
        <div className="w-50">
            <h3>Gastos: {this.props.gastos}</h3>
        </div>
      </div>
    );
  }
}
export default Dashboard;
