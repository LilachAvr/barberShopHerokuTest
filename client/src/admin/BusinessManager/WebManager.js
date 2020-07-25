import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './WebManager.css';
import NewUpdates from './NewUpdates';
import { ButtonToolbar } from 'react-bootstrap';


class WebManager extends Component {

    state = { newUpdatesShow: false, acTime: false, setclientqueues: false, updatePriceList: false, updateGallery: false }
    render() {
        let newUpdatesClose = () => this.setState({ newUpdatesShow: false })
        if (this.state.updateGallery) {
            return <Redirect to='/UploadImages' />
        }
        if (this.state.setclientqueues) {
            return <Redirect to='/SettingQAdmin' />
        }
        if (this.state.updatePriceList) {
            return <Redirect to='UpdatePriceList' />
        }
        return (
            <div className='container1'>
                <div className="all">
                    <div  onClick={() => this.setState({ updateGallery: true })}>
                        <button className="left"> עדכון גלריה</button>
                    </div>
                    <div className="center" onClick={() => this.setState({ setclientqueues: true })}>
                        <button className="center">קביעת תורים</button>
                    </div>
                    <div className="right" onClick={() => this.setState({ updatePriceList: true })}>
                        <button className="right">עדכון מחירים</button>
                    </div>

                    <ButtonToolbar>
                        <div className="righter">
                            <button className="righter" onClick={() => {
                                this.setState({ newUpdatesShow: true })
                            }}>עדכונים חמים</button>
                            <NewUpdates
                                show={this.state.newUpdatesShow}
                                onHide={newUpdatesClose}
                            />
                        </div>
                    </ButtonToolbar>

                </div>


            </div>
        )
    }
}
export default WebManager;