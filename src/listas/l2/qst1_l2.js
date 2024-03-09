import Fila from '../../Fila.js';

class Pilha{
    constructor(tam = 5){
        this.filaA = new Fila(tam);
        this.filaB = new Fila(tam);
    }
    size(){
        return this.filaA.length(); 
    }
    isFull(){
        return this.size() === this.filaA.capacidade;
    }
    isEmpty(){
        return this.size() === 0;
    }
    push(dado){
        if (!this.isFull()) {
            this.filaA.enqueue(dado);
            return;
        }
        throw new Error("Stackoverflow");
    }
    pop(){ 
        if (!this.isEmpty()) {    
            for(let i = this.filaA.inicio; i < this.filaA.fim-1; i++){
                this.filaB.enqueue(this.filaA.front());
                this.filaA.dequeue();
            }
            this.filaA.dequeue();
            for(let i = this.filaB.inicio; i < this.filaB.fim; i++){
                this.filaA.enqueue(this.filaB.front());
                this.filaB.dequeue();
            } 
            return;
        }
        throw new Error("Stackunderflow");
    }
    top(){
        if(!this.isEmpty()){
            for(let i = this.filaA.inicio; i < this.filaA.fim-1; i++){
                this.filaB.enqueue(this.filaA.front());
                this.filaA.dequeue();
            }
            let aux = this.filaA.front();
            for(let i = this.filaB.inicio; i < this.filaB.fim; i++){
                this.filaA.enqueue(this.filaB.front());
                this.filaB.dequeue();
            }
            return aux;
        }
        throw new Error("Empty stack");
    }
}

export default Pilha;