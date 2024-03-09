/*
    QUESTÃO 3: Implemente uma lista simples utilizando um array de nós (nodes) para guardar as 
    informações.
*/ 
import No from "../../No.js";
class Lista {
    constructor(){
        this.dados = [];
        this.head = new No();
        this.dados[0] = this.head;
        this.size = 0;
    }
    add(dado){
        let novo = new No(dado);
        this.head.proximo = novo;
        novo.proximo = null;
        this.size++;
        this.arrayListAdd(novo, this.size);
    }
    addAt(posicao, dado){
        if(posicao < this.size){
            this.size++;
            let x = 1;
            let novo = new No(dado);
            let aux = this.head;
            while(x < posicao){
                x++;
                aux = aux.proximo;
            }
            this.arrayListAdd(novo, posicao);
            novo.proximo = aux.proximo;
            aux.proximo = novo;
            return;
        }
        return "Posição maior que a lista!";
    }
    arrayListAdd(node, posicao){
        this.dados[posicao] = node;
    }
    arrayListRemove(posicao){
        this.dados.splice(posicao);
    }
    append(dado){    
        this.size++;
        let x = this.head;
        while(x.proximo!=null){
            x = x.proximo;
        }
        let no = new No(dado);
        x.proximo = no;
        this.arrayListAdd(no, this.size);
        no.proximo = null;
    }
    search(data){
        if(!this.isEmpty()){
            let x = this.head;
            while(x.proximo !== null){
                if(data === x.dado){
                    return true;
                }
                x = x.proximo;
            }
        }
        return "Lista vazia";
    }
    removeAt(posicao){
        if(!this.isEmpty()){
            if(posicao < this.size){
                this.arrayListRemove(posicao);
                this.size--;
                let x = 1;
                let aux = this.head.proximo;
                while(x < posicao){
                    x++;
                    aux = aux.proximo;
                }
                aux.proximo.dado = null;
                aux.proximo = aux.proximo.proximo;
                return;
            }
            return "Posição maior que a lista!";
        }
        return "Lista vazia";
    }

    removeLast(){
        if(!this.isEmpty()){
            this.arrayListRemove(this.size);
            this.size--;
            let x = this.head.proximo;
            while(x.proximo!=null){
                x = x.proximo;
            }
            x.proximo = null;
            return x.dado;
        }   
        return "Lista vazia";
    }
    removeFirst(){
        if(!this.isEmpty()){
            this.arrayListRemove(1);
            console.log(this.dados);
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