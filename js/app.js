'use strict';
             
let hours = ['6am','7pm','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let container = document.getElementById('container');
let megaTotal =0;
let table = document.createElement('table');
container.appendChild(table);
let arrOfObjects = [];



function Location(locationName,min,max,avg){
   this.locationName = locationName;
   this.min = min;
   this.max = max;
   this.avg = avg;
   this.randomCustomers = [];
   this.numOfCookiesSoldPerHour = [];
   this.total = 0;
   arrOfObjects.push(this)


}
Location.prototype.randomCustomerPerHour = function(){
        for(let i = 0 ; i < hours.length ; i++){
            this.randomCustomers.push(randomGenrator(this.min,this.max));
        }
}
Location.prototype.cookiesSoldPerHour = function(){
        for(let i = 0 ; i < hours.length; i++){
        this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avg));
        this.total += this.numOfCookiesSoldPerHour[i];
        
}}
Location.prototype.render = function(){

    let tr = document.createElement('tr');
    table.appendChild(tr);

    let locationTitle = document.createElement('td');
    tr.appendChild(locationTitle);
    locationTitle.textContent = this.locationName;

    let td;
    for(let  i = 0; i < this.numOfCookiesSoldPerHour.length; i++){
        td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.numOfCookiesSoldPerHour[i];
    }
    let dailyTotal = document.createElement('td');
    tr.appendChild(dailyTotal);
    dailyTotal.textContent = this.total
}

let seattle = new Location('Seattle',23,65,6.3);
let tokyo = new Location('Tokyo',3,24,1.2);
let dubai = new Location('Dubai',11,38,3.7);
let paris = new Location('Paris',20,48,2.3);
let lima = new Location('Lima',2,16,4.6);




headerRow()

for(let i = 0 ; i <arrOfObjects.length; i ++){
    arrOfObjects[i].randomCustomerPerHour();
    arrOfObjects[i].cookiesSoldPerHour();
    arrOfObjects[i].render();
    
}
footerRow();





function headerRow(){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    
    let emptyCell = document.createElement('th');
    tr.appendChild(emptyCell);
    
    let th;
    for(let i = 0 ; i < hours.length; i++){
        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = hours[i];

    }
    let dailyTotalCell = document.createElement('th');
    tr.appendChild(dailyTotalCell);
    dailyTotalCell.textContent = 'Daily Location Total';
    
}

function footerRow(){
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let thTotal = document.createElement('th');
    tr.appendChild(thTotal)
    thTotal.textContent = 'Totals';
    let th;
    let sum;
    let totalOfTotals = 0;
    for(let i = 0 ; i < hours.length; i++){
        sum = 0;
        for(let j = 0; j < arrOfObjects.length; j++){
            sum = sum + arrOfObjects[j].numOfCookiesSoldPerHour[i];
        
        }
                      
        
        th = document.createElement('td');
        tr.appendChild(th);
        th.textContent = sum;
        megaTotal = megaTotal + sum;
    }
        totalOfTotals = totalOfTotals + megaTotal;
    let totalOfTotalss = document.createElement('th');
    tr.appendChild(totalOfTotalss);
    totalOfTotalss.textContent = totalOfTotals;
}

function randomGenrator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  /////////////////////////
  const form = document.getElementById('NewStore');

  form.addEventListener('submit', storCreator)


  function storCreator(event) {
  event.preventDefault();
  
  const storName = event.target.nameField.value;

  let min = event.target.minField.value;
  min = parseInt(min);
  let max = event.target.maxField.value;
  max = parseInt(max);
  let avg = event.target.avgField.value;
  avg = parseFloat(avg);
  
  

let newStoree = new Location (storName, min, max, avg);
table.deleteRow(table.rows.length -1);
newStoree.randomCustomerPerHour();
newStoree.cookiesSoldPerHour();
megaTotal=0;
newStoree.render();
footerRow();
}


