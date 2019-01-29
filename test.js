class A1 {
  constructor () {
    this.x = 1
  }
}

class B1 extends A1 {
  constructor () {
    super( )
    this.y = 2
  }
}

console.log(new B1().x)
