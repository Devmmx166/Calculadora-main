function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClean: document.querySelector('.btnClean'),
        inicia() {
            this.cliqueBotoes(); 
           },

           realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta invalida');
                    return;
                }
                this.display.value = String( conta);
            }
            catch(e){
            alert('Conta Invalida');
            return;
            }
           },
        cleanDisplay(){
            this.display.value = " ";
        },
        apagaUm(){                               //faz apagar apenas o ultimo dig
            this.display.value = this.display.value.slice(0, -1);
        },
  
        cliqueBotoes(){
            // this -> calculadora
         document.addEventListener('click', function(e){
const el = e.target;
console.log(this)
           if(el.classList.contains('btn-num')){
            this.btnParaDisplay(el.innerText);
           }

           if(el.classList.contains('btn-clean')){
            this.cleanDisplay();
           }

           if(el.classList.contains('btn-del')){
            this.apagaUm();
           };

           if(el.classList.contains('btn-eq')){
            this.realizaConta();
            if(e.key === 'Enter') {
  
                var btn = document.querySelector("#submit");
              
              btn.click();
            
            }
           };
         }.bind(this));
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora();
calculadora.inicia()