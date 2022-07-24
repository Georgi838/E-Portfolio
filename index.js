//template_jgt4zxr
//service_3a0k4rl
//h1-VFtZsoIiGTKA0k

function contact(event){
    // event.preventDefault();
    // const loading = document.querySelector('.modal__overlay--loading')
    // const success = document.querySelector('.modal__overlay--success')
    // loading.classList += (" modal__overlay--visible");
    // emailjs
    // .sendForm(
    //     'service_w2l71ih',
    //     'template_jgt4zxr',
    //     event.target,
    //     'h1-VFtZsoIiGTKA0k'
    // ).then(() => {
    //     loading.classList.remove('modal__overlay--visible')
    //     success.classList += (' modal__overlay--visible');
    // }).catch(() => {
    //     loading.classList.remove('modal__overlay--visible')
    //     alert("Something went wrong.Please contact me on ivanovgeorgi165@gmail.com")
    // })
   
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


