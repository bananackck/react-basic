import React from "react";

const styles = {
    wrapper: {
        margin: "auto",
        marginTop: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,

        //자식 요소를 가운데 정렬
        justifyContent: "center",

        //최소 사이즈 지정 & message 길이에 따라 조절
        width: 300,
        height: "auto",
        minHeight: 50,
    },
    messageText: {
        color: "black",
        fontSize: 16,
        margin: "auto",
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called`);
    }
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called`);
    }
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;