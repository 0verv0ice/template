import React from "react";


export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="header_wrapper">
                        <div className="header_arrows">
                            <img src="img/Arrow_left.svg" alt="arrow_left" className="header_arrows-img"/>
                            <img src="img/Arrow_right.svg" alt="arrow_right" className="header_arrows-img"/>
                        </div>

                        <nav className="header_nav">
                            <ul className="header_list">
                                <li className="header_item">
                                    <a href="#" className="header_link">Playlists</a>
                                </li>
                                <li className="header_item">
                                    <a href="#" className="header_link">Podcasts</a>
                                </li>
                                <li className="header_item">
                                    <a href="#" className="header_link">Artists</a>
                                </li>
                                <li className="header_item">
                                    <a href="#" className="header_link">Albums</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="header_profile">
                            <img src="img/Profile.svg" alt="profile" className="profile"/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}