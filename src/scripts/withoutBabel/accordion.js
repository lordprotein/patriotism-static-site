const slideUp = (elem, content) => {
    const btn = elem.querySelector('.accordion__slideUp');

    btn.addEventListener('click', () => {
        content.classList.remove('show');
    })
}

const toggle = event => {
    const is_click_panel = event.target.matches('.accordion__panel');
    const elem = event.target.closest('.accordion');

    if (!elem || !is_click_panel) return;

    const content = elem.querySelector('.accordion__content');

    if (content.classList.contains('show')) {
        content.classList.remove('show');
    }
    else {
        content.classList.add('show');
    }
    slideUp(elem, content)

}




const handleAcc = () => {
    const accList = document.querySelectorAll('.accordion__list');

    const length = accList.length;

    for (let i = 0; i < length; i++) {
        accList[i].addEventListener('click', (event) => {
            toggle(event);
        })
    }
}

handleAcc();