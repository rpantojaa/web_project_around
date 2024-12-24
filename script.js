// ------------VARIAVEIS---------

//botao de editar
const openButton = document.querySelector('.profile__image-edit-button');
//botao x de fechar
const closeButton = document.querySelector('.popup__close-button');
//formulario (popup)
const formElement = document.querySelector('.popup');
//pegar o que esta escrito no h1 (nome)
const nameUser = document.querySelector('.profile__user') // nome do usuario
//pegar o que esta escrito no paragrafo (ocupacao)
const ocupationUser = document.querySelector('.profile__paragraph');
//botao de salvar
const saveButton = document.querySelector('.popup__save-button');
//input do nome
const inputName = document.querySelector('.popup__name');
//input da ocupacao
const inputOcupation = document.querySelector('.popup__ocupation');

const images = document.querySelectorAll('elements__image')

//formulario de adcionar imagem (popup add)
const formAddImage = document.querySelector('.popup-edit')
//botao de adicionar imagem
const addImageButton = document.querySelector('.profile__add-button')
//botao de fechar popup adcionar imagem
const closeEditButton = document.querySelector('.popup-edit__close-button')

//onde var ser adcionado (ul)
const containerUl = document.querySelector('.elements__cards');

//botao de criar nova imagem
const createImageButton = document.querySelector('.popup-edit__create-button');

//formulario de criar imagem
const formCreateImage = document.querySelector('.popup-edit__form')


//botao de curtir
const likeButton = document.querySelector('.elements__button-like-card');

//imagem do Botao de curtir
const imageLikeButton = document.querySelector('.elements__button-image-like');

const popupImage = document.querySelector('.popup-image');
const popupImageContent = document.querySelector('.popup-image__content');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');
const popupImageImg = document.querySelector('.popup-image__img');

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];



// ------------ABRIR FORMULARIO---------

function openForm(formReceived) {
  formReceived.classList.add('popup_opened')
}
openButton.addEventListener('click', function() {
  openForm(formElement);
})
addImageButton.addEventListener('click',function() {
  openForm(formAddImage);
});

// ------------FECHAR FORMULARIO---------
function closeForm(formReceived) {
  formReceived.classList.remove('popup_opened');
}

closeButton.addEventListener('click', function(){
  closeForm(formElement);
});
closeEditButton.addEventListener('click', function (){
  closeForm(formAddImage);
})



// ------------EDITAR NOME E OCUPACAO NO PERFIL---------
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  nameUser.textContent = inputName.value;
  ocupationUser.textContent = inputOcupation.value;
  closeForm(formElement);
}

formElement.addEventListener('submit', handleProfileFormSubmit);



// ------------ADCIONAR CARTOES---------
function createCards(card) {
  //pegar o conteudo do id do template
  const template = document.querySelector('#card-template').content;


  //clonar a li com o conteudo
  const cloneTemplate = template.querySelector('.elements__card').cloneNode(true);

  //clonar conteudo da image
  cloneTemplate.querySelector('.elements__image').setAttribute('src', card.link);


  //clonar o conteudo do texto
  cloneTemplate.querySelector('.elements__name-card').textContent = card.name;


  //curtir imagens
  cloneTemplate.querySelector('.elements__button-image-like').addEventListener('click', (evt) => {
    if (evt.target.getAttribute('src') === './images/button_heart.png') {
      return evt.target.setAttribute('src', './images/heartButtonBlack.png')
    }

    return evt.target.setAttribute('src', './images/button_heart.png')
  })

  //exluir cartoes
  cloneTemplate.querySelector('.elements__delete-button').addEventListener
  ('click', (evt) => {
    evt.target.parentNode.remove();
  })

  return cloneTemplate;
}

for (const card of initialCards) {
  const newCard = createCards(card)
  containerUl.prepend(newCard);

}
//---------CRIAR CARTOES INPUT USUARIO--------

function openPopupImage(imageSrc) {
  popupImageImg.src = imageSrc;
  popupImage.classList.add('popup-image_opened');
}

function createUserCards (evt) {
  evt.preventDefault();


  //pegar o titulo do cartao
  const inputTitleUser = document.querySelector('#edit-name').value;

  //pegar link do cartao
  const inputLinkUser = document.querySelector('#link').value;

  //adcionar na array initialCards
  const newCardObject = {name: inputTitleUser, link: inputLinkUser};

  const newCard = createCards(newCardObject);

  //para funcionar para novos cartoes tambem
  newCard.querySelector('.elements__image').addEventListener('click', () => {
    openPopupImage(newCard.querySelector('.elements__image').src);
  })

  containerUl.prepend(newCard);

  closeForm(formAddImage);
 }


 formCreateImage.addEventListener('submit', createUserCards);





//-------ABRIR IMAGEM AO CLICAR---------

function openPopupImage(imageSrc) {
  popupImageImg.src = imageSrc;
  popupImage.classList.add('popup-image_opened')
}

document.querySelectorAll('.elements__image').forEach((image) => {
  image.addEventListener('click', () => {
     openPopupImage(image.src);
  });
});

//fechar o popup
popupImageCloseButton.addEventListener('click', () => {
  popupImage.classList.remove('popup-image_opened');
})



const sectionElements = document.querySelector('.elements')

document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    if (formElement.classList.contains('popup_opened')) {
      formElement.classList.remove('popup_opened')
    }
    else if (formAddImage.classList.contains('popup_opened')) {
      formAddImage.classList.remove('popup_opened')
    }

    else if (popupImage.classList.contains('popup-image_opened')) {
      popupImage.classList.remove('popup-image_opened')
    }
  }
})



document.addEventListener('click', function(evt) {
  const targetEvt = evt.target


  if (targetEvt.classList.contains('popup_opened')){
    formElement.classList.remove('popup_opened')

  }


  if (targetEvt.classList.contains('popup_opened')) {
    formAddImage.classList.remove('popup_opened')
}

  if (targetEvt.classList.contains('popup-image_opened')) {
    popupImage.classList.remove('popup-image_opened')
}

})








