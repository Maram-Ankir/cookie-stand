'use strict';

// // global variables
var totalHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// seattle

const seatle = {
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    avgCustPerOur: [],


    display: function () {
        let total = 0;
        const container = document.getElementById('container');
        let h1element = document.createElement('h1');
        container.appendChild(h1element);
        h1element.textContent = 'seatle';
        let unorderList = document.createElement('ul');
        container.appendChild(unorderList);
        for (let j = 0; j < this.avgCustPerOur.length; j++) {
            let list = document.createElement('li');
            unorderList.appendChild(list);
            total += this.avgCustPerOur[j]

            
            list.textContent = `${totalHours[j]}: ${this.avgCustPerOur[j]} cookies`;
        }
        let list = document.createElement('li');
        unorderList.appendChild(list);
        list.textContent = `Total: ${total} cookies`;
       


    }

};

seatle.rand = function () {
    return Math.floor(Math.random() * (seatle.maxCust - seatle.minCust) + seatle.minCust);
}

seatle.rand();
// console.log(seatle.rand())


seatle.avgCust = function () {
    for (let i = 0; i < totalHours.length; i++) {
        seatle.avgCustPerOur.push(Math.floor(seatle.rand() * seatle.avgCookie));

    }
}
seatle.avgCust();
// console.log(seatle.avgCustPerOur);



seatle.display();




