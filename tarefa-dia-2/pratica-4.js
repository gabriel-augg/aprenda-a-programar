/* Prática 4: Resolvendo mais problemas com programação
Um cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e se ele é internacional ou nacional, mas não calcula os impostos.

Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.

Base de dados que o cliente passou para você: */






let produtoA = { nome: "Camiseta", valor: 100.00, internacional: true };
let produtoB = { nome: "Perfume", valor: 200.00, internacional: true };
let produtoC = { nome: "Sandália", valor: 120.00, internacional: false };

if (produtoA.internacional == true) {
    console.log(`${produtoA.nome} internacional, custando ${produtoA.valor+produtoA.valor*20/100} com impostos.`)
} else {
    console.log(`${produtoA.nome} nacional, custando ${produtoA.valor+produtoA.valor*12/100} com impostos.`)
}

if (produtoB.internacional == true) {
    console.log(`${produtoB.nome} internacional, custando ${produtoB.valor+produtoB.valor*20/100} com impostos.`)
} else {
    console.log(`${produtoB.nome} nacional, custando ${produtoB.valor+produtoB.valor*12/100} com impostos.`)
}

if (produtoC.internacional == true) {
    console.log(`${produtoC.nome} ${produtoC.valor+produtoC.valor*20/100} com impostos.`)
} else {
    console.log(`${produtoC.nome} nacional, custando ${produtoC.valor+produtoC.valor*12/100} com impostos.`)
}

