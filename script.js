
// let clickOn = document.querySelectorAll('.more-info');

// clickOn.forEach(function (element) {
//     element.addEventListener('click', function () {
//         document.querySelector('.more-info-col').style.display = 'flex';
//     });
// });




// let clickOff = document.querySelectorAll('.more-info-col');

// clickOff.forEach(function (element) {
//     element.addEventListener('click', function () {
//         document.querySelector('.more-info-col').style.display = 'none';
//     });
// });




let clickOn = document.querySelectorAll('.more-info');

Array.from(clickOn).map(function (element) {
    element.addEventListener('click', function () {
        document.querySelector('.more-info-col').style.display = 'flex';
    });
});


let clickOff = document.querySelectorAll('.more-info-col');

Array.from(clickOff).map(function (element) {
    element.addEventListener('click', function () {
        document.querySelector('.more-info-col').style.display = 'none';
    });
});




