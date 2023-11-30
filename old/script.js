const javier = new Persona("Javier", "Cabañas")
const hector = new Persona("Hector", "Romero", "3/6/1999")

// SOLID
// Single Responsability Principle
// Open-Closed Principle
// Liskov Sustitution Principle
// Interface Segregation Princiaple
// Dependency injection


const apiFake = new Api();
apiFake.getPeopleFromApi()
console.log(apiFake.getPeople())
apiFake.setPeople([javier,hector])
console.log(apiFake.getPeople())

//ApiLocal
/*console.log(apiFake.loadInfoFromLocal())
console.log(apiFake.getPeople())
 */