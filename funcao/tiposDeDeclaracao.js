console.log(soma(3, 4)) // funciona pq no JS é carregado as funcoes primeiramente e na linha 1 ja esta com as funcoes ja definidas - no caso de function declaration(nao pega para function expression ou named function expression)

//console.log(sub(3, 4))
//console.log(mult(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}