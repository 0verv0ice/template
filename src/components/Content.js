import React from "react";
import LeftPanel from "./LeftPanel";
import BottomPanel from "./BottomPanel";
import CentralPanel from "./CentralPanel";


export default class Content extends React.Component {
    render() {
        return (
            <React.Fragment>
                <LeftPanel/>
                <BottomPanel/>
                <CentralPanel/>
            </React.Fragment>
        )
    }
}