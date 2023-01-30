//DECLARACION DE VARIABLE Y DATOS//

let extincionDinosaurio: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos = true

let MiVariable
MiVariable= "Chanchito feliz"
MiVariable= 42

//extintos = 42  Esto dara error//

function chanchitofeliz(config:string){
    return config
}

//ARRAY//

let animales: string [] = ["chanchito", "feliz", "felipe"]
let nums: number [] = [1,2,3]
let checks: boolean [] = []
let nums2: Array<number> =[] //**Alternativo */

//nums.map(x=> x.) //**el autocompletado sugiere metodos del tipo de datos*/

//TUPLAS//
let tuplas1: [number, string, number] = [1,"chanchito feliz",3]
let tuplas:[number, string []]=[2,["chanchito feliz", "chanchito felipe"]]

//ENUMS//

//Sin usar los enums//
const chica = "s"
const mediana = "m"
const grande= "l"
const extraGrande = "xl"

//resolviendolo con enums// //PascalCAse
enum Talla {chica = "s", mediana = "m", grande = "g", extraGrande = "xl"} 
const variable1=Talla.grande
console.log(variable1)

const enum LoadingState {Idle, Loading, Success, Error}

//OBJETO//

const objeto : { 
    readonly id: number,
    nombre: string,
    talla: Talla,
} = {id:1, nombre: "Gilberto Rodriguez", talla: Talla.chica }