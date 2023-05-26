 class Garage {
   constructor(nome) {
     this.nome = nome;
     this.maxPostiDisponibili = 10;
     this.veicoli = [];
   }
   aggiungiVeicolo(veicolo) {
     if (this.veicoli.length < this.maxPostiDisponibili) {
       this.veicoli.push(veicolo);
       console.log(`Veicolo ${veicolo.brand} ${veicolo.model} aggiunto al garage.`);
       this.mostraVeicoli();
     } else {
       console.log('Il garage è pieno, impossibile aggiungere ulteriori veicoli.');
     }
   }
   mostraVeicoli() {
     const garageVeicoliElement = document.getElementById('garage-veicoli');
     garageVeicoliElement.innerHTML = '';
     if (this.veicoli.length > 0) {
       const ulElement = document.createElement('ul');
       ulElement.classList.add('list-group');
       for (const veicolo of this.veicoli) {
         const liElement = document.createElement('li');
         liElement.classList.add('list-group-item');
         liElement.textContent = `${veicolo.brand} ${veicolo.model} (${veicolo.year})`;
         ulElement.appendChild(liElement);
       }
       garageVeicoliElement.appendChild(ulElement);
     } else {
       garageVeicoliElement.textContent = 'Nessun veicolo presente nel garage.';
     }
   }
 }



class Automobile {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.generaImmagineMacchina();
  }

  generaImmagineMacchina() {
    let imageURL = '';

    switch (this.brand.toLowerCase()) {
      case 'fiat':
        imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyKTWSJ4_aDZQ3F2FnqDWPCCIgrNZX_WhUQ4nNR3FxA&s'; // Inserisci l'URL dell'immagine Fiat desiderata
        break;
      case 'toyota':
        imageURL = 'https://example.com/toyota.jpg'; // Inserisci l'URL dell'immagine Toyota desiderata
        break;
      case 'honda':
        imageURL = 'https://example.com/honda.jpg'; // Inserisci l'URL dell'immagine Honda desiderata
        break;
      default:
        imageURL = 'https://example.com/default.jpg'; // Inserisci l'URL dell'immagine predefinita o un'immagine generica
        break;
    }

    const imageElement = document.createElement('img');
    imageElement.src = imageURL;
    imageElement.alt = `${this.brand} ${this.model}`;
    imageElement.classList.add('car-image');
    document.body.appendChild(imageElement);
  }
}

const mioGarage = new Garage("Garage di Giovanni");

const formAggiungiVeicolo = document.getElementById('form-aggiungi-veicolo');
formAggiungiVeicolo.addEventListener('submit', function(event) {
  event.preventDefault();

  const brandInput = document.getElementById('brand');
  const modelInput = document.getElementById('model');
  const yearInput = document.getElementById('year');

  const brand = brandInput.value;
  const model = modelInput.value;
  const year = yearInput.value;

  const nuovoVeicolo = new Automobile(brand, model, year);
  mioGarage.aggiungiVeicolo(nuovoVeicolo);

  brandInput.value = '';
  modelInput.value = '';
  yearInput.value = '';
});
