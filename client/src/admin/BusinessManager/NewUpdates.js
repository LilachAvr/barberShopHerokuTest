import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';

class NewUpdates extends Component {
    state = {}

    render() {

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        עדכונים חמים ללקוחות
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='text'/>
                    <Button variant="info" >
                        עדכן
              </Button>
                </Modal.Body>
                <Modal.Footer>
                    <img src='https://www.freepik.com/premium-vector/men-hair-moustache-styling-vintage-gentleman-haircut-beauty-beard-fashion-mustaches-styles-illustration-set_8636976.htm' alt=''/>
                    <Button variant='danger' onClick={this.props.onHide}>חזור</Button>
                </Modal.Footer>
            </Modal >

        );
    }
}

export default NewUpdates;