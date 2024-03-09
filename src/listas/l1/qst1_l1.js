import Pilha from "../../Pilha";

const inverte = (expressao) => {
    let p = new Pilha(expressao.length);
    for(let i of expressao){
        p.push(i);
    }
    expressao = "";
    while(!p.isEmpty()){
        expressao += p.top();
        p.pop();
    }
    return expressao;
}

export default inverte;