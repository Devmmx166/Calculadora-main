const previusOperationText = document.querySelector("#previus-operations");
const currentOperationText = document.querySelector("#current-operations");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator{
    constructor(previusOperationText,currentOperationText){
     this.previusOperationText = previusOperationText;
     this.currentOperationText = currentOperationText;
     this.currentOperation = "";
    }
    // add digito na tela da calculadora
    addDigit(digit){  
        if(digit === "." && this.currentOperationText.innerText.includes(".") ){
            return;
           }

    this.currentOperation = digit;
    this.updateScreen();
     
    }

    // processar todos os calculos das operações
    processOperation(operation){
        if(this.currentOperationText.innerText === "" && operation !== "C"){
            if(previusOperationText.innerText !== ""){
                this.currentOperation(operation);
            }
        }
        
        // realizar operações
        let operationValue;
        const previus= +this.previusOperationText.innerText.split(" ")[0]
        const current = +this.currentOperationText.innerText;

        switch (operation) {
            case "+":
                operationValue = previus + current;
                this.updateScreen(operationValue, operation, current, previus);
                break;
                case "-":
                    operationValue = previus - current;
                    this.updateScreen(operationValue, operation, current, previus);
                    break;
                    case "/":
                        operationValue = previus / current;
                        this.updateScreen(operationValue, operation, current, previus);
                        break;
                        case "*":
                            operationValue = previus * current;
                            this.updateScreen(operationValue, operation, current, previus);
                            break;
                            case "DEL":
                             this.del()
                                break;
                                case "CE":
                                    this.clear()
                                       break;
                                       case "C":
                                        this.clearOperation()
                                           break;
                                           case "=":
                                        this.processEqualOperator()
                                           break;
                default:
                    return;
         }
    }
  

    updateScreen(
       operationValue = null,
       operation = null,
       current = null,
       previus = null
    ){
       if(operationValue === null){
               this.currentOperationText.innerText += this.currentOperation;

       }else{
        if(previus === 0){
            operationValue = current
        }
        // historico do calculo
this.previusOperationText.innerText = `${operationValue} ${operation}`;
this.currentOperationText.innerText = "";
       }
    }
//changer operation
changeOperation(){
    const mathOperations = ["*", "/", "+" , "-"]

    if(!mathOperations.includes(operation)){
        return
    }
    //123 Operation
    this.previusOperationText.innerText = this.previusOperationText.innerText.slice(0, -1) + operation;
}

del(){
    this.currentOperationText.innerText =
     this.currentOperationText.innerText.slice(0, -1);
}

clear(){
    this.currentOperationText.innerText = "";  
}
clearOperation(){
   this.currentOperationText.innerHTML = "";
   this.previusOperationText.innerHTML = "";

}
processEqualOperator(){
     const operation = previusOperationText.innerText.split(" ")[1];
     this.processOperation(operation);
}

}  
  //
 


const calc = new Calculator(previusOperationText, currentOperationText);


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
           calc.addDigit(value);
        }else{
          calc.processOperation(value)
        }
    });
});