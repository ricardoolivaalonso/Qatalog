/*===== Variables ==== */
/*=====================*/
let sliderItem = document.querySelectorAll('.slider__item')
let sliderItemC = document.querySelectorAll('.slider__item-container')
let sliderLine = document.querySelectorAll('.slider__item-line')
let sliderImage = document.querySelectorAll('.slider__image')
/*===== Functions ==== */
/*=====================*/
let sliderItemFunc = (counter) => {

    sliderImage.forEach( i => i.classList.remove('is-image-visible') )
    sliderImage[counter].classList.add('is-image-visible')

    sliderItemC.forEach( i => i.classList.remove('is-icon-selected') )
    sliderItemC[counter].classList.add('is-icon-selected')

    sliderLine.forEach( i => i.classList.remove('is-line-selected') )
    sliderLine[counter].classList.add('is-line-selected')

    sliderItem.forEach( i => i.classList.remove('is-item-selected') )
    sliderItem[counter].classList.add('is-item-selected')
}
let runSlider = () => {
    let counter = 0;
    setInterval(changeSlider, 4000);

    function changeSlider() {
        counter++
        sliderItemFunc(counter)
        if (counter >= 3) counter = -1
    }
}
/*===== Triggers ==== */
/*=====================*/
let mainFunc = () => {
    runSlider()
}
/*===== Main ==== */
/*=================*/
window.addEventListener('load', mainFunc)
