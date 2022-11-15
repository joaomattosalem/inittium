/* const trabalhosSlider = document.querySelector('.trabalhos-slider')

let touch = false
let startX = 0

trabalhosSlider.addEventListener('mousedown', function (e) {
  touch = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})
trabalhosSlider.addEventListener('mouseleave', function (e) {
  touch = false
})

window.addEventListener('mouseup', function (e) {
  touch = false
  trabalhosSlider.style.cursor = 'grab'
})
trabalhosSlider.addEventListener('mousemove', function (e) {
  if(!touch) {
    return
  }
  this.scrollLeft += startX - e.clientX
}) */