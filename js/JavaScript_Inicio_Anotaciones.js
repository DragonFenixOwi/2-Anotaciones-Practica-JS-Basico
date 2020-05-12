//Comentarios de una sola linea

/* 
    Proyecto Básico
    -------------------
    Copyright Osvaldo Aquino
*/

/*
    Comandos iniciales git
        git clone
        git remote remove origin
        git remote –v
        git remote add origin https://github.com/DragonFenixOwi/
        git push -u origin master
        git status
            en rojo que hay que añadir
                modified:   css/estilos.css
                modified:   index.html
        git add 
            index.html  
            css/estilos.css
		Git status              
        git commit –m
        git push -u origin master
*/

/*
    Tipos de Datos
    -----------------------------
    'var' crear una variable
*/

//Valor número
var numero;

//Valor texto
var numero = 'owilapesada'

//valor booleanos 
var verdadero = true; 
var falso = false;

//valores tipo objeto
var lista_array_arreglo = [23,45,12,89,90];
var objeto = 
    {
        nombre: 'Toni',
        ciudad: 'Llumajor',
        cp: 07620
    }

'primera linea \n segunda linea \n'

//var parrafo = 'Libro de \"Autor\" de 1988";
// console.log(parrafo);


//var disco_duro = "c:\\escritorio";

/*
    Funciones
    -------------------
    Dos tipos 
        - Funciones Declarativas
            # Palabras reservadas. Por ejemplo : function
        - Funciones Expresivas
 */


//Funciones declarativas
function nuevaFuncion()
    {
        return 'Hola';
    }

//Funciones Expresivas
function nuevaFuncion()
    {
        return 'Hola';
    }

//llamar a una Función 
nuevaFucion();

// Funciones con parámetros
function suma(valor1,valor2)
    {
        console.log(valor1+valor2);
    }

var suma1 = suma(45,456)
var suma2 = suma(345,12)
var suma3 = suma(789,89)


// Funciones con parámetros
function resta(valor1,valor2)
    {
        var resultado = valor1 - valor2;
        console.log(valor1+valor2);
    }

// Funciones con parámetros
function suma(a,b)
    {
        console.log('El resultado de la suma es: ~{a+b}');
    } 
//`´

/*
    SCOPE
    -------------------
    Es un tipo de esparamo
        - El scope puede definirse como el alcance que una variable tendrá en tu código.
        -En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código
        - Desde LOCAL se puede acceder a GLOBLA, pero no viceversa
        - 
        Dos Tipos   
        -Scope Global
        -Scope local
*/

//Scope Global
var ciudad = 'Palma';
var cp =07010;


//Scope local
function entorno(valor1,valor2)
    {
        var cp = 07010;
        console.log(cp + " " + ciudad);
    }

valor + 4;


/*
    Hosting
    -------------------
        - Ocurre cuando no se realizan buenas practicas 
        - Buenas practicas las variables globales y las fuciones se generen 
        - Esten siempre a la parte superior de las lineas de codigo no van a 
        tener problemas con el hoisting.

*/

//variable declaration parámetros
console.log(pueblo);

//var pueblo = 'Algaida';

/*
    Variables Globales
    -------------------
*/
var ciudad = 'palma';

/*
    Funciones
    ------------------
*/

function suma(a,b) 
    {

    }
    function resta(a,b) 
    {
        
    }
    function multi(a,b) 
    {
        
    }

//Debil Tipado
10+ "10";
//1010
10* "10";
//100
10 + true;
//11


/*
    Coerción en JavaScript
    -----------------------
*/

//Coerción implicita
var implicita = 10 +"10";

//Coerción Explicita
var explicito = 10 + Number("10");
// 20

var explicito = String(10) + "10";
// "10" + "10"
// "1010"


/*
    Boolean
        # Return falso (me retorna falso)
            - 0 
            - Undefined
            - " "                   un string vacio 
            - Null
            - NaN
            - 3>10

        # True 
            - []                    cualquier inicio de un array es verdadero
            - 1 
            - 2,3,4                 todos los numero que no son cero 
            - Function () {}        una funcion es verdadero

* /

/*
    Operadores
        +
        -
        *
        /
        %
*/


/*
    Operadores de igualdad 
        =
        ==
        ===
    Operador de desigualdad
        =!
*/

//=
var nombre = 'asignamos a nombre'

// == 
5 == '5'       // No compara el tipo 
//true

// ===
5 === "5";      //Compara el tipo y el contenido
// true

// !=
5 != 5;  
//false



/*
    Operadores de asignación 
        =
        +=
        *=
        -=
        /=
*/

//  "+="
var numero = 10;
numero = numero + 5; //11
numero +=1; //12    Aqui podemos modificar el valor sumado
numero++; //13      Aqui siempre le sumamos 1 
numero--;  //12     Aqui siemper le restamos 1  

/* 
    Operadores de Comparación 
    >
    <
    >=
    <=
*/

//  ">"
5 > 10; //false

//  "<"
5 > 10;  //true

// ">="
5 >= 5;   //true

// "<="
5 <= 5;//true
