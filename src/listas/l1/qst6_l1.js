import Pilha from "../../Pilha";
const rpn = (expressao) => {
    let p = new Pilha(expressao.length);
    let exFinal = "";
    for(let i of expressao){
        if(i != "(" && i != ")" && i != "+" && i != "-" && i != "/" && i != "*" && i != "^"){
            exFinal += i;
        }else{
            if(i != "(" && i != ")"){
                p.push(i);
             }else{
                if(i === ")"){
                    while(!p.isEmpty()){
                        exFinal += p.top();
                        p.pop();
                    }
                }
             }
        }
    }
    if(!p.isEmpty()){
        while(!p.isEmpty()){
            exFinal += p.top();
            p.pop();
        }
    }
    return exFinal;
}
const reorganiza = (p) => {
    let aux = new Pilha(p.size());
    let aux2 = new Pilha(p.size());
    aux.dados = p.dados;
    let flag = true;
    do{
        let varr = aux.top();
        aux.pop();
        if(varr === aux.top()){
            flag = false;
        }else{
            if(varr === "*" || varr === "/" || varr === "^"){
                aux2.push(varr);
            }
        }
    }while(flag); 
}


export default rpn;