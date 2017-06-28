import React, {Component} from "react";
import "../scss/home.css";
import config from "../config";
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-header">
                    <object data={`${config.static}/images/logo.svg`} className="home-logo" alt="logo"></object>
                    <h2>Welcome to Databrary</h2>
                </div>
                <p className="home-intro">
                    To get started upload some videos!
                </p>
            </div>
        );
    }
}
