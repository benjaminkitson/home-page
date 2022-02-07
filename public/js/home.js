const BODY = document.querySelector('body')

window.addEventListener("load", () => {
  setTimeout(() => {
    console.log("hello")
    BODY.style.opacity = "1"
  }, 1000)
})
