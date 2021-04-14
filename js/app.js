'use strict';

// // global variables
var newLocation = [];
var totalHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var nameOfBranches = ['Seatle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
// construct object

function Location(nameStore, minHourCustomer, maxHourCustomer, averageCookies) {
    this.nameStore = nameStore;
    this.minHourCustomer = minHourCustomer;
    this.maxHourCustomer = maxHourCustomer;
    this.averageCookies = averageCookies;
    this.avgCustPerOur = [];
    newLocation.push(this);
    // this.render();


}



new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);
function callFunction() {
    console.log(newLocation)
    for (let i = 0; i < newLocation.length; i++) {
        newLocation[i].avgCust()
        newLocation[i].createRow()
    }
}



Location.prototype.rand = function () {
    return Math.floor(Math.random() * (this.maxHourCustomer - this.minHourCustomer) + this.minHourCustomer);
}



Location.prototype.avgCust = function () {
    for (let i = 0; i < totalHours.length - 1; i++) {
        this.avgCustPerOur.push(Math.floor(this.rand() * this.averageCookies));

    }
}



function createTable() {

    let tableEl = document.createElement('table');
    tableEl.setAttribute('id', 'table');
    container.appendChild(tableEl);

    let header = document.createElement('thead');
    tableEl.appendChild(header);

    let headingRow = document.createElement('tr');
    header.appendChild(headingRow);
    for (var i = 0; i < totalHours.length; i++) {

        let thEl = document.createElement('th');
        headingRow.appendChild(thEl);
        thEl.textContent = totalHours[i];
    }
    let thEl = document.createElement('th');
    headingRow.appendChild(thEl);
    thEl.textContent = 'Daily Location Total';
}


Location.prototype.createRow = function () {
    let tableEl = document.getElementById('table');
    let body = document.createElement('tbody');
    tableEl.appendChild(body);
    let rowBody = document.createElement('tr');
    body.appendChild(rowBody);
    let tdEl = document.createElement('td');
    rowBody.appendChild(tdEl);
    tdEl.textContent = this.nameStore;
    let total = 0;
    for (var i = 0; i < totalHours.length - 1; i++) {
        let tdEl = document.createElement('td');
        rowBody.appendChild(tdEl);
        tdEl.textContent = this.avgCustPerOur[i];
        total += this.avgCustPerOur[i];
    }
    tdEl = document.createElement('td');
    rowBody.appendChild(tdEl);
    tdEl.textContent = total;

}


function tableFooter() {

    let tableEl = document.getElementById('table');
    let footer = document.createElement('tfoot');
    footer.setAttribute('id','tablefooter')
    tableEl.appendChild(footer);
    let rowFooter = document.createElement('tr');
    footer.appendChild(rowFooter);
    let tdEl = document.createElement('td');
    rowFooter.appendChild(tdEl);
    tdEl.textContent = 'Total';
    let total = 0;
    for (let i = 0; i < totalHours.length - 1; i++) {
        let tdEl = document.createElement('td');
        rowFooter.appendChild(tdEl);
        let sum = 0;
        for (let j = 0; j < newLocation.length; j++) {
            sum += newLocation[j].avgCustPerOur[i];
        }
        tdEl.textContent = sum;
        total += sum;
    }
    tdEl = document.createElement('td');
    rowFooter.appendChild(tdEl);
    tdEl.textContent = total;
}

createTable();
callFunction();

tableFooter();

//get the form :

const form = document.getElementById('cookiesform');
form.addEventListener('submit', formShop);

function formShop(event) {
    event.preventDefault();
    var nameStore = event.target.name.value;
    nameStore = nameStore.toLowerCase();
    // console.log('name =' + nameStore);
    var minCust = event.target.minCust.value;
    console.log(minCust);
    var maxCust = event.target.maxCust.value;
    var avgCookie = event.target.avgCookie.value;
    // console.log(maxCust,avgCookie);
    // console.log(event.target) ;
    console.log('minCust>maxCust',minCust>maxCust)
  if(parseInt(minCust)>parseInt(maxCust)){
      alert('error : min is greater than max ');

  }else{
    let store = new Location(nameStore, minCust, maxCust, avgCookie);
    store.avgCust();
    store.createRow();

    document.getElementById('tablefooter').remove();
    // document.getElementById('table').deleteRow(newLocation.length+1);
    tableFooter();
}

}





//    Location.prototype.display= function () {
//         let total = 0;

//         let container = document.createElement('div');
//         document.body.appendChild(container);

//         let h1element = document.createElement('h1');
//         container.appendChild(h1element);
//         h1element.textContent = 'seatle';
//         let unorderList = document.createElement('ul');
//         container.appendChild(unorderList);
//         for (let j = 0; j < this.avgCustPerOur.length; j++) {
//             let list = document.createElement('li');
//             unorderList.appendChild(list);
//             total += this.avgCustPerOur[j]


//             list.textContent = `${totalHours[j]}: ${this.avgCustPerOur[j]} cookies`;
//         }
//         let list = document.createElement('li');
//         unorderList.appendChild(list);
//         list.textContent = `Total: ${total} cookies`;


//         loc1.display();
//       console.log(loc1);

//     }

