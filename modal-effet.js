// Etape 1 : Récupérer les éléments d'actions
const buttonOuvrir = document.querySelector('.button-ouvrir');
const buttonFermer = document.querySelector('.button-fermer');

// Etape 2 : Récupérer les éléments qui vont être modifiés
const modal = document.querySelector('.modal');

// Etape 3 : Lister les actions (et définir les fonctions)
const ouvrirModal = () => {
    modal.classList.add('modal-visible');
}

const fermerModal = () => {
    modal.classList.remove('modal-visible');
}

// Connecter les actions avec les éléments d'actions
// En utilisant les eventListener
buttonOuvrir.addEventListener('click', ouvrirModal);
buttonFermer.addEventListener('click', fermerModal);