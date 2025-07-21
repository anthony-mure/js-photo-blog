/*Milestone 2

Utilizzando Postman, testiamo una chiamata a questo endpoint:

https://lanciweb.github.io/demo/api/pictures/

Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.*/

//risultato chiamata endpoint

 [
    {
        "id": 1,
        "title": "Skate Park",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
    },
    {
        "id": 2,
        "title": "Passeggiata",
        "date": "16-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
    },
    {
        "id": 3,
        "title": "Alpi",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
    },
    {
        "id": 4,
        "title": "Sagra",
        "date": "21-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
    },
    {
        "id": 5,
        "title": "Watergun",
        "date": "23-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
    },
    {
        "id": 6,
        "title": "Riviera",
        "date": "30-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
    }
];

/*Milestone 3

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto! */

//recupero gli elementi dal dom che mi servono

const cards = document.getElementById('cards');

axios.get('https://lanciweb.github.io/demo/api/pictures/').then(resp => {
    const photos = resp.data;

    photos.forEach(picture => {
        const cardHTML = `
        <div class="col">
          <div class="card">
            <img src="./img/pin.svg" class= "pin-red" alt ="">
            <img src="${picture.url}" class="card-img-top" alt="">
            <div class="card-body">
              <p class="card-text"><strong>${picture.title}</strong></p>
              <p class="card-text">${picture.date}</p>
            </div>
          </div>
        </div>
        `;
        cards.innerHTML += cardHTML;
    });
});
