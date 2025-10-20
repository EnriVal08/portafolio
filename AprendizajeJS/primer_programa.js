/*function contar_aprobados(notas) {

    let numero_aprobados = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 5) {
            numero_aprobados++;
        }
    }    

    return numero_aprobados;
}
    
let notas = [5, 4, 6, 9, 10, 2];
console.log("Número de aprobados: " + contar_aprobados(notas));*/

const contarAprobados = (notas, umbral = 5) =>
  notas.filter((n) => n >= umbral).length;

const notas = [5, 4, 2, 9, 10, 2];
console.log("Número de aprobados: " + contarAprobados(notas));