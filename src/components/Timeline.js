import React from "react";


export default class Timeline extends React.Component {
    state = {
        current: 0,
        total: 10
    }

    interval = null

    componentDidMount() {
        this.interval = setInterval(this.updateTime, 1000)
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval)
    }

    updateTime = () => {
        let time = this.state.current + 1

        if (time <= this.state.total)
            this.setState({current: time})
        else
            this.setState({current: 0})
            // clearInterval(this.interval)
    }

    convertTime(time) {
        let minutes = parseInt(time / 60)
        let seconds = time % 60

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
                <div>
                    {this.convertTime(this.state.current)}
                </div>

                {/*<div className="timeline_check">*/}
                    <div style={{background: '#3D3D3D', width: '85%', height: '5px'}}>
                        <div style={{background: '#A4A4A4', width: `${this.state.current / this.state.total * 100}%`, height: '100%'}}/>
                    </div>
                {/*</div>*/}

                <div>
                    {this.convertTime(this.state.total)}
                </div>
            </div>
        )
    }
}