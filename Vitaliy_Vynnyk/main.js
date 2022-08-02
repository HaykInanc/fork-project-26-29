const mainContentBtns = document.querySelectorAll('.main-content__button');
const mainContentTextsDivs = document.querySelectorAll('.main-content__text');

let activeBtn = [...mainContentBtns].find(btn => btn.classList.contains('main-content__button-active'));

const showActiveText = (activeBtn) => {
    mainContentTextsDivs
        .forEach(div => {
            if (!div.classList.contains('hidden')) {
                div.classList.add('hidden');
            }
            const divClassListKeys = [...div.classList].join('-').split('-');
            if (divClassListKeys.includes(activeBtn.id)) {
                div.classList.remove('hidden');
            }
        })
};

showActiveText(activeBtn);

mainContentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        activeBtn.classList.remove('main-content__button-active');
        btn.classList.add('main-content__button-active');
        activeBtn = btn;
        showActiveText(activeBtn);
    })
})
