const wordArray = document.getElementById('content');

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newWPM = parseInt(event.target[0].value);

  setState(newWPM);
});


function readTime(args) {
  return Math.round(getMean());

  function getMean() {
    return wordArray.innerHTML.length / args;
  }
}

function setState(args) {
  document.getElementById('readTime').innerHTML = readTime(args || 230);
}

setState();
