
class LocalApi extends API{
   

    loadInfoFromLocal(){
        fetch('./people.json')
            .then(response => response.json())
            .then(data => this.setPeople(localPeople))
            .catch(error => console.log(error));
        
    }
}