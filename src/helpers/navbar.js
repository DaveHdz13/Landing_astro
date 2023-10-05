const list = document.getElementById("navList")
const childrenArray = Array.from(list.children)
const burguer = document.getElementById("menu-burguer")
const burguerClose = document.getElementById("menu-burguer-close")

childrenArray.forEach(child => {
  child.addEventListener("click", () => {
    console.log("click");
  })
});

// Burguer menu
burguer.addEventListener("click", () => {
  burguer.classList.add('hidden')
  burguerClose.classList.remove('hidden')

  childrenArray.forEach(child => {
    child.classList.remove('hidden')
  });
})

burguerClose.addEventListener("click", () => {
  burguer.classList.remove('hidden')
  burguerClose.classList.add('hidden')

  childrenArray.forEach(child => {
    child.classList.add('hidden')
  });
})