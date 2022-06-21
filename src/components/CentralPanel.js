import React from "react";
import Album from "./parts/Album";


export default class CentralPanel extends React.Component {
    static albums = [
        {name: 'Jija', artist: 'Kain'},
        {name: 'Huinia', artist: 'Juk'},
        {name: 'фывфыв', artist: 'Juk'},
        {name: 'фывфыв', artist: 'Juk'},
    ]

    render() {
        return (
            <div className="central_view">
                <div className="central_block">
                    <div className="central_top">
                        <h1 className="central_header_text">Playlists</h1>
                        <ul className="recently_played">
                            <li className="rp">
                                <img src="img/search_white.svg" alt="search" className="rp_img"/>
                            </li>
                            <li className="rp">
                                Recently_played
                            </li>
                            <li className="rp">
                                <img src="img/arrow_down.svg" alt="arrow_down" className="rp_img"/>
                            </li>
                        </ul>
                    </div>
                    <div className="albums">
                        <ul className="central_wrapper">
                            <li>
                                <div className="liked_songs">
                                    <p className="liked_songs_text">Some artist • Some artist • Some artist • Some
                                        artist •
                                        Some artist • Some artist • Some artist • Some artist...</p>
                                    <p className="liked_songs_header">Liked Songs</p>
                                    <p className="liked_songs_count">61 liked songs</p>
                                </div>
                            </li>

                            {
                                CentralPanel.albums.map((item, index) => <Album key={index} {...item}/>)
                            }
                        </ul>
                    </div>
                </div>
                <div id='central-panel-save-zone'/>
            </div>
        )
    }
}