
class Persona{
    constructor(name,surnames,birthDate){
        this.name = name
        this.surnames = surnames
        this.birthDate = birthDate
    }
    
    setDni(dni){
        if (dni.length != 9){
            return false
        }
        this.dni = dni
    }

    computeAge(){
        
    }

    getFullName(){
        return `${this.name} ${this.surnames}`
    }
}