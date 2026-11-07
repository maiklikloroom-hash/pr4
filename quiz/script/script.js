const burgerTitle = 'Стандарт';
const burgerSrc = './image/burger.png';

const btnOpenModal = document.getElementById('btnOpenModal');
const closeModal = document.getElementById('closeModal');
const modalBlock = document.getElementById('modalBlock');
const formAnswers = document.getElementById('formAnswers');

btnOpenModal.addEventListener('click', () => {
    modalBlock.classList.add('d-block');
});

closeModal.addEventListener('click', () => {
    modalBlock.classList.remove('d-block');
});

formAnswers.innerHTML = `
    <div class="answers-item d-flex flex-column">
        <input type="radio" id="answerItem1" name="answer" class="d-none">
        <label for="answerItem1" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src="${burgerSrc}" alt="${burgerTitle}">
            <span>${burgerTitle}</span>
        </label>
    </div>
`;