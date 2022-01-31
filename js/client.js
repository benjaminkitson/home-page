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
  images[nx].classList.add('nx')
  images[pv].classList.add('pv')
}

assign()

next.addEventListener('mouseup', (e) => {
  e.preventDefault();
  const center = images[i];
  const right = images[nx];
  const left = images[pv];

  // center.addEventListener('transitionend', () => {
  //   center.classList.remove('visible')
  // })

  left.classList.add('visible')
  center.classList.add('move-right')
  right.classList.remove('nx');
  left.classList.remove('pv');
  setTimeout(() => {
    center.classList.remove('visible');
    i = (i === n) ? 0 : i + 1;
    images[i].classList.add('visible')
    assign();
  }, 600);


})
