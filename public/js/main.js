"use strict";var sliderItem=document.querySelectorAll(".slider__item"),sliderItemC=document.querySelectorAll(".slider__item-container"),sliderLine=document.querySelectorAll(".slider__item-line"),sliderImage=document.querySelectorAll(".slider__image"),sliderItemFunc=function(e){sliderImage.forEach(function(e){return e.classList.remove("is-image-visible")}),sliderImage[e].classList.add("is-image-visible"),sliderItemC.forEach(function(e){return e.classList.remove("is-icon-selected")}),sliderItemC[e].classList.add("is-icon-selected"),sliderLine.forEach(function(e){return e.classList.remove("is-line-selected")}),sliderLine[e].classList.add("is-line-selected"),sliderItem.forEach(function(e){return e.classList.remove("is-item-selected")}),sliderItem[e].classList.add("is-item-selected")},runSlider=function(){var e=0;setInterval(function(){sliderItemFunc(++e),3<=e&&(e=-1)},4e3)},mainFunc=function(){runSlider()};window.addEventListener("load",mainFunc);