'use strict'; 

let hourWork =['6am', '7am','8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let salesPerday=0;


function getRandom(max, min) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
let Seattle = {
Name: 'Seattle',
minCust:23,
maxCust: 65, 
AvgCookies: 6.3 ,
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
