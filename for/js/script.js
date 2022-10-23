//lista spesa for

const listaSpesa = [
  `uova`,
  `farina`,
  `zucchero`,
  `pane`,
  `pasta`,
  `mozzarella`,
  `prosciutto`,
  `mele`,
  `pere`,
];

let output = document.getElementById(`lista`);

for (i = 0; i < listaSpesa.length; i++) {
  output.innerHTML += `<li>${listaSpesa[i]}</li>`
}