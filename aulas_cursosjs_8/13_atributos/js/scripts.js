let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.instagram.com/felipz.sn/';

a.setAttribute("href", link);

console.log(a.getAttribute('href'));