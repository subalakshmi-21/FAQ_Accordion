const accButtons = document.querySelectorAll(".acc-heading");

function clickHandler() {
    this.classList.toggle('active');
    const accDesc = this.nextElementSibling;
    const plusIcon = this.querySelector('.plus-button');
    const minusIcon = this.querySelector('.minus-button');

    if(accDesc.style.maxHeight) {
        accDesc.style.maxHeight = null
        plusIcon.style.display = 'block'
        minusIcon.style.display = 'none'
        accDesc.style.paddingBottom = '0px';
    }else{
        accDesc.style.maxHeight = '200px';
        accDesc.style.paddingBottom = '25px';
        plusIcon.style.display = 'none'
        minusIcon.style.display = 'block'
       
    }
}

accButtons.forEach(btn => {
    btn.addEventListener('click', clickHandler)
})