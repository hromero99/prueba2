class API {

    constructor() {
        //JSON; Javascript Object Notation
        this.urls = {
            "person": "https://fakerapi.it/api/v1/persons?_locale=es_ES&_quantity=5",
            "address": ""
        }
        this.people = []
    }

    getPeopleFromApi(){
        fetch(this.urls.person).then((response) => {
            response.json().then((jsonData) => {
                let data = []
                jsonData.forEach(element => {
                    data.push(
                        new Persona(element.firstname,element.lastname)
                    )
                });
                this.setPeople(data)
            })
        })
    }
    setPeople(peopleData){
        this.people = peopleData
    }
    getPeople(){
        return this.people
    }
    setAddress(addressData){

    }
    getAddress(){

    }
}