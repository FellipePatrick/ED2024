import Pilha from "../../Pilha";

const priorite = (expressao) => {
    let flag = true;
    let hasColchete = 0;
    let hasParenteses = 0;
    let pilha = new Pilha(expressao.length);
    for(let i of expressao){
       if(i === "(" || i === "["){
            if(i === "("){
                hasParenteses++;
            }else{
                hasColchete++;
            }
            pilha.push(i);
       } else if(i === "]"){
            if((pilha.top()==="[" || pilha.top()===")") && hasColchete > 0){
                pilha.pop();
                hasColchete--;
            }else{
                flag = false;
            }
       }else if(i === ")"){
            if(pilha.top()==="(" && hasParenteses > 0){
                pilha.pop();
                hasParenteses--;
            }else{
                flag = false;
            }
       }
    }
    return flag;
}

export default priorite;