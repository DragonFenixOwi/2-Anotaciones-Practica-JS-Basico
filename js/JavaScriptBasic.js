/* 
    ----------------------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        PRIMEROS PASOS CON JAVASCRIPT 2020 
    ----------------------------------------------------------
*/
/*
    ---------------------------
        VARIABLES GLOBALES
    ---------------------------
*/

//Resultado de tipos de Datos
var r1= "Resultado de tipos de datos: numero, texto, true, false, array"

// Variables de Funciones
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;

// Variables llamada de funciones
var r2="Resultado de las Funciones: suma, resta, multiplicacion"
var resul_suma = 0;
var resul_resta = 0;
var resul_multi = 0;

//Resultado de Debil Tipado
var r3 = "Resultado de Debil tipado"
var resul_Debil1 = 0;
var resul_Debil2 = 0;
var resul_Debil3 = 0;


var r4 = "Resultado de Coerción"
//Coerción implicita
var implicita = 0;

//Coerción Explicita
var explicito = 0;

var explicito_2 = 0;






/*
    -------------------------
        TIPOS DE DATOS
    -------------------------
*/


//Valor número
var numero = 2;


//Valor texto
var texto = 'owilapesada'


//valor booleanos 
var verdadero = true; 
var falso = false;

//Resultado de Tipos de datos
// alert(texto +  "  " + verdadero +  "  " + numero);



//valores tipo objeto
var array= [3,2,3,,9,9,9];
var objeto = 
    {
        nombre: 'Owi',
        ciudad: 'Palma',
        Codigo: 73
    }

// Resultado: numero, texto, true, false, array
//alert(r1 +  "  " + "\n" + numero +  "  " + "\n" + texto + "\n" +  "  " + verdadero  + "\n" +   "  " + falso + "\n" +   "  " + array);






/*
    --------------------
        FUNCIONES
    --------------------
*/


function suma(a,b) 
    {
        // variable LOCAL
        var r_1 = a+b;
        return(r_1);
    }

function resta(c,d) 
    {
        var r_2 = c-d;
        return(r_2);
    }

function multi(e,f) 
    {
        var r_3 = e*f;
        return(r_3);
    }



// Llamada de Funciones
resul_suma = suma(10,5);
resul_resta = resta(10,5);
resul_multi = multi(10,5);

// alert(r2+"  "+ "\n" + resul_suma +  "  " + "\n" + resul_resta +  "  " + "\n" + resul_multi);





/*
    --------------------
        DEBIL TIPADO
    --------------------
*/


/*
    Teoria practica
        10+ "10";    ---> Resultado:  1010
        10* "10";    ---> Resultado:  100
        10 + true;    ---> Resultado: 11    
    
*/

resul_Debil1 = suma(10,"10");
resul_Debil2 = multi(10,"10");
resul_Debil3 = suma(10, true);

//alert(r3+"  "+ "\n" + resul_Debil1 +  "  " + "\n" + resul_Debil2 +  "  " + "\n" + resul_Debil3);






/*
    -------------------------
        COERCIÓN EN JAVASCRIPT
    -------------------------
*/


/*
    - Coerción en JavaScript
        - Explicito- Forzamos a que realiza una correcta operaciñón    
            - explicito = 20
            - explicito_2 = 1010
        
    
*/

//Coerción implicita
implicita = 10 +"10";

//Coerción Explicita
explicito = 10 + Number("10");

explicito_2 = String(10) + "10";

alert(r4+"  "+ "\n" + "Implicita" + "  " +  implicita +  "  " + "\n" + "Forzamos" + "  " +   explicito +  "  " + "\n" + explicito_2);


