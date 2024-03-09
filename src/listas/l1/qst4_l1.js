import Pilha from "../../Pilha";
export const toBin = (n) => {
    let pilha = new Pilha(n);
    while(n > 0){
        pilha.push(n % 2);
        n = Math.floor(n / 2);
    }
    let resultado = "";
    while(!pilha.isEmpty()){
        resultado += pilha.top();
        pilha.pop();
    }
    return resultado;
}

export default toBin;