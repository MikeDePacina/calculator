const numButtons = document.querySelectorAll('[data-number]')
const opButtons = document.querySelectorAll('[data-operation]')
const clearButton = document.querySelector('[data-clear]')
const delButton = document.querySelector('[data-delete]')
const ansButton = document.querySelector('[data-ans]')
const currentTextElement = document.querySelector('[data-curr')
const prevTextElement = document.querySelector('[data-prev]')
const equalsButton = document.querySelector('[data-equals]')

class Calculator{
    constructor(currentTextElement, prevTextElement){
        this.currentTextElement = currentTextElement
        this.prevTextElement = prevTextElement
        this.clear()
    }

    clear(){
        this.currentTextElement = ''
        this.prevTextElement = ''
    }

    delete(){
        this.currentTextElement = this.currentTextElement.toString().slice(0,-1)
    }

    updateDisplay(){
        currentTextElement.innerText = this.currentTextElement
        prevTextElement.innerText = this.prevTextElement
    }

    compute(){

    }

    appendNumber(number){
        if(number === '.' && this.currentTextElement.includes('.')) return
        this.currentTextElement = this.currentTextElement.toString() + number.toString()
    }

    chosenOperation(operation){
        if(currentTextElement === '') return
        this.operation = operation
        this.prevTextElement = currentTextElement
        this.currentTextElement = ''

    }

}

const calc = new Calculator(currentTextElement, prevTextElement)

numButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calc.appendNumber(button.innerText)
        calc.updateDisplay()
    })
})

opButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        calc.chosenOperation(button.innerText)
        calc.updateDisplay()
    })
})

equalsButton.addEventListener('click', ()=>{
    calc.compute()
    calc.updateDisplay()
})

clearButton.addEventListener('click', ()=>{
    calc.clear()
    calc.updateDisplay()
})

delButton.addEventListener('click', ()=>{
    calc.delete()
    calc.updateDisplay()
})