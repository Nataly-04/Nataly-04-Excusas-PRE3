window.onload = () => {
  let who = ['Mi gato', 'Mi novia', 'Mi madre', 'Mi hermano'];
  let action = ['rompió', 'se comió', 'vendió', 'lloró en'];
  let what = ['un vaso', 'mi teléfono', 'la cama'];
  let when = [
    'antes de la cena',
    'mientras dormía',
    'mientras estaba en el trabajo',
    'durante el almuerzo',
    'despues de año nuevo'
  ];

  let r = a => a[Math.floor(Math.random() * a.length)];
  document.getElementById('excuse').innerText = `${r(who)} ${r(action)} ${r(what)} ${r(when)}.`;
};