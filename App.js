import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Row from './components/Row'
import Button from './components/Button'

export default function App() {

  const [numberText, setNumberText] = useState('0')
  const [previousNum, setPreviousNum] = useState('')
  const [operator, setOperator] = useState('')
  const [calculationText, setCalculationText] = useState('')

  const calculateResult = (value) => {
    if(operator === '+') {
      setCalculationText(parseFloat(previousNum) + parseFloat(numberText))
    } else if(operator === 'x') {
      setCalculationText(parseFloat(previousNum) * parseFloat(numberText))
    } else if(operator === '-') {
      setCalculationText(parseFloat(previousNum) - parseFloat(numberText)) 
    } else {
      setCalculationText(parseFloat(previousNum) / parseFloat(numberText))
    }
    if(value === '=') {
      setPreviousNum(calculationText)
      setNumberText('0')
    }
  }

  const operatorPress = (value) => {
    setOperator(value)
    if(previousNum) {
      calculateResult(value)
      setNumberText('')
    } else {
      setPreviousNum(numberText)
      setNumberText('')
    }
  }

  const clearCalc = () => {
    setNumberText('')
    setPreviousNum('')
    setOperator('')
    setCalculationText('')
  }

  const buttonPressed = (value) => {
    if(numberText === '0') {
      setNumberText(value)
    } else {
      setNumberText(numberText + value)
    }
}

useEffect(() => {
  setPreviousNum(calculationText)
}, [calculationText])

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.numberText}>{numberText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calculationText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <Row onPress={buttonPressed} values={[7, 8, 9]}/>
          <Row onPress={buttonPressed} values={[4, 5, 6]}/>
          <Row onPress={buttonPressed} values={[1, 2, 3]}/>
          <Row onPress={buttonPressed} values={[0, '.']}/>
        </View>
        <View style={styles.operations}>
          <Button onPress={operatorPress} value={'÷'}/>
          <Button onPress={operatorPress} value={'x'}/>
          <Button onPress={operatorPress} value={'-'}/>
          <Button onPress={operatorPress} value={'+'}/>
          <TouchableOpacity onPress={() => calculateResult('=')} style={styles.button}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={clearCalc} style={styles.button}>
              <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
  numberText: {
    marginTop: 50,
    fontSize: 30,
    color: 'black'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2, 
    backgroundColor: '#aba491',
    justifyContent: 'center',
    alignItems: 'flex-end'
  }, 
  calculation: {
    flex: 1, 
    backgroundColor: '#537260',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#4b1717'
  },
  operations: {
    flex: 1, 
    justifyContent: 'space-around',
    backgroundColor: '#310000'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
      fontSize: 30,
      color: 'white'
  }
})