/*'use strict';

let hourWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let bodyEl = document.getElementById('body');
let table = document.createElement('table');
bodyEl.appendChild(table);
let megaTotal =0;
let arrOfObjects = [];


function Location(locationName, minCust, maxCust, AvgCookies) {
   this.locationName = locationName;
   this.minCust = minCust;
   this.maxCust = maxCust;
   this.AvgCookies = AvgCookies;
   //this.salesPerday = 0;
     this.arrCustperhour = [];
   this.arrcookiesPerHour = [];
    this.total = 0;
  arrOfObjects.push(this)
}

Location.prototype.generateCustomer = function () {
   for (let i = 0; i < hourWork.length; i++) {
      this.arrCustperhour.push(Math.floor(getRandom(this.maxCust, this.minCust)));
   }
}
Location.prototype.generateCookies = function () {
   for (let i = 0; i < hourWork.length; i++) {
      this.arrcookiesPerHour.push(Math.floor(this.arrCustperhour[i] * this.AvgCookies));
      //this.salesPerday= this.salesPerday +  this.arrcookiesPerHour[i];
      this.total += this.arrcookiesPerHour[i];
   }
}

Location.prototype.render = function () {
   //this.generateCustomer();
   //this.generateCookies();
   let tr = document.createElement('tr');
   table.appendChild(tr);
   let locationTitle = document.createElement('td');
   tr.appendChild(locationTitle);
   locationTitle.textContent = this.locationName;
   
   let td;
  
   for (let i = 0; i < this.arrcookiesPerHour.length; i++) {
      td = document.createElement('td');
      tr.appendChild(td);
      td.textContent = this.arrCustperhour[i];
     }
     let dailyTotals = document.createElement('td');
     tr.appendChild(dailyTotals);
     dailyTotals.textContent = this.total
}

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6);

headerRow()

for(let i = 0 ; i <arrOfObjects.length; i ++){
   arrOfObjects[i].generateCookies();
   arrOfObjects[i].generateCookies();
   arrOfObjects[i].render();
 
}

footerRow();



function headerRow() {
   let tr = document.createElement('tr');
   table.appendChild(tr);

   let emptyCell = document.createElement('th');
   tr.appendChild(emptyCell);

   let th;
   for (let i = 0; i < hourWork.length; i++) {
      th = document.createElement('th');
      tr.appendChild(th);
      th.textContent = hourWork[i];

   }

   let dailyTotalCell = document.createElement('th');
   tr.appendChild(dailyTotalCell);
   dailyTotalCell.textContent = 'Daily location total';

  }



function footerRow () {
   let tr = document.createElement('tr');
   table.appendChild(tr);
   //let th = document.createElement('th');
   //tr.appendChild(th);
   //th.textContent = 'Total';

   let thTotal = document.createElement('th');
   tr.appendChild(thTotal)
   thTotal.textContent = 'Totals';
   
   let th1;
   let sum;
   let totalOfTotals = 0;
   
   for (let i = 0; i < hourWork.length; i++) {
      sum = 0;

      for (let j = 0; j < arrOfObjects.length; j++) {
         sum = sum + arrOfObjects[j].arrcookiesPerHour[i];

      }

         th1 = document.createElement('td');
      tr.appendChild(th1);
      th1.textContent = sum;
      megaTotal = megaTotal + sum;
   }

   totalOfTotals = totalOfTotals + megaTotal;
   let totalOfTotalss = document.createElement('th');
   tr.appendChild(totalOfTotalss);
   totalOfTotalss.textContent = totalOfTotals;
}
 

//headerRow()                             
/*seattle.Render();
tokyo.Render();
dubai.Render();
paris.Render();
lima.Render();
footerRow();
//lowerRow();


function getRandom(max, min) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

//                 form function 
const form = document.getElementById('Newlocation');
form.addEventListener('submit', locationCreator);
function locationCreator (event) {
   event.preventDefault();
   let countRow = table.rows.length-1;
  
    //console.log(event);
    let LocationName = event.target.locationN.value;
     //console.log(LocationName);
     let  MiniCustomer=event.target.minCastt.value;
     MiniCustomer = parent(MiniCustomer);
     let  MaxCustomer=event.target.maxCastt.value;
     MaxCustomer = parent(MaxCustomer);


     let avargNumber=event.target.Avg.value;
     avargNumber = parseFloat(avargNumber);
     //console.log(table.rows.length); 

  
let newlocation = new Location(LocationName,MiniCustomer,MaxCustomer,avargNumber);
table.deleteRow(countRow);
newlocation.generateCustomer();
newlocation.generateCookies();
megaTotal=0;
newlocation.render();

footerRow ();

}*/




