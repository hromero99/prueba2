
class PeopleApi{

    constructor(peronsCreateMethod){
        this.data = [
            {
                "id": 1,
                "firstname": "Cristian",
                "lastname": "Galván",
                "email": "ysaiz@yahoo.com",
                "phone": "+9098454655072",
                "birthday": "2006-12-03",
                "gender": "male",
                "address": {
                    "id": 0,
                    "street": "Carrer Alba, 3, 3º F",
                    "streetName": "Avenida Carmen",
                    "buildingNumber": "9",
                    "city": "As Amaya",
                    "zipcode": "38697",
                    "country": "Jordania",
                    "county_code": "NL",
                    "latitude": 23.266665,
                    "longitude": -43.467604
                },
                "website": "http://dominguez.es",
                "image": "http://placeimg.com/640/480/people"
            },
            {
                "id": 2,
                "firstname": "Joel",
                "lastname": "Miranda",
                "email": "yeray.dejesus@cordova.es",
                "phone": "+3108330314967",
                "birthday": "1959-04-29",
                "gender": "male",
                "address": {
                    "id": 0,
                    "street": "Avinguda Lucía, 23, 3º A",
                    "streetName": "Ronda Girón",
                    "buildingNumber": "1",
                    "city": "Los Sepúlveda de Lemos",
                    "zipcode": "36501",
                    "country": "Luxemburgo",
                    "county_code": "PK",
                    "latitude": -53.98909,
                    "longitude": 148.292163
                },
                "website": "http://saiz.es",
                "image": "http://placeimg.com/640/480/people"
            },
            {
                "id": 3,
                "firstname": "Aitor",
                "lastname": "Venegas",
                "email": "rvillalobos@hotmail.es",
                "phone": "+7562471964588",
                "birthday": "1964-07-28",
                "gender": "male",
                "address": {
                    "id": 0,
                    "street": "Travesía Pedro, 06, 5º B",
                    "streetName": "Travessera Ángela",
                    "buildingNumber": "354",
                    "city": "La Cerda del Mirador",
                    "zipcode": "95111",
                    "country": "Afganistán",
                    "county_code": "KY",
                    "latitude": -33.566038,
                    "longitude": -114.669986
                },
                "website": "http://montemayor.net",
                "image": "http://placeimg.com/640/480/people"
            },
            {
                "id": 4,
                "firstname": "José",
                "lastname": "Mota",
                "email": "irene.luna@font.org",
                "phone": "+5634034896345",
                "birthday": "1940-09-01",
                "gender": "male",
                "address": {
                    "id": 0,
                    "street": "Praza Candela, 72, 4º",
                    "streetName": "Calle Pilar",
                    "buildingNumber": "1",
                    "city": "L' Riojas del Mirador",
                    "zipcode": "25956",
                    "country": "Chad",
                    "county_code": "TG",
                    "latitude": 73.443095,
                    "longitude": 172.638874
                },
                "website": "http://delvalle.com.es",
                "image": "http://placeimg.com/640/480/people"
            },
            {
                "id": 5,
                "firstname": "Marco",
                "lastname": "Tijerina",
                "email": "margarita.yanez@armas.org",
                "phone": "+5116377856213",
                "birthday": "2000-05-24",
                "gender": "male",
                "address": {
                    "id": 0,
                    "street": "Carrer Rey, 69, 85º 0º",
                    "streetName": "Ronda Gabriela",
                    "buildingNumber": "405",
                    "city": "O Rodríguez",
                    "zipcode": "68836",
                    "country": "Singapur",
                    "county_code": "SV",
                    "latitude": -76.132903,
                    "longitude": 112.604878
                },
                "website": "http://rosado.com",
                "image": "http://placeimg.com/640/480/people"
            }
        ]
        this.data2 = peronsCreateMethod
    }

    getPeople(){
        let finalData = [];
        this.data.forEach((person) => finalData.push(
            this.peronsCreateMethod(person.firstname,person.lastname,person.birthday)
        ) )
        return finalData;
    }
}