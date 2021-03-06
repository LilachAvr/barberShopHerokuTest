/* eslint-disable no-sequences */
import React, { Component } from 'react';
import axios from 'axios';
import './SettingQueues.css';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

class SettingQueues extends Component {

    state = {
        selectStyleChoosen: false, dateChoosen: false, barberChoosen: false, styleChoosen: false, backToHome: false, currentQueueID: '',isRemoved:false,
        timesAlreadySet: '', timesList: [], flag: false, added: false, dateValue: '', selectValue: new Date(), selectStyle: '', chooseBarber: '', allQueues: [], filterQueues: [], alertError: false, alertSuccess: false, showUpdateTimes: [],
        times: [
            { time: '11:00' },
            { time: '11:20' },
            { time: '11:40' },
            { time: '12:00' },
            { time: '12:20' },
            { time: '12:40' },
            { time: '13:00' },
            { time: '13:20' },
            { time: '13:40' },
            { time: '14:00' },
            { time: '14:20' },
            { time: '14:40' },
            { time: '15:00' },
            { time: '15:20' },
            { time: '15:40' },
            { time: '16:00' },
            { time: '16:20' },
            { time: '16:40' },
            { time: '17:00' },
            { time: '17:20' },
            { time: '17:40' },
            { time: '18:00' },
            { time: '18:20' },
            { time: '18:40' },
            { time: '19:00' },
            { time: '19:20' },
            { time: '19:40' },
            { time: '20:00' },
            { time: '20:20' },
            { time: '20:40' },
            { time: '21:00' }]
    }
    id = '';
    dateValue = ''
    selectValue = ''
    selectStyle = ''
    dateVal = ''
    chooseBarber = ''
    userphone = this.props.username.phone
    userName = this.props.username.userName
    name = ''
    maneX = ''
    // times = [{ time: '11:00' }, { time: '12:00' }, { time: '13:00' }, { time: '14:00' }, { time: '15:00' }, { time: '16:00' }];
    token = localStorage.usertoken.split(',')[1].split(':')[1].split('"')[1]

    today = new Date();
    dd = this.today.getDate();
    mm = this.today.getMonth() + 1;
    yyyy = this.today.getFullYear();
    checkDateX(x) {
        if (x < 10) {
            return x = '0' + x
        }
        else {
            return x
        }

    }

    maxdays = moment().add(14, 'days').calendar();
    newformat = moment(this.maxdays).format('YYYY-MM-DD');


    today1 = this.yyyy + '-' + this.checkDateX(this.mm) + '-' + this.checkDateX(this.dd);


    scheduledCustomerQueues = () => {

        this.setState({
            dateValue: this.dateValue,
            selectValue: this.selectValue,
            selectStyle: this.selectStyle,
            chooseBarber: this.chooseBarber
        })

        const data = {
            time: this.dateValue,
            date: this.selectValue,
            style: this.selectStyle,
            userName: this.props.username.userName,
            phone: this.props.username.phone,
            barber: this.chooseBarber
        }
        console.log(data);


        axios.post('/queues/scheduledCustomerQueues', data)
            .then(res => {


                if (res.status === 201) {
                    this.id = res.data._id;
                    let tmp = [...this.state.allQueues]
                    tmp.push(res.data)
                    this.setState({ allQueues: tmp })
                    this.setState({ alertSuccess: true })
                    this.setState({ isDisable: true })
                    console.log(res.data._id);
                    this.setState({currentQueueID:res.data._id})

                }
                else {


                    console.log(`error code ${res.status}`)
                }

            }).catch(error => {

                this.setState({ alertError: true })
                console.log(error.message.conflict);

            })

    }

    deleteQueue = (id) => {
        axios.delete(`/queues/scheduledCustomerQueues/${id}`)
            .then(res => {
                if (res.status === 200) {

                    // alert('התור נמחק בהצלחה')
                    this.setState({ isRemoved: true });
                }
                else {
                    console.log(`error code ${res.status}`)
                }


            }).catch(err => {

                console.log(err)
            })
    }

    getQueues = () => {
        this.getDetilsFromUserToken();
        axios.get('/queues/scheduledCustomerQueues')
            .then((res) => {


                this.setState({ allQueues: res.data })
                // console.log(res.data.time);

                for (let i = 0; i < this.state.allQueues.length; i++) {
                    const element = this.state.allQueues[i];
                    // console.log(element.time);
                    // console.log(element.date);
                    let temp = [...this.state.timesList]
                    temp.push({ date: element.date, time: element.time, barber: element.barber })
                    this.setState({ timesList: temp })
                    // console.log(this.state.timesList);

                }

            })
            .catch((err) => { console.log(err); })
    }

    componentDidMount() {
        // this.getQueues()

        this.filt();

    }

    getDetilsFromUserToken = () => {
        // console.log(this.token);

        axios.get('/Users/me', { headers: { 'x-access-token': this.token } })

            .then(res => {

                this.userName = res.data.firstName
                this.phone = res.data.phone
                // console.log(this.userName, this.phone);
                this.props.logs(this.userName, this.phone, this.token)
                // console.log(this.userName, this.phone);




                // this.userphone = res.data.phone
            }).catch(err => {

                console.log(err);
            })

    }

