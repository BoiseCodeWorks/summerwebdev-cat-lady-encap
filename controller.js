function Controller() {
  let service = new Service()

  function update() {
    let cat = service.getCat()
    let catElem = document.getElementById("cat")
    let template = `
      <h1>${cat.name}</h1>
      <img class="border-rad" src="${cat.image}" alt="">
      <h3>Age: <span class="red">${cat.age}</span></h3>
      <h3>Mood: ${cat.temperament}</h3>
      <button onclick="app.controller.pet()">Pet</button>
      <button onclick="app.controller.reset()">Reset</button>
    `
    catElem.innerHTML = template
  }

  this.reset = function(){
    service.reset()
    update()
  }

  this.pet = function () {
    service.pet()
    update()
  }

  update()
}