
 
function insert(num){
 var numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}
 
function back(){
var resultado = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
if(resultado)

{
    document.getElementById('resultado').innerHTML = eval(resultado);
}
 else {
    document.getElementById('resultado').innerHTML=' Digite!';
 }

 }


/*

//aqui é uma lista d Array
const produtos = [
   { id:1, nome:'detergente', valor:2.00 , categoria: 'limpeza' },
   { id:2, nome:'amaciante', valor: 6.50, categoria: 'limpeza'},
   { id:3, nome:'pao', valor:2.00 , categoria: 'alimento' },
   { id:4, nome:'queijo', valor:7.00 , categoria: 'alimento' },
   { id:5, nome:'leite', valor:2.20 , categoria: 'alimento' },
];

const ids= produtos.map(d=>d.nome,
    'alimento');
console.log(ids);






const s ={
    user: {
         id:1,
 fristName:'lo',
 lastName:'da silva'},

    i: [
        {
            p: {id: 1, n:'maçã'},
            q: 10,
        },
        {
            p: {id: 2, n:'laranja'},
            q: 1,
        },
    ]
}


function formatacao(s){
s.user.name =
`{s.user.fristName }${s} `
delete s.user.fristName;
delete s.user.lastName;

}

console.log(s.i);
formatacao(s);
*/
















