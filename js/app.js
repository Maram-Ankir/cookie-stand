'use strict';

// // global variables
var totalHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// seattle

let image = document.createElement('img');
document.body.appendChild(image);
image.setAttribute('src','img/salmon.png');

const seatle = {
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    avgCustPerOur: [],


    display: function () {
        let total = 0;
        
        let container = document.createElement('div');
        document.body.appendChild(container);

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

// Tokyo


const tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    avgCustPerOur: [],


    display: function () {
        let total = 0;

        
        let div = document.createElement('div');
        document.body.appendChild(div);

        let h1element = document.createElement('h1');
        div.appendChild(h1element);
        h1element.textContent = 'tokyo';
        let unorderList = document.createElement('ul');
        div.appendChild(unorderList);
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

tokyo.rand = function () {
    return Math.floor(Math.random() * (tokyo.maxCust - tokyo.minCust) + tokyo.minCust);
}

tokyo.rand();
// console.log(seatle.rand())


tokyo.avgCust = function () {
    for (let i = 0; i < totalHours.length; i++) {
        tokyo.avgCustPerOur.push(Math.floor(tokyo.rand() * tokyo.avgCookie));

    }
}
tokyo.avgCust();
// console.log(seatle.avgCustPerOur);



tokyo.display();

// Dubai

const dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    avgCustPerOur: [],


    display: function () {
        let total = 0;


        let div = document.createElement('div');
        document.body.appendChild(div);

        let h1element = document.createElement('h1');
        div.appendChild(h1element);
        h1element.textContent = 'Dubai';
        let unorderList = document.createElement('ul');
        div.appendChild(unorderList);
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

dubai.rand = function () {
    return Math.floor(Math.random() * (dubai.maxCust - dubai.minCust) + dubai.minCust);
}

dubai.rand();
// console.log(seatle.rand())


dubai.avgCust = function () {
    for (let i = 0; i < totalHours.length; i++) {
        dubai.avgCustPerOur.push(Math.floor(dubai.rand() * dubai.avgCookie));

    }
}
dubai.avgCust();
// console.log(seatle.avgCustPerOur);
dubai.display();



// Paris

const paris = {
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    avgCustPerOur: [],


    display: function () {
        let total = 0;


        let div = document.createElement('div');
        document.body.appendChild(div);

        let h1element = document.createElement('h1');
        div.appendChild(h1element);
        h1element.textContent = 'Paris';
        let unorderList = document.createElement('ul');
        div.appendChild(unorderList);
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

paris.rand = function () {
    return Math.floor(Math.random() * (paris.maxCust - paris.minCust) + paris.minCust);
}

paris.rand();
// console.log(seatle.rand())


paris.avgCust = function () {
    for (let i = 0; i < totalHours.length; i++) {
        paris.avgCustPerOur.push(Math.floor(paris.rand() * paris.avgCookie));

    }
}
paris.avgCust();
// console.log(seatle.avgCustPerOur);
paris.display();


