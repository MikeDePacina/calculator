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
        this.currentOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    updateDisplay(){
        this.currentTextElement.innerText = this.currentOperand
        if(this.operation != null){
            this.prevTextElement.innerText = `${this.prevOperand} ${this.operation}`
        }
        else 
            this.prevTextElement.innerText = ''
    }

    compute(){
        let result
        const prev = parseFloat(this.prevOperand)
        const curr = parseFloat(this.currentOperand)
        if(isNaN(curr) || isNaN(prev)) return
        switch(this.operation){
            case '+':
                result = prev + curr
                break
            case '-':
                result = prev - curr
                break
            
            case '×':
                result = prev * curr
                break
            case '÷':
                result = prev / curr
                break
            case '^':
                result = Math.pow(prev, curr)
                break
            default:
                return

        }
        this.currentOperand = result
        this.prevOperand = ''
        this.operation = undefined
      
        
       
    }

     answer(){
        this.currentOperand = this.prevOperand
    }

    

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chosenOperation(operation){
        if(this.currentOperand === '') return
        if(this.prevOperand !== ''){
            this.compute()
        } 
        this.operation = operation
        this.prevOperand = this.currentOperand
        this.currentOperand = ''

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

equalsButton.addEventListener('click', button =>{
    calc.compute()
    calc.updateDisplay()
})

clearButton.addEventListener('click', button =>{
    calc.clear()
    calc.updateDisplay()
})

delButton.addEventListener('click', button =>{
    calc.delete()
    calc.updateDisplay()
})

ansButton.addEventListener('click', button =>{
    calc.answer()
    calc.updateDisplay()
})