import React, {createRef} from "react";
import Timeline from "./Timeline";
import {createPortal} from "react-dom";


export default class BottomPanel extends React.Component {
    contentRef = createRef()

    state = {
        saveArea: null
    }

    componentDidMount() {
        let portalElement = document.getElementById('central-panel-save-zone')
        this.setState({
            saveArea: createPortal(<div style={{height: `${this.contentRef.current.offsetHeight + 40}px`}}/>, portalElement)
        })
    }

    render() {
        return (
            <div ref={this.contentRef} className="bottom_panel">
                {this.state.saveArea}

                <div className="bottom_wrapper">
                    <div className="cover_names">
                        <img src="img/mini-cover.svg" alt="mini-cover" className="mini-cover"/>
                            <ul className="names">
                                <li className="Track_name">Track Name</li>
                                <li className="Artist_name">Artist Name</li>
                            </ul>
                            <img src="img/heart.svg" alt="like" className="heart"/>
                    </div>
                    <div className="timeline_and_buttons">
                        <div style={{display: "flex", width: '30%', justifyContent: 'space-between', marginBottom: '10px'}}>
                            <img src="img/shuffle.svg" alt="shuffle"/>
                            <img src="img/prev.svg" alt="prev"/>
                            <img src="img/play.svg" alt="play"/>
                            <img src="img/next.svg" alt="next"/>
                            <img src="img/cycle.svg" alt="cycle"/>
                        </div>

                        <Timeline/>
                    </div>
                    <nav className="extra_buttons">
                        <ul className="buttons_list">
                            <li className="extra_button">
                                <img src="img/list.svg" alt="list" className="extra_button_img"/>
                            </li>
                            <li className="extra_button">
                                <img src="img/blocks.svg" alt="blocks" className="extra_button_img"/>
                            </li>
                            <li className="extra_button">
                                <img src="img/sound.svg" alt="sound" className="extra_button_img"/>
                            </li>
                            <li className="extra_button">
                                <img src="img/sound_power.svg" alt="sound_power" className="extra_button_img"/>
                            </li>
                            <li className="extra_button">
                                <img src="img/scale.svg" alt="scale" className="extra_button_img"/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}