import Lista from "../../Lista";

class Fila{
    constructor(){
        this.no = new Lista();
    }
    enqueue(dado){
        this.no.add(dado);
    }
    dequeue(){
        if(!this.isEmpty()){
            this.no.removeFirst();
        }
        return "Queueunderflow";
    }
    front(){
        if(!this.isEmpty()){
            let aux = this.no.removeFirst();
            console.log(aux);
            this.no.add(aux);
            return aux;
        }
        return "QueueunderFlow";
    }
    length(){
        return this.no.length();
    }
    isEmpty(){
        return this.no.isEmpty();
    }
}

export default Fila;