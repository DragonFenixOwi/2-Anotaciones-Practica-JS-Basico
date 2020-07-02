/* 
    ----------------------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        PRIMEROS PASOS CON JAVASCRIPT 2020 
    ----------------------------------------------------------
*/



/*
    Comandos iniciales git
        git clone https://github.com/PalmaActiva-2020-JS/Plantilla_Front_2020.git
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
    -------------------------
        TIPOS DE DATOS
    -------------------------
*/

/* 
    --------------------------------
        VAR - VARIABLES Y  VALORES 
    --------------------------------
*/


//VALOR  NÚMERO 
var numero = 10;

/* 
    - Valor Texto (Strings)
        - Da igual si son comiilas dobles "" o comillas simples ''. Mientras no se cruzen.
    - En HTML es "obligatorio" las comillas dobles "". Mientras que en JavaScript las simples ''
*/
var numero = 'owilapesada';  


//VALOR BOOLEANOS  
var verdadero = true; 
var falso = false;



/* 
    - VALORES TIPO OBJETO
        1ro. -  Lista o ARRAY o Arreglo. 
        2do. -  Objeto. 
*/ 

// ARRAY
var lista_array_arreglo = [23,45,12,89,90];

// OBJETO
var objeto = 
    {
        nombre: 'Toni',
        ciudad: 'Llumajor',
        cp: 07620
    }



/* 
    - CARACTER ESPECIALES 
        - Los mas utilizados son 
            - \n   (Salto de línea) 
            - \t   (Tabulador)
*/
'primera linea \n segunda linea \n'


/* 
    - Visualizar datos Strings que contentan comillas.
        - "1ra comilla   - "2da Comilla"  -  1ra comilla " 
    - Se llama  CARACTER DE ESCAPE    
*/
    
var parrafo = "Libro de \"Autor\" de 1988";
console.log(parrafo);


var disco_duro = "c:\\escritorio";






/*************************************************************************************************************/

/* 
    ----------------------
        FUNCIONES
    ----------------------
*/



/*
    - Dos tipos 
        - FUNCIONES DECLARATIVAS
            # Palabras reservadas. Por ejemplo : function
        - FUNCIONES EXPRESIVAS
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










/*************************************************************************************************************/
/* 
    ----------------------------
        SCOPE GLOBAL Y LOCAL
    ----------------------------
*/



/*
    SCOPE
        - Es un tipo de esparamo
        - El scope puede definirse como el alcance que una variable tendrá en tu código.
        - En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código
        - Desde LOCAL se puede acceder a GLOBLA, pero no viceversa

        - Dos Tipos   
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








/********************************************************************************************************************/

/* 
    -----------------
        HOISTING
    -----------------
*/

/*
    Hosting
    -------------------
        - El Hosting existe en las Variables y en las funciones.
        - El hosting es el problema. Si realmente haceis unas buenas practicas, cuando generais un proyecto
            - La Buena Practica es que las "variables globales y las funciones" todas estas, cuando se generen
            - Repito "se generen" no "se llamen", cuando "se generen". Esten siempre en la parte superior de la parte
            superior de la linea de código, no vais a tener problema con el Hoisting. 
        - Pero si esto no se controla. 
            - Por ejemplo,  en el caso de una "variable". Digamos que las variables se tienen que declarar antes de 
            ser utilizadas. 
            - Es decir, si yo cometo el error de hacer esto
                - hacer un console.log(pueblo) primero 
                - y despues declaro la variable. 
                - ESTO se llama hoisting 
        - Ocurre cuando no se realizan buenas practicas.
*/


// EJEMPLO DE HOISTING


// console.log de pueblo antes de la declaration variable
console.log(pueblo);

// Variable declarada despues de la impresión visual por consola.
var pueblo = 'Algaida';


/*
    - Imprimir un console.log(puebloo) y luego declarar la variable pueblo. 
        - ESTO ES UN HOISTING. 
    - ¿Pero que hace realmente nuestro navegador cuando se encuentra con esto?
        - Lo que hace nuestro navegador 
    - Al copiar y pegar el ejemplo de arriba en el navegador nos sale los "undefined"
        - Es decir no esta definidos. No existe
    - ¿ Pero porque hace esto ?
        - Primero, "console.log()" cuando encuentra una variable.
            - Cuidado con esto. Cuando encuentra una variable que no la han declarado.
            - Coge esa variable y le asigna el "undefined"
        var pueblo = "undefined"; 
    - 
 */

