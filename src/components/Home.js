import React, {Component} from "react";
import "../scss/home.css";
import config from "../config";
import {LoginForm} from "./LoginButton"
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-header">
                    <p className="home-intro">
                        Databrary is a video data library for developmental science.<br />
                        Share videos, audio files, and related metadata. Discover more, faster.
                    </p>
                    {/*<LoginForm />*/}
                </div>
                <Card style={{maxWidth: 600}} className="md-block-centered">
                    <a href="https://nyu.databrary.org/volume/9">
                        <img src="https://nyu.databrary.org/volume/9/thumb?size" href="https://nyu.databrary.org/volume/9" style={{maxWidth: 600}}/>
                    </a>
                    <CardTitle
                        title={"Featured Volume"}
                        subtitle={"Children's social and motor play on a playground"}
                    />
                    <CardText>
                        <a href="/party/5">Adolph, Karen</a>
                    </CardText>
                </Card>
            </div>
        );
    }
}
