const questionContainer1 = document.querySelector('.question_container_1')
const questionContainer2 = document.querySelector('.question_container_2')
const questionContainer3 = document.querySelector('.question_container_3')
const questionContainer4 = document.querySelector('.question_container_4')
const questionContainer1Img = document.querySelector('.question_container_1 img')
const questionContainer2Img = document.querySelector('.question_container_2 img')
const questionContainer3Img = document.querySelector('.question_container_3 img')
const questionContainer4Img = document.querySelector('.question_container_4 img')
const paragraphe1 = document.querySelector('.paragraphe_1')
const paragraphe2 = document.querySelector('.paragraphe_2')
const paragraphe3 = document.querySelector('.paragraphe_3')
const paragraphe4 = document.querySelector('.paragraphe_4')

isClosed = true

questionContainer1.addEventListener('click', ()=>{
    if(isClosed){
        paragraphe1.style.display = 'none';
        questionContainer1Img.src = 'assets/images/icon-plus.svg';
    }else{
        paragraphe1.style.display = 'block';
        questionContainer1Img.src = 'assets/images/icon-minus.svg';
    }

    isClosed = !isClosed
})

questionContainer2.addEventListener('click', ()=>{
    if(isClosed){
        paragraphe2.style.display = 'none';
        questionContainer2Img.src = 'assets/images/icon-plus.svg';
    }else{
        paragraphe2.style.display = 'block';
        questionContainer2Img.src = 'assets/images/icon-minus.svg';
    }

    isClosed = !isClosed
})

questionContainer3.addEventListener('click', ()=>{
    if(isClosed){
        paragraphe3.style.display = 'none';
        questionContainer3Img.src = 'assets/images/icon-plus.svg';
    }else{
        paragraphe3.style.display = 'block';
        questionContainer3Img.src = 'assets/images/icon-minus.svg';
    }

    isClosed = !isClosed
})

questionContainer4.addEventListener('click', ()=>{
    if(isClosed){
        paragraphe4.style.display = 'none';
        questionContainer4Img.src = 'assets/images/icon-plus.svg';
    }else{
        paragraphe4.style.display = 'block';
        questionContainer4Img.src = 'assets/images/icon-minus.svg';
    }

    isClosed = !isClosed
})