// ASIGNACIÓN DEL NAVEGADOR 
var pueblo = "undefined"; 




// Pero si hacemos esto 
console.log(pueblo);          // El navegador asigna "undefined" a pueblo. Y eso es lo que se ve

var pueblo = 'Algaida';
console.log(pueblo);          // Pero despues, al asignarle "Algaida". Ya se ve ese valor string. 



/*
    - Cuando nos encontramos con este caso de HOISTING. Esto es por una mala practica.
    - Esto no deberia hacerse nunca. 
    - ¿Por que se produce este Hoisting?
        - Por error. Que ha metido sin darse cuenta una variable.
    - Cuando ocurre este caso de Hoisting. Suele pasar dos cosas 
        - Primero el "error"
        - Y segundo que empiezas a buscar la variable en el buscador. 
    - Por eso las variables. Se define al iniciar. 
*/







/* 
    -------------------------------------------------------
        ESTRUCTURA PARA EVITAR INCURRIR EN EL HOISTING
    -------------------------------------------------------
*/




/* 
    ---------------------------
        VARIABLES GLOBALES
    ---------------------------
*/
var ciudad = 'palma';
var pueblo = 'Algaida';



/* 
    --------------------
        FUNCIONES
    --------------------
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










/********************************************************************************************************************/

/* 
    -----------------------
        DÉBIL TIPADO 
    -----------------------
*/




10 + "10";
//"1010"         - Resultado

/*
    - ¿Que ocurre aqui?
        - Pues, es imposible sumar un "número" y un "string". Por lo que 
        - Utiliza el simbolo "+" para concatener.
        - Por eso, el resultado no es un numero. 
    - Esa "suma" de números que no lo es. Ese simbolo nos sirve para "acercar estos dos numeros"
        - La "suma" es una concatenación.
        - Ha convertido el número "10" que en teoria se quiere sumar. Lo convierte en un texto o strings
        - No se suma, se concatena 
*/


10 * "10";
//100          - Resultado


/*
    - Número 10 y string "10" . Entonces  
    - Mientras que cuando ve un multiplicador. Que solo sirve para eso, para "multiplicar"
    - Es lo que hace es. Mira. Esta claro que no me quiere multiplicar. Pues entonces, lo voy a multiplicar
    de verdad.
    - 
*/



/* 
    - Cosas raras que hace JavaScript. Que si no sabes te puedes quedar un poco loco.
        - O que te has equivocado pero  te hace la multipliación O algo raro.
    - Y ese  DEBIL TIPADO es  aaui donde funciona. Lo hemos hecho "mal" pero lo esta haciendo. 
    - No debiera haber multiplicado, pero lo hace
*/





/* true = 1    JavaScript lo suma*/
10 + true;
//11            - Resultado



/*
    - Hay otros lenguajes que le pongais algo que no esta especifico. Que se tiene que hacer de esta manera.
        - No lo va a hacer. No va a buscar otro camino para hacer algo. 
        - Sino que va a implantar un pedazo de error enorme en pantalla o en consola o en donde sea.
        - Y van a quedar ahi quietos, hasta que se resuelva eso. 
        - Eso se llama FUERTE TIPADO

*/












/*******************************************************************************************************************/


/* 
    -------------------------------
        COERCIÓN EN JAVASCRIPT
    -------------------------------
*/


/*
    - La coerción se podria definir como la acción de forzar un "valor"
        - A que se comporte como "otro" tipo de "valor"
*/


/*
    - HAY DOS TIPOS DE COERCIÓN
        - Coerciones Implicitas :   las que JavaScript genera por si solo.
        - Coerciones Explicitas :   que son las que nosotros las obligamos. Porque necesitamos que trabajen 
                                    de esa manera 
*/




// COERCIÓN IMPLICITA 
var implicita = 10 + "10";

/*
    - Al crear unas variables con las operaciones de  10(número) + "10"(string). 
    - Donde sabemos que el resultado es  1010 
    - Aqui ocurre una Coerción Implicita. 
    - ¿Qué ha hecho él realmente?
        - Ha codigo ese valor primero de 10 y lo ha convertido en un strings.
        - Hemos pasado de un "número" a un "string" 
    - Ha re-convertido un valor para conseguir algo. Y eso lo hace de manera automática
    - Y no importa que ponga otro caso de arriba por ejemplo el de multiplicar
        - Que tambien. Elimina el string del segundo 10 y lo convierte en un número 
        para poderlo multiplicar. 
    -  Y a esto se le llamada "Coerción Implicita"
        - El transforma valores. Para conseguir ese debil tipado. 
*/

