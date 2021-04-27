'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let containerEl = document.getElementById('container');
let tableEl = document.createElement('table');
tableEl.setAttribute('id','table');
let tbodyEl;
containerEl.appendChild(tableEl);
let locations = [];
let tfootEl ;

function Location(location, minCust, maxCust, avgCookies) {
    this.name = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.numberCustomerPerHour = [];
    this.ammountOfCookiesPerHour = [];
    this.total = 0;
    locations.push(this);
}

Location.prototype.noCustomerPerHour = function () {

    for (let i = 0; i < hours.length; i++) {
        this.numberCustomerPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
}

Location.prototype.ammountOfCookies = function () {

    for (let i = 0; i < hours.length; i++) {
        let value = this.avgCookies * this.numberCustomerPerHour[i];
        this.ammountOfCookiesPerHour.push(Math.ceil(value));
        this.total += Math.ceil(value);
    }
    this.ammountOfCookiesPerHour.push(this.total)

}

Location.prototype.render = function () {


    let trEl = document.createElement('tr');
    tbodyEl.appendChild(trEl);
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;
    for (let i = 0; i <= hours.length; i++) {
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = this.ammountOfCookiesPerHour[i];
    }
    // tdEl = document.createElement('td');
    // trEl.appendChild(tdEl);
    // tdEl.textContent = this.total;
}

tableHeader();
tbodyEl = tableBody();
tableEl.appendChild(tbodyEl);

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6);

for (let i = 0; i < locations.length; i++) {

    locations[i].noCustomerPerHour();
    locations[i].ammountOfCookies();
    locations[i].render();


}
tableFooter();


function tableHeader() {
    let theadEl = document.createElement('thead');
    tableEl.appendChild(theadEl);
    let trEl = document.createElement('tr');
    theadEl.appendChild(trEl);
    let thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = '----';
    for (let i = 0; i < hours.length; i++) {
        thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = hours[i];
    }
    thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = 'Daily Location Total';
}

function tableBody() {
    let tbodyEl = document.createElement('tbody');
    tableEl.appendChild(tbodyEl);
    return tbodyEl;
}

function tableFooter() {
    let total = totalPerHour(locations);
    if(tfootEl!==undefined)
    {
        tableEl.deleteTFoot();  
    }
    tfootEl = document.createElement('tfoot');
    //console.log(tfootEl.id);
    tableEl.appendChild(tfootEl);
    let trEl = document.createElement('tr');
    tfootEl.appendChild(trEl);
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = 'Totals';
    for (let i = 0; i < total.length; i++) {
        tdEl = document.createElement('th');
        trEl.appendChild(tdEl);
        tdEl.textContent = total[i];
    }
    //console.log(tableEl);
}


const form = document.getElementById('cookie-standForm');
form.addEventListener('submit', addLocatoin);

function addLocatoin(event) {

    if(validateForm())
    {
        alert('Invalid Input , please try again');
        return;
    }
    event.preventDefault();

    const locationName = event.target.location.value;
    const min = parseInt(event.target.minCust.value);
    const max = parseInt(event.target.maxCust.value);
    const avg = parseFloat(event.target.avg.value);

    let newLocation = new Location(locationName, min, max, avg);
    newLocation.noCustomerPerHour();
    newLocation.ammountOfCookies();
    newLocation.render();

    totalPerHour(locations);
    tableFooter();
}

function totalPerHour(locations) {
    let total = [];
    let value;
    for (let i = 0; i <= hours.length; i++) {
        value = 0;
        for (let j = 0; j < locations.length; j++) {
            value += locations[j].ammountOfCookiesPerHour[i];
        }
        total.push(value);
    }
    return total;
}

function validateForm(){

    let locationFormName = document.getElementById('location').value;
    let mincustForm = document.getElementById('minCust').value;
    let maxCustForm = document.getElementById('maxCust').value;
    let avgForm = document.getElementById('avg').value;

    
    // console.log(locationFormName === 'location' && mincustForm == '0' && maxCustForm == '0' && avgForm == '0.0');
    // console.log(typeof mincustForm);
    // console.log(typeof maxCustForm);
    // console.log(typeof avgForm);

    
    if(locationFormName === 'Enter New Location' || mincustForm == '0' || maxCustForm == '0' || avgForm == '0.0')
    {
        return true;
    }
    else {
        return false;
    }

}
