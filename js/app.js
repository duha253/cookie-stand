'use strict';

let hourWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let bodyEl = document.getElementById('body');
let table = document.createElement('table');
bodyEl.appendChild(table);
function getRandom(max, min) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}



function Location(locationName, minCust, maxCust, AvgCookies) {
   this.name = locationName;
   this.minCust = minCust;
   this.maxCust = maxCust;
   this.AvgCookies = AvgCookies;
   //this.salesPerday = 0;
   this.arrCustperhour = [];
   this.arrcookiesPerHour = [];
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
   }
}





// 

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


Location.prototype.Render = function () {
   this.generateCustomer();
   this.generateCookies();
   let tr = document.createElement('tr');
   table.appendChild(tr);
   let th = document.createElement('th');
   tr.appendChild(th);
   th.textContent = this.name;
   


   let td;
   let total = 0;
   for (let i = 0; i < this.arrcookiesPerHour.length; i++) {
      td = document.createElement('td');
      tr.appendChild(td);
      td.textContent = this.arrCustperhour[i];
      total = total + this.arrCustperhour[i];
   }
   td = document.createElement('td');
   tr.appendChild(td);
   td.textContent = total;
}





function footerRow() {
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
    let megaTotal =0;
   
   for (let i = 0; i < hourWork.length; i++) {
      sum = 0;

      for (let j = 0; j < arrOfObjects.length; j++) {
         sum = sum + arrOfObjects[j].arrcookiesPerHour[i];

      }
      let LocationNew=
     megaTotal = megaTotal + sum;
      th1 = document.createElement('th');
      tr.appendChild(th1);
      th1.textContent = sum;
   }
   let Ttotal = document.createElement('th');
   tr.appendChild(Ttotal);
   Ttotal.textContent = megaTotal;


}
let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6);
let arrOfObjects = [seattle,tokyo, dubai, paris, lima];
//headersRow();
headerRow()                             
seattle.Render();
tokyo.Render();
dubai.Render();
paris.Render();
lima.Render();
footerRow();
//lowerRow();



const form = document.getElementById('Newlocation');

form.addEventListener('submit', locationCreator);

function locationCreator (event) {
   event.preventDefault();
    //console.log(event);

    const LocationName = event.target.locationN.value;
     //console.log(LocationName);

     let  MiniCustomer=event.target.minCastt.value;

     let  MaxCustomer=event.target.maxCastt.value;

     let avargeNumber=event.target.Avg.value;
 
   
let newlocation = new Location (LocationName,MiniCustomer,MaxCustomer,avargeNumber);

newlocation.Render();
newlocation.generateCustomer();
newlocation.generateCookies();
 
}
for (let x = 0; x < arr.length; x++) {
  arr[x].generateCookies();
  arr[x].generateCustomer();
   arr[x].Render();

   
}




























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
