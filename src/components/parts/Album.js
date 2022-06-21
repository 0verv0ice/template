import React from "react";
import PropTypes from "prop-types";


export default class Album extends React.Component {
    render() {
        return (
            <div className="album">
                <img src="img/image%20(1).png" alt="cover" className="album_cover"/>
                <p className="Track_name + aue">{this.props.name}</p>
                <p className="Artist_name + aue">{this.props.artist}</p>
            </div>
        )
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired
    }
}