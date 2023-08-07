import React from "react";
import Notification from "./Notification";
import NotificationList from "./NotificationList";

class Close extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        if(NotificationList){
            
        }
    }

    render() {
        return (
            <div>
                <button>X</button>
            </div>
        );
    }
}

export default Close;