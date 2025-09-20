const url = new URL('https://example.com/api?x=10&y=test');

let x = url.searchParams.get('x');
let y = url.searchParams.get('y');

console.log(x); // '10'
console.log(y); // 'test'
