import React, { Component } from 'react';
import axios from 'axios';

class TotalSubscribers extends Component {
    state = { subscribers: [] }

    componentDidMount() {
        this.getTotalSubscribers()
    }
    getTotalSubscribers = () => {
        axios.get('/users/getAllUser')
            .then((res) => {
                console.log(res);
                this.setState({ subscribers: res.data })
                console.log(this.state.subscribers.length);
            })
            .catch((err) =>
                console.log(err)
            )
    }
    render() {
        // console.log(this.subscribers);

        return (
            <div>
                <p>Total: {this.state.subscribers.length} client</p>
                <table>
                    <thead>
                        <tr>
                            <th>שם פרטי</th>
                            <th>שם משפחה</th>
                            <th>טלפון</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.subscribers.map((client, i) => 
                            <tr key={i}>
                                <td>{client.firstName}</td>
                                <td>{client.lastName}</td>
                                <td>{client.phone}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {/* <button onClick={this.getTotalSubscribers()}>כפתור</button> */}
                {/* {this.getSnapshotBeforeUpdate} */}
            </div>
        );
    }
}

export default TotalSubscribers;