import Pilha from '../../Pilha.js';

class Fila {
    constructor(tam = 5) {
        this.pilhaA = new Pilha(tam);
        this.pilhaB = new Pilha(tam);
    }
    size() {
        return this.pilhaA.size();
    }
    isFull() {
        return this.pilhaA.isFull();
    }
    isEmpty() {
        return this.pilhaA.isEmpty();
    }
    enqueue(dado) {
        if(!this.isFull()){
            this.pilhaA.push(dado);
            return;
        }
        throw new Error("Queueoverflow");
    }
    dequeue() {
        if(!this.isEmpty()){
            for(let i = 0; i < this.size()-1; i++){
                this.pilhaB.push(this.pilhaA.top());
                this.pilhaA.pop();
            }
            this.pilhaA.pop();
            for(let i = 0; i < this.pilhaB.size(); i++){
                this.pilhaA.push(this.pilhaB.top());
                this.pilhaB.pop();
            }
            return;
        }
        throw new Error("Queueunderflow");
    }
    front(){
        if(!this.isEmpty()){
            for(let i = 0; i < this.size()-1; i++){
                this.pilhaB.push(this.pilhaA.top());
                this.pilhaA.pop();
            }
            let aux = this.pilhaA.top();
            for(let i = 0; i < this.pilhaB.size(); i++){
                this.pilhaA.push(this.pilhaB.top());
                this.pilhaB.pop();
            }
            return aux;
        }
        throw new Error("Queueunderflow");
    }
}

export default Fila;