
function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += (" modal__overlay--visible");
    emailjs
    .sendForm(
        'service_w2l71ih',
        'template_jgt4zxr',
        event.target,
        'h1-VFtZsoIiGTKA0k'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += (' modal__overlay--visible');
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert("Something went wrong.Please contact me on ivanovgeorgi165@gmail.com")
    })
   
}
let modalOpen=false
function openMenu(){
    if(modalOpen){
        modalOpen=false;
        return document.body.classList.remove('modal--open')
    }
   
    modalOpen=true
     document.body.classList += ' modal--open';
}
let background = false;
function colorContrast(){
     background = !background;

     if(background){
         document.body.classList += " dark-theme";
     }

    else {
        document.body.classList.remove("dark-theme");
    }
}
const scaleFactor= 1/ 20;
function shapesFunction(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0;i < shapes.length;i++){
        const isOdd = i % 2 !== 0;
        const boolOdd = isOdd ? -1: 1;
        shapes[i].style.transform = `translate( ${ x * boolOdd}px, ${ y * boolOdd}px )`;
    }
}