function firstChallenge(gasValue, gasEficience, distance) {
  let litersNecessary = gasValue * distance
  let totalCost = litersNecessary / gasEficience
  /* THe toFixed takes the value given to dertemine how many numbers are going to show afiter the "."*/
  console.log(totalCost.toFixed(2))
}

// firstChallenge(5.79, 11.3, 1580)

function firstChallenge(
  gasValue,
  ethanolValue,
  gasEficience,
  distance,
  combustibleType
) {
  const litersNecessary = distance / gasEficience
  if (combustibleType === 'ethanol') {
    let totalCost = litersNecessary * ethanolValue
    console.log(totalCost.toFixed(2))
  } else if (combustibleType === 'gas') {
    let totalCost = litersNecessary * gasValue

    console.log(totalCost.toFixed(2))
  } else {
    console.log('invalid combustible type')
  }
}

//firstChallenge(5.79, 3.4, 11.3, 1580, 'ethanol')

function evarage(notaA, notaB, notaC) {
  let evarageGrade = (notaA + notaB + notaC) / 3
  if (evarageGrade < 5) {
    console.log('reproved')
  } else if (evarageGrade < 8) {
    console.log('recovery')
  } else {
    console.log('approved')
  }
}

// evarage(10, 10, 7)

function IMC(weight, height) {
  // pow is power of, so height to the second power
  let imc = weight / Math.pow(height, 2)
  let status = ''
  if (imc < 18.5) {
    status = 'Abaixo do peso'
  } else if (imc >= 18.5 && imc < 25) {
    status = 'Peso normal'
  } else if (imc >= 25 && imc < 30) {
    status = 'Acima do peso'
  } else if (imc >= 30 && imc < 40) {
    status = 'Obeso'
  } else if (imc >= 40) {
    status = 'Obesidade grave'
  }
  return status
}

// IMC(118, 1.68)

function desconto(valor, percentual) {
  return valor * (1 - percentual / 100)
}

function valueToPay(option, valor) {
  if (option === 1) {
    console.log('Pague  ' + desconto(valor, 10))
  } else if (option === 2) {
    console.log('Pague  ' + desconto(valor, 15))
  } else if (option === 3) {
    console.log('Pague  ' + valor)
  } else if (option === 4) {
    console.log('Pague  ' + desconto(valor, -10))
  }
}
//valueToPay(4, 100)
;(function () {
  console.log('my name is Lucas')
}) //()
// By uncommenting the "()" the file would just excute the function,

class person {
  name
  age
  dateOfBirth
  // A constructor make it so it's necessary to give the required data upon the creation of the object
  constructor(name, age) {
    this.name = name
    this.age = age
    this.dateOfBirth = 2024 - this.age
  }
  describe() {
    console.log(
      `Hy ${this.name} welcome. Good to know that you are ${this.age}, you must have been born in ${this.dateOfBirth}`
    )
  }
}

// const carol = new person('Carolina dos Santos', 27)

// carol.describe()

class car {
  brand
  color
  distancePerLiter
  constructor(brand, color, distancePerLiter) {
    this.brand = brand
    this.color = color
    this.distancePerLiter = distancePerLiter
  }
  costForTrip(distance) {
    return (distance * 6.12) / this.distancePerLiter
  }
  literPerKm() {
    return 1 / this.distancePerLiter
  }
}
// const civic99 = new car('civic', 'green', 9)

// console.log(civic99.literPerKm())

class personFit {
  name
  weight
  height
  imc
  imcLevel
  constructor(a, b, c) {
    this.name = a
    this.weight = b
    this.height = c
    this.imc = (this.weight / Math.pow(this.height, 2)).toFixed(2)
    this.imcLevel = IMC(this.weight, this.height)
  }
  relatory() {
    return `${this.name} your IMC is ${this.imc} and you are ${this.imcLevel}`
  }
}

// const lucasSantos = new personFit('Lucas Santos', 70, 1.68)
// console.log(lucasSantos.relatory())

function tabuada() {
  const colunas = []
  for (let i = 1; i < 10; i++) {
    let linha = []
    for (let index = 1; index < 10; index++) {
      linha.push(`${i} X ${index} = ${i * index}`)
    }
    colunas.push(linha)
  }
  for (let index = 0; index < colunas.length; index++) {
    return colunas[index]
  }
}

function sortEvenAndOdd(range) {
  const odd = []
  const even = []
  for (let index = 0; index < range; index++) {
    if (index % 2 === 0) {
      even.push(index)
    } else {
      odd.push(index)
    }
  }
  return `Odd numbers ${odd},
  even numbers ${even}`
}

console.log(sortEvenAndOdd(100))