    render() {
        // let x;
        // console.log(this.token);
        // console.log(this.state.allQueues);
        // console.log(this.time);
        // console.log(this.state.currentQueueID);
        
        if (this.state.backToHome) {
            return <Redirect to='/Home1' />
        }
        return (
            <div>
                {
                    this.state.alertError ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        . אנא בחר/י תור חדש ,<strong>{this.props.username.userName}</strong> היי
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() =>
                            this.setState({ alertError: !this.state.alertError })}>
                            <span id='exit' aria-hidden="true">&times;</span>
                        </button>
                    </div> : null
                }

                {
                    this.state.alertSuccess ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                        ,{this.props.username.userName} היי
                            <br />נקבע לך תור ביום {this.selectValue}
                        <br />
                             בשעה {this.dateValue}
                        <br />
                        {this.chooseBarber} אצל
                              <br /><br />
                              ...שים לב
                            <br />
                        במידה ואינך מעוניין בתור אנא לחץ על ביטול
                        <br />
                        
                        <button id='btnRemoveQueue'
                         onClick={()=>{
                           this.deleteQueue(this.state.currentQueueID)
                           console.log(this.state.currentQueueID);
                           
                        }}>ביטול</button>
                  
                        <br/>
                        {this.state.isRemoved ? <p style={{ color: 'red' }}>התור נמחק בהצלחה</p> :      
                         <button id='btnConfirmQueue' 
                        onClick={() => {
                            this.setState({ backToHome: true })
                        }}>אישור התור</button>}
                        <br />
                        <img src='/logo.png' alt='logo' id='logoNaftali' />
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() =>
                            this.setState({ alertSuccess: !this.state.alertSuccess })}>
                            <span id='exit' aria-hidden="true">&times;</span>
                        </button>
                    </div> : null
                }

                < div className='settingQ' >

                    <div>
                        <select onChange={(e) => { this.chooseBarber = e.target.value; this.setState({ barberChoosen: true }) }}>
                            <option > בחר ספר</option>
                            <option >worker</option>
                            <option >admin</option>
                        </select>
                        <br /><br />

                        {this.state.barberChoosen ? <input id='calendar' type="date" name="date"
                            onChange={(e) => {
                                this.selectValue = e.target.value;
                                this.setState({ dateChoosen: true });
                                this.filtTimes()
                            }}
                            min={this.today1} max={this.newformat} /> : ''}
                        <br /><br />

                        {this.state.dateChoosen ?
                            <select onChange={(e) => { this.dateValue = e.target.value; this.setState({ styleChoosen: true }) }}>

                                {this.state.times.map((time, i) =>

                                    <option key={i} > {time.time} </option>

                                )}
                            </select>
                            : ''}
                        <br /><br />
                        {this.state.styleChoosen ?
                            <select onChange={(e) => { this.selectStyle = e.target.value; this.setState({ selectStyleChoosen: true }) }}>
                                <option ></option>
                                <option>תספורת רגילה</option>
                                <option>תספורת+צבע</option>
                                <option>תספורת+החלקה+צבע</option>
                                <option>תספורת+החלקה</option>
                                <option>תספורת+ציורים</option>
                            </select>
                            : ''}
                        <br /><br />

                        {this.state.selectStyleChoosen ?
                            <button type='button' onClick={this.scheduledCustomerQueues 
                            }>קבע תור</button>
                            : ''}
                    </div>
                </div >
                {/* <div className='listQueues'>
                    <input type='date' onChange={(e) => {
                        x = e.target.value
                    }} />
                    <button onClick={() => {
                        this.dateVal = x;
                        this.filt()
                        
                    }}>הצג</button>
                    <h1>רשימת תורים</h1>
                    <div className='arrayQ'>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">שם לקוח</th>
                                    <th scope="col">טלפון</th>
                                    <th scope="col">סוג תספורת</th>
                                    <th scope="col">שעה</th>
                                    <th scope="col">תאריך</th>
                                    <th scope="col">ספר</th>
                                    <th scope="col">הסרה</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.filterQueues.map((q, i) => <tr key={i}>
                                    <td>{q.userName}</td>
                                    <td>{q.phone}</td>
                                    <td>{q.style}</td>
                                    <td>{q.time}</td>
                                    <td>{q.date}</td>
                                    <td>{q.barber}</td>
                                    <td ><button><i className="fa fa-trash-alt" onClick={() => this.deleteQueue(q._id)}></i></button></td>
                                </tr>)}

                            </tbody>

                        </table>
                    </div>
                </div> */}

            </div >
        )
    }
    filt = () => {
        this.getQueues();
        const filterWithphone = this.state.allQueues.filter((u, index) => u.phone === this.phone)
        // if (this.dateVal === undefined || this.dateVal === "") {
            this.setState({ filterQueues: filterWithphone })
            // console.log(this.state.filterQueues);
        // } else {
        //     let strdate = this.dateVal.toString();
        //     const filtered = filterWithphone.filter((q, i) => q.date === strdate);
        //     this.setState({ filterQueues: filtered })
        //     // console.log(this.state.filterQueues);

        // }
    }


    filtTimes = () => {

        for (let i = 0; i < this.state.times.length; i++) {
            const clientTime = this.state.times[i].time;
            for (let j = 0; j < this.state.timesList.length; j++) {
                const dbTime = this.state.timesList[j].time;
                if (clientTime === dbTime && this.state.timesList[j].date === this.selectValue && this.state.timesList[j].barber === this.chooseBarber) {
                    this.state.times.splice(i, 1)
                } else {
                    // console.log('eroor splice');
                }
            }
        }

    }

}




export default SettingQueues;

