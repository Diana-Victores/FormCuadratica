
let raiz1, raiz2;
let a = prompt ("Ingrese el primer numero: ");
let b = prompt ("Ingrese el segundo numero: ");
let c = prompt ("Ingrese el tercero numero: ");

let discriminante = (b * b) - (4 * a * c);



 if (discriminante > 0) {
    raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    
    
    document.write(`La raiz cuadratica de la ecuacion seria: ${raiz1} y ${raiz2} `);
    
    } 
     else if (discriminante == 0){
        raiz1 = raiz2 = -b / (2 * a);
        document.write(`La raiz cuadratica de la ecuacion seria: ${raiz1} y ${raiz2} `);
      

    }
    else   { //si la raiz no es real

        let parteReal = (-b / 2 * a).toFixed(2);
        let parteImaginaria = (Math.sqrt(-discriminante)/(2 * a)).toFixed(2);
        document.write(`La raiz cuadratica de la ecuacion seria: ${parteReal} + ${parteImaginaria}i y ${parteReal} - ${parteImaginaria} `);
      
}		

    
    
   

/*GRAFICA*/
document.querySelector(".addParam").addEventListener("click",addParam);
document.querySelector(".showResults").addEventListener("click",showResults);

var parametros = [];
var valores = [];

function addParam(){
    let html = document.querySelector(".container").innerHTML;
    let newHTML = '<div><input type="text" class="parametro" placeholder="parametro"><input type="number" class="valor" placeholder="valor"></div>'; 
    document.querySelector(".container").innerHTML = html + newHTML;
} 


function showResults(){
    for (var i = 0; i < document.querySelectorAll('.parametro').length ; i++) {
      parametros.push(document.querySelectorAll('.parametro')[i].value);
      valores.push(parseInt(document.querySelectorAll(".valor")[i].value));
    }
    var data = [{
      x: parametros,
      y: valores,
      type: "linear"
    }];
    Plotly.newPlot("grafico",data);
}