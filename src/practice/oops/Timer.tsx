import React from "react";


class Timer extends React.Component<{}, any> {

    constructor(props: {}) {
        super(props);
        this.state = {
            time: 0,
            timeLeft: 0,
            interval: null,
        }
    }

    componentDidUpdate(): void {
        if (this.state.timeLeft <= 0)
        clearInterval(this.state.interval)
    }

    handleTimeChange(e: any) {
        this.setState({ time: e.target.value, timeLeft: e.target.value })
    }

    setTimer() {
        this.setState({interval: setInterval(() => {
            this.setState((state: any) => ({ timeLeft: state.timeLeft - 1 }));
        }, 1000)})
    }

    render() {
        return (
            <>
                <p> Enter Time </p>
                <input type="number" className="border border-black" onChange={(e) => this.handleTimeChange(e)} />
                <p> time is: {this.state.timeLeft} </p>
                <button type="submit" onClick={() => this.setTimer()}> Start </button>
            </>
        )
    }
}

export default Timer;