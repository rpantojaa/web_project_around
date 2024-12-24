
// Selecionando os elementos
const modal = document.getElementById('editProfileModal');
const addButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.profile__modal-content-close');
const profileName = document.querySelector ('.profile__name');
const profileDescription = document.querySelector ('.profile__description ');
const modalForm = document.querySelector ('.modal__form');



// Mostrar o modal

addButton.addEventListener('click', () => {
  modal.classList.add('show');
  const name = document.getElementById('name');
  name.value = profileName.textContent 
  const role = document.getElementById('role');
  role.value = profileDescription.textContent

});

// Fechar o modal ao clicar no "X"
closeButton.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});

modalForm.addEventListener('submit', (event) => {
event.preventDefault(); 
const name = document.getElementById('name');
profileName.textContent = name.value;
const role = document.getElementById('role');
profileDescription.textContent = role.value;
modal.classList.remove('show');
});