import { Card } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import { w3cwebsocket as W3CWebSocket } from "websocket";

export default class PrinterCamera extends React.Component
{

    constructor(props)
    {
        super(props);

        this.props = props;

        this.state = {
            data: null
        };
    }

    render()
    {
        return (
            <Card>
                <Card.Header as="h5">Printer Camera</Card.Header>
                <img src={"data:image/jpeg;base64," + this.state.data} class="rounded float-left" />
            </Card>
        )
    }

    componentDidMount()
    {
        this.client = new W3CWebSocket(this.props.camera_ws_url);

        this.client.onopen = () =>
        {
            this.client.send("read_camera");
        };

        this.client.onmessage = (message) =>
        {
            this.setState({ data: message.data })
        };

    }
}

PrinterCamera.propTypes = {
    ip_address: PropTypes.string.isRequired,
    camera_ws_url: PropTypes.string.isRequired

}
