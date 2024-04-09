class FilaCircular {
    constructor(capacidade = 5) {
        this.capacidade = capacidade+1;
        this.inicio = 0;
        this.fim = 0;
        this.dados = [];
    }
    enqueue(dado) { 
        if (!this.isFull()) {
            this.dados[this.fim++] = dado;
            if (this.fim === this.capacidade) {
                this.fim = 0;
            }
        }
    }
    dequeue() { 
        if (!this.isEmpty()) {
            let x = this.dados[this.inicio++];
            return x;
        }
        return "Fila vazia";
    }
    front() { 
        if (!this.isEmpty()) {
            return this.dados[this.inicio];
        }
        return "Fila vazia";
    }
    isEmpty() {
        return this.inicio === this.fim;
    }
    isFull() {
        return this.length() === this.capacidade-1;
    }
    clear() { }
    toString() { 
        let result = "";
        for (let i = this.inicio; i < this.fim; i++) {
            result += this.dados[i];
            if (i < this.fim - 1) {
                result += ",";
            }
        }
        return result;
    }
    length() {
        if (this.inicio < this.fim) {
            return this.fim - this.inicio;
        } else if (this.inicio > this.fim) {
            return this.capacidade - this.inicio + this.fim + 1;
        }
        return 0;
    }
}

export default FilaCircular;