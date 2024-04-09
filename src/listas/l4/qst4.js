import Conjunto from "../../Conjunto"

const modulo = (bilhetePremiado, matriz) => {
    let flag = false;
    for(let c = 0; c < 3; c++){
        let i = matriz[c];
        let conj = i.intersection(bilhetePremiado);
        console.log(conj.values())
        if(conj.size() > 4){
            flag = true;
            if(conj.size() === 5){
                console.log("O jogador " + (c+1) + " ganhou a mega sena e foi uma quina!");
            }
            console.log("O jogador " + (c+1) + " ganhou a mega sena e foi uma sena!");
        }
    }
    return flag;
}

export default modulo;