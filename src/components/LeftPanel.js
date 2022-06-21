import React from "react";


export default class LeftPanel extends React.Component {
    render() {
        return (
            <div className="left_panel">
                <div className="left_wrapper">
                    <nav className="left_nav">
                        <ul className="left_list_first">
                            <li className="left_link_first">
                                <img src="img/Home.svg" alt="home-img" className="left_icon"/>
                                    Home
                            </li>
                            <li className="left_link_first">
                                <img src="img/Search.svg" alt="search-img" className="left_icon"/>
                                    Search
                            </li>
                            <li className="left_link_first">
                                <img src="img/Lib.svg" alt="library-img" className="left_icon"/>
                                    Your Library
                            </li>
                        </ul>
                        <ul className="left_playlists">
                            <li>PLAYLISTS</li>
                        </ul>
                        <ul className="left_list_second">
                            <li className="left_link_second">
                                <img src="img/create.svg" alt="create-img" className="left_icon"/>
                                    Create Playlist
                            </li>
                            <li className="left_link_second">
                                <img src="img/liked.svg" alt="create-img" className="left_icon"/>
                                    Liked Songs
                            </li>
                            <li className="left_link_second">
                                <div className="line"></div>
                            </li>
                        </ul>
                        <ul className="left_list_third">
                            <li className="left_link_third">Music mix #1</li>
                            <li className="left_link_third">Music mix #2</li>
                            <li className="left_link_third">Music mix #3</li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}