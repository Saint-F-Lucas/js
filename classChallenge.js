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
  console.log(status)
}

// IMC(118, 1.68)

function valueToPay(option, valor) {
  if (option === 'a vista debito') {
    console.log('Pague  ' + valor * 0.9)
  } else if (option === 'a vista dinheiro') {
    console.log('Pague  ' + valor * 0.85)
  } else if (option === 'duas vezes') {
    console.log('Pague  ' + valor)
  } else if (option === 'mais que duas vezes') {
    console.log('Pague  ' + valor * 1.1)
  }
}
valueToPay('mais que duas vezes', 100)
