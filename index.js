// Tenemos los siguientes usuarios:

let users = [
    {
        id: 1,
        userName: 'julito_lo+',
        age: 28,
        maritalStatus: 'soltero'
    },
    {
        id: 2,
        userName: 'carlita_',
        age: 17,
        maritalStatus: 'soltero'
    },
    {
        id: 3,
        userName: '_stefano',
        age: 42,
        maritalStatus: 'casado'
    },
    {
        id: 4,
        userName: 'estebanquito',
        age: 24,
        maritalStatus: 'soltero'
    },
    {
        id: 5,
        userName: 'sergio12',
        age: 50,
        maritalStatus: 'viudo'
    },
    {
        id: 6,
        userName: 'tefi__',
        age: 20,
        maritalStatus: 'soltero'
    },
    {
        id: 7,
        userName: 'casandra_s',
        age: 28,
        maritalStatus: 'casado'
    },
    {
        id: 8,
        userName: 'elDylan',
        age: 15,
        maritalStatus: 'soltero'
    },
    {
        id: 9,
        userName: 'tu_vieja',
        age: 22,
        maritalStatus: 'soltero'
    }
]

// Agregar un nuevo usuario que contenga
// tus datos:
// * El id deberá ser 10
// Completa con tu userName, age y maritalStatus: soltero/viudo/casado
// Para el mismo, es una buena idea utilizar el spread operator
// que aprendimos en clases


users = [
    ...users
,{
id: 10,
userName: 'Cristiaanrueda',
age: 22,
maritalStatus: 'soltero'}]

// console.log(users)

// ----------------------------------------------------------- 

// Validar qué usuarios son mayores de edad
// y quiénes menores de edad.
// Para ellos, podremos utilizar una declaración de comparación
// según vimos en clases.
// Aprovecharemos la oportunidad para armar
// una lista con los mayores y otra con los menores.

// Pequeña ayuda: Necesitamos utilizar una declaración
// for para iterar, e if/else para validar las edades.


let adults = [];
let minors = [];

for (let i = 0; i < users.length; i++) {
    if(users[i].age >= 18){
        adults.push(users[i])
    }else{
        minors.push(users[i])
    }    
}


console.log(minors)

// ------------------------------------------------------------

// Con la lista de adultos, vamos a hacer sub-listas para 
// desagregar a los solteros/viudos/casados

// Pequeña ayuda: vamos a necesitar una declaración for para
// iterar, y una switch para delimitar las opciones

let married = [];
let singles = [];
let widowers = [];

for (let i = 0; i < adults.length; i++) {
    switch (adults[i].maritalStatus) {
        case 'soltero':
            singles.push(adults[i])
            break;
        case 'viudo':
            widowers.push(adults[i])
            break;
        case 'casado':
            married.push(adults[i])
            break;
    }
}

console.log(widowers);

// ¿Cuántos usuarios son mayores y solteros?
// console.log(`Hay ${} solteros.`)

console.log(`Hay ${singles.length} solteros`) 

// ¿Cuántos usuarios son mayores y casados?

console.log(`Hay ${married.length} casados`) 

// ¿Cuántos usuarios son mayores y viudos?

console.log(`Hay ${widowers.length} viudos`) 

// ------------------------------------------------------------

// Declarar una función capaz de recibir una lista
// de usuarios, y devolverme una nuesta lista
// sólo con sus userName

// Acordate de llamarla y pasarle la lista de usuarios
// para chequear que funciona. 

let list = [];


//esto podia hacerlo tmbn con filter y 2 args.
const listaUsuarios = (userList) => {
for (let index = 0; index < userList.length; index++) {
    list.push(userList[index].userName)
}
return list

}

console.log(listaUsuarios(married))



// -------------------------------------------------------------

// BONUS PARA LES OSADES:

// ¿Te animás a que el atributo agrupador sea dinámico?
// Es decir, que desde los argumentos yo le diga
// a la función a partir de qué atributo (userName, age, maritalStatus)
// creará una nueva lista. 

// En la función anterior lo hacíamos desde userName. 
// ¿Cómo podríamos hacer que eso sea dinámico?

// Recuerden: para reutilizar la función, 
// deberemos "limpiar" la lista en donde
// almacena sus valores




let dynamicList = [];
let maritalStatus = 'maritalStatus'
let userName = 'userName'
let age = 'age'

//dos argumentos. primero el arr segundo el atributo a agrupar
//A partir del largo de mi arr. el attr es age agrupalo por ese
//si es userName, agrupalo por ese, sino por maritalstatus
//Podria ser un for + swtich?

const listaUsuariosDinamica = (userList, atributo) =>{
    for (let index = 0; index < userList.length; index++) {
        switch (atributo) {
            case 'userName':
               dynamicList.push(userList[index].userName)
               break;
            case 'maritalStatus':
               dynamicList.push(userList[index].maritalStatus)
               break;   
            case 'age':
               dynamicList.push(userList[index].age)
               break;   
        }
    }
    return dynamicList
}


console.log(listaUsuariosDinamica(singles, userName))