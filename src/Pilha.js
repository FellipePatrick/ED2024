class Pilha {

    constructor(tam = 5) {
        this.dados = [];
        this.tam = tam;
        this.topo = 0;
    }
    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo++] = dado;
            return;
        }
        throw new Error("Stackoverflow");
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stackunderflow");
        } else {
            this.topo--;
        }
    }
    top() {
        if (!this.isEmpty()) {
            return this.dados[this.topo - 1];
        }
        throw new Error("Empty stack");
    }
    clear() {
        this.topo = 0;
    }
    size() {
        return this.topo;
    }
    toString() {
        let resultado = "";
        for (let i = 0; i <= this.topo; i++) {
            resultado += this.dados[i];
        }
        return resultado;
    }
    isEmpty() {
        return this.size() === 0;
    }
    isFull() {
        return this.size() === this.tam;
    }
    inverte(){
        let auxLetras = new Pilha();
        let pilhaModificada = new Pilha();
        pilhaModificada.push(this.top());
        this.pop();
        for(let i = 0; i < (this.size()+1); i++) {
            auxLetras.push(this.top());
            this.pop();
        }
        for(let i = 0; i < auxLetras.size()+1; i++) {
            pilhaModificada.push(auxLetras.top());
            auxLetras.pop();
        }
        pilhaModificada.push(this.top());
        this.dados = pilhaModificada.dados;
        this.topo = pilhaModificada.topo;
    }
}

export default Pilha;