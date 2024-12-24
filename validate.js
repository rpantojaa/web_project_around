//formulario
const form = document.forms.formProfile;
//input do formulario
const formInput = form.elements.name;
const ocupationInput = form.elements.ocupation;

// Mostrar mensagem de erro
function showInputError(formElement, inputElement, config) {
  const errorMessage = formElement.querySelector(`.${inputElement.id}-error`);
  errorMessage.textContent = inputElement.validationMessage; // Usando o validationMessage do input
  errorMessage.classList.add(config.errorClass);
  inputElement.classList.add('popup__name_no-margin')
}

// Esconder mensagem de erro
function hideInputError(formElement, inputElement, config) {
  const errorMessage = formElement.querySelector(`.${inputElement.id}-error`);
  errorMessage.textContent = '';
  errorMessage.classList.remove(config.errorClass);
  inputElement.classList.remove('popup__name_no-margin')
}

// Validar o input
function isValid(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config); // Exibe erro caso o input não seja válido
  } else {
    hideInputError(formElement, inputElement, config); // Esconde o erro caso o input seja válido
  }
}

// Verifica se algum input está inválido
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

// Controla o estado do botão de envio
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true; // Desabilita o botão
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false; // Habilita o botão
  }
}

// Adiciona os event listeners para todos os campos do formulário
function setEventListener(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector)); // Seleciona todos os inputs
  const buttonElement = formElement.querySelector(config.submitButtonClass); // Seleciona o botão de submit

  // Ajusta o estado do botão inicialmente
  toggleButtonState(inputList, buttonElement, config);

  // Adiciona o evento de input nos campos
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config); // Valida o input sempre que o usuário digitar
      toggleButtonState(inputList, buttonElement, config); // Atualiza o estado do botão
    });
  });
}

// Habilita a validação em todos os formulários
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector)); // Seleciona todos os formulários

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault(); // Impede o envio do formulário
    });
    setEventListener(formElement, config); // Adiciona o event listener em cada formulário
  });
}

enableValidation({
  formSelector: 'form',
  inputSelector: 'input',
  submitButtonClass: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass:'popup__form_name-input-error_active'
})





