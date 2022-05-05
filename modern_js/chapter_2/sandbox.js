// const age = 25;
// let year = 2019;
// // log things to console

// console.log(age, year);

// strings
// console.log("hello world");

// // string concat
// let first = 'Brandon';
// let last = 'Anderson';

// let full = first + " " +  last;
// console.log(full); 

// //get char
// console.log(full[0]);

// // string len
// console.log(full.length);

// // string methods
// console.log(full.toUpperCase());

// let result = full.toLowerCase();
// console.log(result);
// console.log(full);

// let email = 'baohanmimi@gmail.com';
// let idx = email.indexOf('@');
// console.log(idx);

// common string methods

// let email = 'baohanmimi@gmail.com';
//let res = email.lastIndexOf('m');

//let res = email.slice(0, 10);

// let res = email.substring(9, 10);

// let res = email.replace('m', 'w');

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);
// console.log(10/2);
// let result = radius %3;

// let result = pi * radius**2;

// console.log(result);

// const title = 'best reads of 2022';
// const author = 'meem';
// const likes = 30;

// // concatenation way
// // this is the mesy way with all the + and space in the string to manually add them together

// // template string 
// let res = `the blog called ${title} by ${author} has ${likes} likes`;
// console.log(res);

// // create html template
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html)

// let ninjas = ['shaun', 'ryu', 'han'];
// ninjas[1] = 'ken';

// // let res = ninjas.join(', ');
// // let res = ninjas.indexOf('ken');
// // let res = ninjas.concat(['ken', 'crystal']);
// // let res = ninjas.push('max');
// let res = ninjas.pop();
// console.log(res);

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

// let arr = ['cal', 'newport', 'digital'];
// let res = arr.includes('newport');

// console.log(res);

// for (let i = 0; i < 5; i ++) {
//     console.log('in loop', i);
// }

// const arr = ['cal', 'newport', 'bool'];

// for (let i = 0; i < arr.length; i ++){
//     // console.log(arr[i]);
//     let html = `
//         <div>${arr[i]}</div>
//     `;
//     console.log(html);
// }

// do while code block

// let i = 0;

// do {
//     console.log(i);
//     i ++ ;
// } while(i < 5);

// const grade = 'F';

// switch(grade){
//     case 'A':
//         console.log('you go an A');
//         break;
//     case 'B':
//         console.log('you go an B');
//         break;
//     case 'C':
//         console.log('you go an C');
//         break;
//     case 'D':
//         console.log('you go an D');
//         break;
//     default:
//         console.log('grade is too low its embarrasing to print it out');
// }


// function greet(){
//     console.log('hello there');
// }

// greet();

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak('meem', 'afternoon');

// speak();

// const calcArea = function(rad){
//     return 3.14 * rad**2;
    
// };

// const area = calcArea(5);
// console.log(area);

// arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);

// const greet = () =>  'hello world';
// console.log(greet());

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i ++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10, 15, 30], 0.2));

// call back function - passing a function into another function as a parameter
// const myFunc = (callBackFunc) => {
//     let value = 50;
//     callBackFunc(value);
// };

// myFunc(value => {
//     console.log(value)
// });

// const ul = document.querySelector('.people');

// let people = ['andrew', 'beth', 'coldry', 'dan', 'elburn'];

// let html = ``;

// people.forEach(function(person){
//     // create a html template
//     html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);

// ul.innerHTML = html;

// people.forEach((person, index) => {
//     console.log(person, index);
// })

// const logPerson = (person, index) => {
//     console.log(`${index} is ${person} `);
// };

// people.forEach(logPerson);

// const blogs = [
//     { title: 'im glad that we have both moved on', likes: 2},
//     { title: 'lets stop keeping in touch, ive had my fun', likes: 10}
// ];

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'berlin',
//     blogs: [
//         { title: 'im glad that we have both moved on', likes: 2},
//         { title: 'lets stop keeping in touch, ive had my fun', likes: 10}
//     ],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logBlogs(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs');
//         this.blogs.forEach(blogs => {
//             console.log(blogs.title, blogs.likes);
//         });
//     }
// };

// user.logBlogs()

// console.log(user);
// user.login();
// user.logout();

// const name2 = 'mario';
// name2.toUpperCase();


// const para = document.querySelector('div.error'); // grabbing the first p tag

// console.log(para);

//grabbing the p tag
// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//   console.log(para);  
// })

// // get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);

// const para = document.querySelector('p');

// // console.log(para.innerText);
// // para.innerText += ', im actually almost fucking dead at this point';

// const paras = document.querySelectorAll('p');
// // paras.forEach(para => {
// //     console.log(para.innerText);
// //     para.innerText += ' new text';
// // });

// const content = document.querySelector('.content');

// // console.log(content.innerHTML);
// // content.innerHTML = '<h2> this is a new header </h2>';

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// })

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.youtube.com/watch?v=XQmZk8lFhQs');


// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'happy');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('style', 'color: green');

// mssg.style.margin = '20px';

// const content = document.querySelector('p');

// // console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const params = document.querySelectorAll('p');

params.forEach(param => {
    if(param.innerText.includes('success')){
        param.classList.add('success');
    }else if(param.innerText.includes('error')){
        param.classList.add('error');
    }
})