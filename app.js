const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  setState(fetchCurrentWPM());
});

function fetchCurrentWPM(args) {
  const input = document.getElementById('input');

  const newWPM = parseInt(input.value || args);

  return newWPM;
}

function readTime(args) {
  return Math.round(getMean(args));
}

function getMean(args) {
  const wordArray = document.getElementById('content');

  return wordArray.value.split(' ').length / args;
}

function setState(args) {
  document.getElementById('readTime').innerHTML = readTime(args || 230);
  document.getElementById('currentWPM').innerHTML = fetchCurrentWPM(230);
}

setState();
