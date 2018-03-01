exports.Suma = function(a,b){
    return a +b;
}

exports.Resta = function(a,b){
    return a - b;
}

exports.Multiplica = function(a,b){
    return a * b;
}

exports.Divide = function(a,b){
    if(b != 0){
    return a / b;
    }
    else {
        return "Error: Ingresa un divisor distinto de 0";
    }
}

exports.Raiz = function(a,b){
    var r1,r2;
    r1 = Math.sqrt(a);
    r2= Math.sqrt(b);
   
    return r1+" y "+r2;
}