//this.generateCustomer();
   //this.generateCookies();





//headersRow();

//}
//for (let x = 0; x < arr.length; x++) {
  //arr[x].generateCookies();
  //arr[x].generateCustomer();
 //  arr[x].Render();

 
 
   // table.deleteRow(contRow);

//newlocation.generateCustomer();
//newlocation.generateCookies();
// footerRow();





























/*'use strict';

let hourWork =['6am', '7am','8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];



function getRandom(max, min) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
let Seattle = {
Name: 'Seattle',
minCust:23,
maxCust: 65,
AvgCookies: 6.3 ,
salesPerday:0,
arrCustperhour:[],
arrcookiesPerHour:[],
 generateCustomer:function(){
    for(let i = 0; i< hourWork.length;i++){
    this.arrCustperhour.push(Math.floor(getRandom(this.maxCust,this.minCust)) ) ;
}
},
generateCookies:function(){
    for (let i = 0; i < hourWork.length; i++) {
       this.arrcookiesPerHour.push(Math.floor(this.arrCustperhour[i] * this.AvgCookies));
       this.salesPerday= this.salesPerday +  this.arrcookiesPerHour[i];
    }
   },

Render:function(){
    let mydiv=document.getElementById('Houers');
        let localDiv = document.createElement('section');
        mydiv.appendChild(localDiv);
        let shopNam=document.createElement('h2');
        shopNam.textContent=this.Name;
        localDiv.appendChild(shopNam);

       let ul = document.createElement('ul');
    localDiv.appendChild(ul);
    for (let i = 0; i < hourWork.length; i++) {
       let li=document.createElement('li');
        li.textContent = ` ${hourWork[i]} : ${this.arrcookiesPerHour[i]} cookies` ;

         ul.appendChild(li);
    }
   let total=document.createElement('li');
   total.textContent=` Total :  ${this.salesPerday}  cookies` ;
   ul.appendChild(total);
}
};
//Seattle.getRandom();
Seattle.generateCustomer();
Seattle.generateCookies();
Seattle.Render();
console.log(Seattle)


function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
 let Tokyo = {
 Name: 'Tokyo',
 minCust: 3,
 maxCust: 24,
 AvgCookies: 1.2 ,
 salesPerday:0 ,
 arrCustperhour:[],
 arrcookiesPerHour:[],
  generateCustomer:function(){
     for(let i = 0; i< hourWork.length;i++){
     this.arrCustperhour.push(Math.floor(getRandom(this.maxCust,this.minCust)) ) ;
 }
 },
 generateCookies:function(){
     for (let i = 0; i < hourWork.length; i++) {
        this.arrcookiesPerHour.push(Math.floor(this.arrCustperhour[i] * this.AvgCookies));
     }
 },

 Render:function(){
     let mydiv=document.getElementById('Houers');
         let localDiv = document.createElement('section');
         mydiv.appendChild(localDiv);
         let shopNam=document.createElement('h2');
         shopNam.textContent=this.Name;
         localDiv.appendChild(shopNam);

        let ul = document.createElement('ul');
     localDiv.appendChild(ul);
     for (let i = 0; i < hourWork.length; i++) {
        let li=document.createElement('li');
         li.textContent = ` ${hourWork[i]} : ${this.arrcookiesPerHour[i]} cookies` ;
         this.salesPerday=this.salesPerday +  this.arrcookiesPerHour[i];
          ul.appendChild(li);
     }
    let total=document.createElement('li');
    total.textContent=` Total :  ${this.salesPerday}  cookies` ;
    ul.appendChild(total);
 }
 };
 Tokyo.generateCustomer();
 Tokyo.generateCookies();
 Tokyo.Render();
 console.log(Tokyo)



 function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
 let Dubai = {
 Name: 'Dubai',
 minCust: 11,
 maxCust: 38,
 AvgCookies: 3.7 ,
 salesPerday:0 ,
 arrCustperhour:[],
 arrcookiesPerHour:[],
  generateCustomer:function(){
     for(let i = 0; i< hourWork.length;i++){
     this.arrCustperhour.push(Math.floor(getRandom(this.maxCust,this.minCust)) ) ;
 }
 },
 generateCookies:function(){
     for (let i = 0; i < hourWork.length; i++) {
        this.arrcookiesPerHour.push(Math.floor(this.arrCustperhour[i] * this.AvgCookies));
     }
 },
 Render:function(){
     let mydiv=document.getElementById('Houers');
         let localDiv = document.createElement('section');
         mydiv.appendChild(localDiv);
         let shopNam=document.createElement('h2');
         shopNam.textContent=this.Name;
         localDiv.appendChild(shopNam);

        let ul = document.createElement('ul');
     localDiv.appendChild(ul);
     for (let i = 0; i < hourWork.length; i++) {
        let li=document.createElement('li');
         li.textContent = ` ${hourWork[i]} : ${this.arrcookiesPerHour[i]} cookies` ;
         this.salesPerday=this.salesPerday +  this.arrcookiesPerHour[i];
          ul.appendChild(li);
     }
    let total=document.createElement('li');
    total.textContent=` Total :  ${this.salesPerday}  cookies` ;
    ul.appendChild(total);
 }
 };
 Dubai.generateCustomer();
 Dubai.generateCookies();
 Dubai.Render();
 console.log(Dubai)



 function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
 let Paris = {
 Name: 'Paris',
 minCust: 20,
 maxCust: 38,
 AvgCookies: 2.3 ,
 salesPerday:0 ,
 arrCustperhour:[],
 arrcookiesPerHour:[],
  generateCustomer:function(){
     for(let i = 0; i< hourWork.length;i++){
     this.arrCustperhour.push(Math.floor(getRandom(this.maxCust,this.minCust)) ) ;
 }
 },
 generateCookies:function(){
     for (let i = 0; i < hourWork.length; i++) {
        this.arrcookiesPerHour.push(Math.floor(this.arrCustperhour[i] * this.AvgCookies));
     }
 },
 Render:function(){
     let mydiv=document.getElementById('Houers');
         let localDiv = document.createElement('section');
         mydiv.appendChild(localDiv);
         let shopNam=document.createElement('h2');
         shopNam.textContent=this.Name;
         localDiv.appendChild(shopNam);

        let ul = document.createElement('ul');
     localDiv.appendChild(ul);
     for (let i = 0; i < hourWork.length; i++) {
        let li=document.createElement('li');
         li.textContent = ` ${hourWork[i]} : ${this.arrcookiesPerHour[i]} cookies` ;
         this.salesPerday=this.salesPerday +  this.arrcookiesPerHour[i];
          ul.appendChild(li);
     }
    let total=document.createElement('li');
    total.textContent=` Total :  ${this.salesPerday}  cookies` ;
    ul.appendChild(total);
 }
 };
 Paris.generateCustomer();
 Paris.generateCookies();
 Paris.Render();
 console.log(Paris)




 function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
 let Lima = {
 Name: 'Lima',
 minCust: 20,
 maxCust: 38,
 AvgCookies: 2.3 ,
 salesPerday:0 ,
 arrCustperhour:[],
 arrcookiesPerHour:[],
  generateCustomer:function(){
     for(let i = 0; i< hourWork.length;i++){
     this.arrCustperhour.push(Math.floor(getRandom(this.maxCust,this.minCust)) ) ;
 }
 },
 generateCookies:function(){
     for (let i = 0; i < hourWork.length; i++) {
        this.arrcookiesPerHour.push(Math.floor(this.arrCustperhour[i] * this.AvgCookies));
     }
 },
 Render:function(){
     let mydiv=document.getElementById('Houers');
         let localDiv = document.createElement('section');
         mydiv.appendChild(localDiv);
         let shopNam=document.createElement('h2');
         shopNam.textContent=this.Name;
         localDiv.appendChild(shopNam);

        let ul = document.createElement('ul');
     localDiv.appendChild(ul);
     for (let i = 0; i < hourWork.length; i++) {
        let li=document.createElement('li');
         li.textContent = ` ${hourWork[i]} : ${this.arrcookiesPerHour[i]} cookies` ;
         this.salesPerday=this.salesPerday +  this.arrcookiesPerHour[i];
          ul.appendChild(li);
     }
    let total=document.createElement('li');
    total.textContent=` Total :  ${this.salesPerday}  cookies` ;
    ul.appendChild(total);
 }
 };
 Lima.generateCustomer();
 Lima.generateCookies();
 Lima.Render();
 console.log(Lima)
 */
