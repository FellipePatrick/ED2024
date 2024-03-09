import Lista from "../../Lista";
class StringLista{
    constructor(){
        this.lista = new Lista();
        this.size = 0;
    }
    subLista(a, b){
        let x = 0;
        let rel = "";
        let aux = this.lista.head.proximo;
        let lista = new Lista();
        while(x < a){
            x++;
            aux = aux.proximo;
        }
        while(x <= b){
            lista.add(aux.dado);
            rel += aux.dado + " ";
            x++;
            aux = aux.proximo;
        }
        return rel;
    }
}

export default StringLista;