import No from "./No.js";
class Lista {
    constructor(){
        this.head = new No();
        this.size = 0;
    }
    add(nome, idade){
        let novo = new No(nome, idade);
        let x = this.head.proximo;
        this.head.proximo = novo;
        novo.proximo = x;
        this.size++;
    }
    ordenaPorIdade(){
        let x = this.head.proximo;
        let y = this.head.proximo;
        while(x != null){
            while(y != null){
                if(x.idade < y.idade){
                    let aux = x.idade;
                    let aux2 = x.nome;
                    x.idade = y.idade;
                    x.nome = y.nome;
                    y.idade = aux;
                    y.nome = aux2;
                }
                y = y.proximo;
            }
           x = x.proximo;
            y = x;
        }
    }
    removeFirst(){
        if(!this.isEmpty()){
            this.size--;
            let x = this.head.proximo; 
            if(x.proximo != null){
                this.head.proximo = x.proximo;
                return;
            }
            this.head.proximo == null;
            return this.head.proximo.dado;
        }
        return "Lista vazia";
    }
    length(){
        return this.size;
    }
    isEmpty(){
        return this.head.proximo === null;
    }
}

export default Lista;