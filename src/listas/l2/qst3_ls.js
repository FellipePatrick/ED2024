import Fila from "../../Fila.js";

const caminhoes = (f) => {
    if(f.length() === f.capacidade){
        return "Nenhum caminhão saiu para a entrega!";
    }else if(f.length() === 0){
        return "Todos os caminhões sairam papa a entrega!"
    }else{
        let calc = f.capacidade - f.length();
        return "Numero de caminhões em espera: " + calc; 
    }
}

export default caminhoes;