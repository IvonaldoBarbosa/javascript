let valores = [0,1,7,2,4,9]
valores.sort()

//console.log(valores)
/*for (let pos= 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}