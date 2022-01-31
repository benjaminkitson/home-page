const next = document.querySelector('.next.change');
const prev = document.querySelector('.prev.change');
const images = document.querySelectorAll('img');

console.log(next)

let n = images.length - 1
let i = 0
let nx
let pv

function assign() {
  nx = (i === n) ? 0 : i + 1
  pv = (i === 0) ? n : i - 1
}

next.addEventListener('mouseup', (e) => {
  e.preventDefault();
  i = (i === n) ? 0 : i + 1
  assign()
  console.log(pv, i, nx)
  // i = (i === 2) ? 0 : i + 1
  // images[i].classList.add('visible')
})
