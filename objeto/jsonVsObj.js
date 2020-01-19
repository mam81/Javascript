const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(JSON.stringify(obj)) // stringify - convertendo em JSON
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 } ')) // os valores de 'a' 'b' e 'c' tem que ficar entre aspas duplas("")
console.log(JSON.parse('{ "a": 1.3, "b": "string", "c": true, "d": {}, "e": []  } ')) // parse - de JSON  para objeto
