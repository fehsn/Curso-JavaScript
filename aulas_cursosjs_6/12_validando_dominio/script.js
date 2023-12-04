const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.facebook.com"));
console.log(validaDominio.test("www.horadecodar.com.br"));
console.log(validaDominio.test("www.facebook"));~
console.log(validaDominio.test("facebook.site"));~
