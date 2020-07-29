import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class SelectManagerType extends Component {
    state = {isEmployee:false,isBusinessManager:false}

    render() {
        if (this.state.isBusinessManager) {
            return <Redirect to='/Admin'/>
        }
        if (this.state.isEmployee) {
            return <Redirect to='/Employee'/>            
        }
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        בחר סוג עובד
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="secondary" onClick={()=>{ this.setState({isBusinessManager:true})
                    }}>נפתלי
              </Button>
                    <Button variant="primary" onClick={()=>{ this.setState({isEmployee:true})}}>
                        יהודה
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

export default SelectManagerType;