//COERCIÓN EXPLICITA 
var explicito = 10 + Number("10");
// 20

/*
    - ¿Qué es un Number? 
        - Es una función creada por JavaScript. Lo mismo que vosotros creais Funciones.
        - Hay Funciones creadas ya de antemano. 
    - Esta función "Number" no la puedes utilizar porque es una "palabra Reservada"
    - Ademas ya la ha creado JavaScript 

    - Nosotros, a través de Number, obligamos a ese string a convertirse en un número. 
    - Ahora mismo ese string "10" no era un número, era una palabra. Por mucho que haya un 1 y un 0
        -Era una palabra. 
    - 
*/



var explicito = String(10) + "10";
// "10" + "10"
// "1010"
/*
    - Tenemos la opción a la inversa. 
    - Las letras mayusculas "S" de String y "N" de Number son obligatorias.
    - Se modifica el número 10 a string.
 */ 



/*
    - Es importante la Coerción Explicita. Y lo explico con el siguiente ejemplo.
        - Imaginad que estay en un formulario en una web. 
        - Y la gente va poniendo sus datos. La edad, el teléfono, x-Cosas.
    - Pare que sepan. Cada vez que le piden el teléfono  o cualquier dato númerico.
        -El "imput" que recoge esa información a través de HTML. La convierte todas a String.
    - Vale, con el número de teléfono "No". Pero igual con la edad 
        - Yo quiero coger esas edad. Y la quiero convertir en un número. 
        - Para poder trabajar. En que año nació. Porque yo con una resta muy simple sabre en que año nacio.
    - Pero para hacer esto.  Necesito una Coersión explicita  de ese dato. Para poder elevaorar una resta.  
*/





/*******************************************************************************************************************/



/* 
    -----------------
        BOOLEANOS
    -----------------
*/


/*
    - ¿Qué se considera un valor FALSO y que se consifera un valor  VERDADERO dentro de los BOOLEANOS?
*/


Boolean(false);


/*
    # Return falso (me retorna falso)
        - Datos que directamente son Falsos 
            - false
            - 0 
            - Undefined
            - " "                   un dato vacío es Falso 
            - Null                  
            - NaN                   No es un número. Tambien es falso. 
        - Datos númericos
            - 3>10                  3 No es mayor a 10. Esto tambien es falso

    - Si en algun momento tenes alguna duda. Cogeis la función boolean y él los va a decir

    # True 
        - []                    Cualquier inicio de un array es verdadero
        - {}                    Cualquier objeto es verdadero
        - 1 
        - 2,3,4                 todos los numero que no son cero 
        - Function () {}        una funcion es verdadero
* /

/*
    OPERADORES BÁSICAS
        +                   Tiene dos funciones. Con números "suma" y con String "une-concatena"
        -
        *
        /
        %                   Operadore de Resto. 
*/


/*
    OPERADORES DE IGUALDAD 
        =                       Operador de Asignación.
        ==                      Operador de Comparación. No mira el tipo de valor
        ===                     Operador de Comparación. Estrictamente iguales. Mira el valor, como el tipo de valor
    OPERADOR DE DESIGUALDAD
        =!
*/

//=
var nombre = 'asignamos a nombre'

// == 
5 == '5'       // No compara el tipo 
//true            Nos sale tre. ¿por qué? Porque el "doble igual" no mira el tipo de valor. Solo mira el valor

// ===
5 === "5";      // Compara el tipo y el contenido
// False           Mira el valor como el tipo de valor.  

// !=
5 != 5;             // Todo lo que asignemos una exclamación hacia abajo "!". Le asignamos un "no"
//false



/*
    OPERADORES DE ASIGNACIÓN 
        =
        +=
        *=
        -=
        /=
*/



// OPERADORES DE ASIGNACIÓN. CASO "+="
var numero = 10;
numero = numero + 1;    //11
numero +=1;             //12        Aqui podemos modificar el valor sumado. Por ejemplo en vez de 1 puede ser 5.
numero++;               //13        Aqui siempre le sumamos 1 
numero--;               //12        Aqui siemper le restamos 1  
/* 
    OPERADORES DE COMPARACIÓN 
    >
    <
    >=              //El igual siempre se pone despues
    <=
*/

//  ">"
5 > 10; //false

//  "<"
5 < 10;  //true

// ">="
5 >= 5;   //true

// "<="
5 <= 5;//true