class Deque{
    constructor(tam){
        this.capacidade = tam;
        this.dados = [];
        this.inicioCabeca = 0;
        this.fimCabeca = 0;
        this.inicioCauda = tam;
        this.fimCauda = tam;
    }
    enqueueInicio(dado){
        if(!this.isFull()){
            this.dados[this.fimCabeca++] = dado;
            return;
        }
        return "Queueoverflow";

    }
    frontCabeca(){
        if(!this.isEmptyA()){
            return this.dados[this.inicioCabeca];
        }
        return "Queueoverflow";
    }
    frontCauda(){
        if(!this.isEmptyB()){
            return this.dados[this.inicioCauda];
        }
        return "Queueoverflow";
    }
    enqueueFinal(dado){
        if(!this.isFull()){
            this.dados[this.fimCauda--] = dado;
            return;
        }
        return "Queueoverflow";
    }
    removerFinal(){
       if(!this.isEmptyB() && !this.isEmptyA()){
            if(!this.isEmptyB())
                this.inicioCauda--;
            return;
        }
        return "Queueunderflow"; 
    }
    removerComeco(){
        if(!this.isEmptyA() && !this.isEmptyB()){
            if(!this.isEmptyA())
                this.inicioCabeca++;
            return;
        }
        return "Queueunderflow"; 
    }
    isFull(){
        return this.size() === this.capacidade;
    }
    isEmptyA(){
        return  this.fimCabeca-this.inicioCabeca===0;
    }
    isEmptyB(){
        return this.fimCauda-this.inicioCauda===0;
    }
    size(){
        let sizeCauda =  this.fimCauda - this.inicioCauda;
        let sizeCabeca = this.fimCabeca - this.inicioCabeca;
        return sizeCabeca+sizeCauda;
    }

}

export default Deque;