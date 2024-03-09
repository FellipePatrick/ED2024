import Pilha from '../../Pilha';

export const inverte = (p) => {
    let auxLetras = new Pilha();
    
    let pilhaModificada = new Pilha();
    
    pilhaModificada.push(p.top());
    p.pop();

    for(let i = 0; i < (p.size()); i++) {
        auxLetras.push(p.top());
        p.pop();
    }

    for(let i = 0; i < auxLetras.size(); i++) {
        pilhaModificada.push(auxLetras.top());
        auxLetras.pop();
    }
    
    pilhaModificada.push(p.top());
    console.log(pilhaModificada.toString());
    return pilhaModificada;
}