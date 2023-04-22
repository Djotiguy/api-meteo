// **************** Application Programming Interface (API) Météo *****************/
function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ ville +'&appid=4c74e36ba294aa2e05b9de26f5816a8d&units=metric';
    let requete = new XMLHttpRequest(); // créé un objet
    requete.open('GET', url); // Premier param GET / Post le 2e = url
    requete.responseType = 'json'; // Attente de la requete
    requete.send(); // enovie de la requête
    requete.onload = function() {
    if(requete.readyState === XMLHttpRequest.DONE){ // si la requête est bien terminer
        if(requete.status === 200){
                let reponse = requete.response; // stockage de la reponse 
                let degre = reponse.main.temp
                document.querySelector('#ville').textContent = ville;
                document.querySelector('#temperature_label').textContent = degre;
        }
        else{
            alert('Un problème est intervenue ! ');
        }
    }
}
}

recevoirTemperature('paris');
let btn  = document.getElementById('changer');
btn.addEventListener('click', () => {
    let villeChosi = prompt("Saisissez le nom d'une ville");
    recevoirTemperature(villeChosi);
})


