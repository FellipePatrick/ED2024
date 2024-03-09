import Lista from "../../Lista";

class Pilha{
    constructor(){
        this.no = new Lista();
    }
    push(dado){
        this.no.append(dado);
    }
    pop(){
        if(!this.isEmpty()){
            this.no.removeLast();
        }
        return "Stackunderflow";
    }
    top(){
        if(!this.isEmpty()){
            let aux = this.no.removeLast();
            console.log(aux);
            this.no.append(aux);
            return aux;
        }
        return "Stackunderflow";
    }
    size(){
        return this.no.length();
    }
    isEmpty(){
        return this.no.isEmpty();
    }
}

export default Pilha;