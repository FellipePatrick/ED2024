import Lista from "../../Lista";

const lendaJosephus = (tam, posicao) => {
    let pulo = 2;
    let lista = new Lista();
    for(let i = 1; i <= tam; i++){
        lista.add(i);
    }
    while(lista.size > 1){
        let i = 1;
        while(i <= lista.size){
            if(pulo == 2){
                console.log("removi: ", i);
                lista.removeAt(i);
                pulo = 0;
            }else{
                pulo++;    
            }
            i++;
        }
    }
    console.log(lista.head.proximo.dado);}

export default lendaJosephus;