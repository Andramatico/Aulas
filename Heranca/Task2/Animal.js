class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        return "Som de animal"
    }
}

class Elefante extends Animal {


    emitirSom() {
        return "Barrito"
    }
}

class Leao extends Animal {
    emitirSom() {
        return "Rugido"
    }
}

function verficarSom(pet) {
    if (pet instanceof Leao) {
        console.log("Esse é um Leão" , pet.emitirSom());
    }
    else if (pet instanceof Elefante) {
        console.log('Esse é um Elefante' , pet.emitirSom());
    }
    else {
        console.log(pet.emitirSom());
    }

}

const pet = new Elefante("Dumbo")

verficarSom(pet)