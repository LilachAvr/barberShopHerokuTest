import React, { Component } from 'react';
import './Budget.css';

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let date = new Date();
let newMonth = month[date.getMonth()];
let year = date.getFullYear();

document.getElementById("monthYear").innerHTML = newMonth + (" ") + year + (":");


let sumIncome = 0;
let sumExpenses = 0;
let sumBalance = 0;
let sumPercentage = 0;
let sum = 0;

let money = document.getElementById('value');
let text = document.getElementById('discreption');
let select = document.getElementById('selector');

let arrayIncome = [];


function press() {
    if (event.keyCode == 13) {
        enter();
    }
}

function enter() {

    // let elementRow, elementTdText, elementTdMoney, elementTdIcon, elementTdPercentage;

    if ((text.value !== "") && (money.value !== "") && (money.value > 0)) {

        if (select.value == "+") {


            sumIncome += Number(money.value);
            document.getElementById('moneyInValue').innerHTML = `+ ${parseFloat(sumIncome).toFixed(2)}`;


        //    let ul = document.createElement('ul');
            let ul = document.getElementById('firstList');
           let li = document.createElement('li');
           li.classList.add('li_space');
           let span = document.createElement('span');
           let description = text.value;
           span.innerHTML = description;
           li.appendChild(span);
           let value = money.value;
           span = document.createElement('span');
           span.innerHTML = value;
           li.appendChild(span);
           let elementTdIcon = document.createElement('i');
           elementTdIcon.onclick = removeIncome;
           elementTdIcon.classList.add("fa");
           elementTdIcon.classList.add("fa-times-circle");
           span = document.createElement('span');
           span.appendChild(elementTdIcon);
           li.appendChild(span);
           ul.appendChild(li)
            
           let listAllAmounth = document.getElementsByName('li');
            // listAllAmounthNewVer = [...document.getElementsByClassName("classAllMoney")];
            for (let i = 0; i < listAllAmounth.length; i++) {
                const amount = listAllAmounth[i];
                elementTdIcon.onclick = function () {

                    console.log("ghsf");
                    

                    sumIncome -= Number(amount.innerText);
                    document.getElementById('moneyInValue').innerText = sumIncome;
                    sumBalance = sumIncome - sumExpenses;
                    document.getElementById('balance').innerHTML = sumBalance;

                    amount.remove();
                    this.parentNode.remove();

                    sumPercentage = Number(Math.floor((sumExpenses / sumIncome) * 100));

                    if (isNaN(sumPercentage) || sumPercentage == Infinity) {
                        document.getElementById('exPercent').innerHTML = '0%';
                    }

                    else {
                        document.getElementById('exPercent').innerHTML = `${parseFloat(sumPercentage).toFixed(2)} %`;
                    }
                }


            }


        }
        else if (select.value == "-") {

            sumExpenses += Number(money.value);

            document.getElementById('moneyExValue').innerHTML = `- ${parseFloat(sumExpenses).toFixed(2)}`;


            elementRow = document.createElement('li');
            document.getElementById("secondList").appendChild(elementRow);

            elementTdText = document.createElement('li');
            elementTdText.style.color = "rgb(102, 101, 101)";
            elementTdText.innerText = text.value;
            elementRow.appendChild(elementTdText);

            elementTdMoney = document.createElement('li');
            elementTdMoney.style.position = "relative";
            elementTdMoney.style.left = "160px";
            elementTdMoney.style.color = "rgb(250, 71, 71)";
            elementTdMoney.innerText = `-${money.value}`;
            elementRow.appendChild(elementTdMoney);

            elementTdPercentage = document.createElement('li');
            
            elementTdPercentage.style.position = "relative";
            elementTdPercentage.style.left = "170px";
            elementTdPercentage.style.color = "rgb(250,71,71)";
            elementTdPercentage.style.backgroundColor = "pink";
            elementTdPercentage.style.width = "50px";
            elementTdPercentage.style.height = "18px";
            elementTdPercentage.style.fontSize = "9px";
            elementTdPercentage.style.textAlign = "center";
            elementTdPercentage.innerHTML = `${parseFloat((money.value / sumIncome) * 100).toFixed(2)} %`;
            elementRow.appendChild(elementTdPercentage);

            elementTdIcon = document.createElement('li');
            elementTdIcon.style.position = "relative";
            elementTdIcon.style.left = "170px";
            elementTdIcon.style.color = "rgb(250, 71, 71)";
            elementTdIcon.innerHTML = '<span><i class="fa  fa-times-circle"></i></span>';
            elementRow.appendChild(elementTdIcon);

            elementTdMoney.classList.add("classAllMoney");
            listAllAmounth = document.getElementsByClassName("classAllMoney");
            // listAllAmounthNewVer = [...document.getElementsByClassName("classAllMoney")]

            for (let i = 0; i < listAllAmounth.length; i++) {
                const amount = listAllAmounth[i];
                elementTdIcon.onclick = function () {
                    

                    sumExpenses += Number(amount.innerText);
                    document.getElementById('moneyExValue').innerText = sumExpenses;
                    sumBalance = sumIncome - sumExpenses;
                    document.getElementById('balance').innerHTML = sumBalance;

                    this.parentNode.remove();

                    sumPercentage = Number(Math.floor((sumExpenses / sumIncome) * 100));
                    if (isNaN(sumPercentage) || sumPercentage == Infinity) {
                        document.getElementById('exPercent').innerHTML = '0%';
                    }
                    else {
                        document.getElementById('exPercent').innerHTML = `${parseFloat(sumPercentage).toFixed(2)} %`;
                    }
                }
            }


        }
        sumBalance = sumIncome - sumExpenses;
        document.getElementById('balance').innerHTML = sumBalance;



        sumPercentage = Number(Math.floor((sumExpenses / sumIncome) * 100));
        if (isNaN(sumPercentage) || sumPercentage == Infinity) {
            document.getElementById('exPercent').innerHTML = '0%';
        }

        else {
            document.getElementById('exPercent').innerHTML = `${parseFloat(sumPercentage).toFixed(2)} %`;
        }

        if (sumBalance > 0) {
            document.getElementById("balance").innerText = `+ ${parseFloat(sumBalance).toFixed(2)}`;
        }
        else {
            document.getElementById("balance").innerText = `${parseFloat(sumBalance).toFixed(2)}`;
        }
    }
    text.value = "";
    money.value = "";

}
let selection = document.getElementById('selector').value;
function colorText() {
    if (document.getElementById('selector').value == '-') {
        document.getElementById('discreption').style.border = "1px solid rgb(250, 71, 71)";
        document.getElementById('value').style.border = "";
        document.getElementById('button').style.color = "rgb(250, 71, 71)";
        document.getElementById('selector').style.border = "1px solid rgb(250, 71, 71)";
    } else {
        document.getElementById('discreption').style.border = "1px solid rgb(40, 185, 181)";
        document.getElementById('value').style.border = "";
        document.getElementById('button').style.color = "rgb(40, 185, 181)";
        document.getElementById('selector').style.border = "1px solid rgb(40, 185, 181)";
    }
}
function colorNum() {
    if (document.getElementById('selector').value == '-') {
        document.getElementById('discreption').style.border = "";
        document.getElementById('value').style.border = "1px solid rgb(250, 71, 71)";
        document.getElementById('button').style.color = "rgb(250, 71, 71)";
        document.getElementById('selector').style.border = "1px solid rgb(250, 71, 71)";
    } else {
        document.getElementById('discreption').style.border = "";
        document.getElementById('value').style.border = "1px solid rgb(40, 185, 181)";
        document.getElementById('button').style.color = "rgb(40, 185, 181)";
        document.getElementById('selector').style.border = "1px solid rgb(40, 185, 181)";
    }

//     listAllAmounth.forEach(e => {
//     console.log(e.innerText);
    
// });

}

function removeIncome(){
                
    this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
    }
        return (
            <div>
                <div id="topPart">

                    <div id="upperHeader">

                        <div id="data"> Available Budget in <span id="monthYear"></span> </div>

                        <div id="balance">- 0.00</div>

                        <div id="income">
                            <div id="incomeText">INCOME</div>
                            <div id="incMoney">
                                <div id="moneyInValue"></div>
                                <div id="inPercent">--</div>
                            </div>
                        </div>

                        <div id="expenses">

                            <div id="expensesText">EXPENSES</div>
                            <div id="expMoney">
                                <div id="moneyExValue"></div>
                                <div id="exPercent">--</div>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default Budget;