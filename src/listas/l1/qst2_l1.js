class Pilha {
    constructor(tamA=5, tamB = 5) {
        this.dados = [];
        this.tamA = tamA;
        this.tamB = tamB;
        this.topoA = 0;
        this.topoB = (tamA+tamB)-1;
    }
    pushB(dado){
        if(!this.isFullB()){ 
            this.dados[this.topoB--] = dado;
            return;
        }else{
            if(!this.isFullA()){
                return;
            }
            return "Stackoverflow";
        }
    }
    pushA(dado){
        if(!this.isFullA()){
            this.dados[this.topoA++] = dado;
            return;
        }else{
            if(!this.isFullB()){
                return;
            }
            return "Stackoverflow";
        }
}
    
    popA(){
        if(!this.isEmptyA()){
            return this.topoA--;
        }
        throw new Error("Stackunderflow")
    }
    popB(){
        if(!this.isEmptyB()){
            return this.topoB++;
        }
        throw new Error("Stackunderflow")
    }
    topA(){
        if(!this.isEmptyA()){
            return this.dados[this.topoA - 1];
        }
        throw new Error("Stackunderflow")
    }
    topB(){
        console.log("this.dados[this.topoB]");
        if(!this.isEmptyB()){
            return this.dados[this.topoB+1];
        }
        throw new Error("Stackunderflow")
    }
    isEmptyA(){
        return this.sizeA() === 0;
    }
    isEmptyB(){
        return this.sizeB() === (this.tamA+this.tamB)-1;
    }
    sizeA() {
        return this.topoA;
    }
    sizeB() {
        return this.topoB;
    }
    isFullA() {
        return this.sizeA() === this.tamA;
    }
    isFullB() {
        return this.sizeB() === this.tamA-1;
    }
}

export default Pilha;