const containerHidden = document.querySelector('.information__container-hide'),
      informationBtn = document.querySelector('.information__btn'),
      informationBtnText = document.querySelector('.information__btn-text'),
      informationBtnImg = document.querySelector('.information__btn-img');

informationBtn.addEventListener('click', (e) => {
    containerHidden.classList.toggle('container__hidden');

    // Проверяем, есть ли класс container__hidden у containerHidden
    if (containerHidden.classList.contains('container__hidden')) {
        informationBtnText.textContent = 'Читать далее';
        informationBtnImg.style.transform = 'rotate(180deg)';
    } else {
        informationBtnText.textContent = 'Свернуть';
        informationBtnImg.style.transform = 'rotate(0deg)';
    }
});
     