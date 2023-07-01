const accSlide = document.getElementsByClassName('accordeons_button');
for (let i = 0; i < accSlide.length; i++) {
    accSlide[d1].addEventListener('click', function () {
        let box = document.querySelector('.box-column-accordeons');
        box.className = "box-column-accordeonsActive";
    })
}

const menuOpen = document.querySelector('.adaptive_menu__button');
menuOpen.addEventListener('click', function () {
    let container = document.getElementById('row');
    if (container.className == 'row') {
        container.classList.add('row_Active');
        container.classList.remove('row');
    } else {
        container.classList.add('row');
        container.classList.remove('row_Active');
    }
})


const person1 = {
    id: 1,
    user: 'John Geoffrey',
    place: 'Hexagon Builders inc, USA',
    text: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.'
}

const person2 = {
    id: 2,
    user: 'Georgy Tatarchenko',
    place: 'Kyiv, Ukraine',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English..'

}

const person3 = {
    id: 3,
    user: 'Oleg Babich',
    place: 'Kyiv, Ukraine',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.'
}

const person4 = {
    id: 4,
    user: 'Artyom Sokolcov',
    place: 'Odessa, Ukraine',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable'
}

const person5 = {
    id: 5,
    user: 'Ulanbek Moydyn Ylu',
    place: 'Bishkek, Kyrgyzstan',
    text: 'When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps..'
}



const comments = document.querySelector('.comments__content');
const commentsUser = document.querySelector('.comments-author');
const commentsUserPlace = document.querySelector('.comments-author-place');

const sliderClick = document.getElementsByClassName('slider-buttons');
for (let i = 0; i < sliderClick.length; i++) {
    sliderClick[0].addEventListener('click', function () {
        let jsonPlace = JSON.stringify(person1.place);
        let jsonText = JSON.stringify(person1.text);
        let jsonUser = JSON.stringify(person1.user)
        comments.innerHTML = jsonText;
        commentsUser.innerHTML = jsonUser;
        commentsUserPlace.innerHTML = jsonPlace;
        sliderClick[0].style.background = "#000";
        sliderClick[i].style.background = "gainsboro";
    })
    sliderClick[1].addEventListener('click', function () {
        let jsonPlace = JSON.stringify(person2.place);
        let jsonText = JSON.stringify(person2.text);
        let jsonUser = JSON.stringify(person2.user)
        comments.innerHTML = jsonText;
        commentsUser.innerHTML = jsonUser;
        commentsUserPlace.innerHTML = jsonPlace;
        sliderClick[1].style.background = "#000";
        sliderClick[i].style.background = "gainsboro";
    })
    sliderClick[2].addEventListener('click', function () {
        let jsonPlace = JSON.stringify(person3.place);
        let jsonText = JSON.stringify(person3.text);
        let jsonUser = JSON.stringify(person3.user)
        comments.innerHTML = jsonText;
        commentsUser.innerHTML = jsonUser;
        commentsUserPlace.innerHTML = jsonPlace;
        sliderClick[2].style.background = "#000";
        sliderClick[i].style.background = "gainsboro";
    })
    sliderClick[3].addEventListener('click', function () {
        let jsonPlace = JSON.stringify(person5.place);
        let jsonText = JSON.stringify(person5.text);
        let jsonUser = JSON.stringify(person5.user)
        comments.innerHTML = jsonText;
        commentsUser.innerHTML = jsonUser;
        commentsUserPlace.innerHTML = jsonPlace;
        sliderClick[i].style.background = "gainsboro";
        sliderClick[3].style.background = "#000";
    })
}
