var calculator = require("./calc");
var http = require("http");
var url = require("url");

console.log("Server up, listen on port 8080");

http.createServer(function(req, res){    
    var q = url.parse(req.url, true).query;
    res.writeHead(200, "{Content-type: 'text/html' }");

    if(q.Operacion === "S" || q.Operacion === "s") {
        res.end("Suma: " + q.numeroA + " + "+q.numeroB+ " = " + calculator.Suma(parseInt(q.numeroA), parseInt(q.numeroB)));
    } else if (q.Operacion ==="R" || q.Operacion === "r"){
        res.end("Resta: " + q.numeroA + " - "+q.numeroB+ " = " +calculator.Resta(parseInt(q.numeroA), parseInt(q.numeroB)));
    } else if (q.Operacion ==="M" || q.Operacion === "m"){
        res.end("Multiplicación: " + q.numeroA + " * "+q.numeroB+ " = " +calculator.Multiplica(parseInt(q.numeroA), parseInt(q.numeroB)));
    } else if (q.Operacion ==="D" || q.Operacion === "d"){
        res.end("División: " + q.numeroA + " / "+q.numeroB+ " = " +calculator.Divide(parseInt(q.numeroA), parseInt(q.numeroB)));
    } else if (q.Operacion ==="RC" || q.Operacion === "rc"){
        res.end("Raíz: " + q.numeroA + " y  "+q.numeroB+ " = " +calculator.Raiz(parseInt(q.numeroA), parseInt(q.numeroB)));
    } else{
        res.end("Operador no existe, utilice S,R,M,D o RC");
    }
    
}).listen(8080);
