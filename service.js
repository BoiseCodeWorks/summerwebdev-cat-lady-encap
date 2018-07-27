function Service(){
  let cat = new Cat("Mr. Fluffy", "https://i2.wp.com/www.boredpotato.com/wp-content/uploads/2018/04/1523283792_323_this-cat-is-taking-over-the-internet-with-his-hilarious-facial-expressions-despite-his-problem.jpg?ssl=1", 20, "Toothy")

  function Cat(name, image, age, temperament){
    this.name = name
    this.image = image
    this.age = age
    this.maxage = age
    this.temperament = temperament
  }

  this.getCat = function(){
    return new Cat(cat.name, cat.image, cat.age, cat.temperament)
  }

  this.reset = function(){
    cat.age = cat.maxage
  }

  this.pet = function(){
    cat.age++
  }

}