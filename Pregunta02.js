function ordenarNumeros(lista) {
  let n = lista.length;

  for (let i = 0; i < n - 1;i++) {
    let indiceMenor = i;

    for (let j = i + 1; j < n; j++) {
      if (lista[j] < lista[indiceMenor]) {
        indiceMenor = j;
      }
    }

    if (indiceMenor !==i) {
      let temporal = lista[i];
      lista[i] = lista[indiceMenor];
      lista[indiceMenor] = temporal;
    }
  }

  return lista;
}

const numeros = [1, 5, 10, 258, 1, 0, 145];
const ordenados = ordenarNumeros(numeros);

console.log(ordenados);
