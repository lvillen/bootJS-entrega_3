// Calculando precios e IVAs de un producto
const product = {
    count: 3,
    price: 12.55,
    type: "ropa"
};

let total = product.count >= 0 ? product.count * product.price : total = 0;

let vat = 0;

switch (product.type) {
    case "libros":
        vat = total * 0.04;
        break;
    case "alimentación":
        vat = total * 0.1;
        break;
    default:
            vat = total * 0.21;
            break;
}

console.log("Subtotal: " + Math.round(total * 100) / 100 + " €")
console.log("Total: " + Math.round((total + vat) * 100) / 100 + " €")
console.log("IVA: " + Math.round(vat * 100) / 100 + " €")

//Aplicando funciones para el IVA
vat = 0
total = 0

function getTotal(product) {
    return total = product.count >= 0 ? product.count * product.price : total = 0;
}

function getVat(product) {
    switch (product.type) {
        case "libros":
            vat = 0.04;
            break;
        case "alimentación":
            vat = 0.1;
            break;
        default:
            vat = 0.21;
            break;
    }
    return product.price * vat;
}

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}

console.log("Probando la función para extraer el IVA tenemos que el IVA por unidad es: " + Math.round(getVat(product) * 100) / 100 + " €")
console.log("Probando la función para extraer el IVA tenemos que el IVA total es: " + Math.round(getTotalVat(product) * 100) / 100 + " €")

function printProductPrice(product) {
    const subtotal = Math.round(getTotal(product) * 100) / 100;
    const vat = Math.round(getTotalVat(product) * 100) / 100;
    const total = Math.round((subtotal + vat) * 100) / 100;

    console.log("Subtotal:", subtotal + " €");
    console.log("IVA:", vat + " €");
    console.log("Total:", total + " €");
}

printProductPrice(product)

//Calculadora de sueldos
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
};

let bruto = empleado.bruto;
let neto;
let retencion;

if (bruto <= 12000) {
    retencion = 0;
} else if (empleado.bruto > 12000 && empleado.bruto < 24000) {
    retencion = 8;
} else if (empleado.bruto > 24000 && empleado.bruto < 34000) {
    retencion = 16;
} else {
    retencion = 30;
}

if (empleado.hijos > 0 && bruto > 12000) {
    retencion = retencion - 2;
}

console.log("A su sueldo se le aplican unas retenciones del " + retencion + "%");

switch (retencion) {
    case 0:
        retencion = 0;
        break;
    case 6:
        retencion = bruto * 0.06;
        break;
    case 8:
        retencion = bruto * 0.08;
        break;
    case 14:
        retencion = bruto * 0.14;
        break;
    case 16:
        retencion = bruto * 0.16;
        break;
    case 28:
        retencion = bruto * 0.28;
        break;
    case 30:
        retencion = bruto * 0.3;
        break;
    default:
        console.log("No es una retención válida");
        break;
}

neto = bruto - retencion;

if (empleado.pagas === 14) {
    console.log("Número de pagas: " + empleado.pagas)
    console.log("Su sueldo bruto mensual es: " + Math.round((bruto / 14) * 100) / 100 + " €");
    console.log("Su sueldo neto mensual es: " + Math.round((neto / 14) * 100) / 100 + " €");
    console.log("La retención aplicada mensualmente es: " + Math.round((retencion / 14) * 100) / 100 + " €");
    console.log("Su sueldo bruto anual es: " + Math.round(bruto * 100) / 100 + " €");
    console.log("Su sueldo neto anual es: " + Math.round(neto * 100) / 100 + " €");
    console.log("La retención aplicada anualmente es: " + Math.round(retencion * 100) / 100 + " €");
} else {
    console.log("Su sueldo bruto mensual es: " + Math.round((bruto / 12) * 100) / 100 + " €");
    console.log("Su sueldo neto mensual es: " + Math.round((neto / 12) * 100) / 100 + " €");
    console.log("La retención aplicada mensualmente es: " + Math.round((retencion / 12) * 100) / 100 + " €");
    console.log("Su sueldo bruto anual es: " + Math.round(bruto * 100) / 100 + " €");
    console.log("Su sueldo neto anual es: " + Math.round(neto * 100) / 100 + " €");
    console.log("La retención aplicada anualmente es: " + Math.round(retencion * 100) / 100 + " €");
}