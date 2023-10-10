let brownieDiv = document.querySelector('.brownie');
let before = document.querySelector('.before');
let after = document.querySelector('.after');

    // Ajoutez un gestionnaire d'événement "clic"
    brownieDiv.addEventListener('click', function() {
      // Masquez la div en définissant display sur "none"
    brownieDiv.style.display = 'none';
    before.style.display = 'none';
    after.style.display = 'flex';
    });