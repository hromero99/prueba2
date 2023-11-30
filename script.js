const peronsCreateMethod  = (firstname,lastname,birthDate) => {
    return new Persona(firstname,"Cabañas")
}
const dom = new DomHandler("root")
const personApi = new PeopleApi(peronsCreateMethod)
let peopleHtmlItems = [];
personApi.getPeople().forEach(person => {
    peopleHtmlItems.push(dom.createP(person.getFullName()))
});
dom.createDiv(dom.rootid,peopleHtmlItems)
