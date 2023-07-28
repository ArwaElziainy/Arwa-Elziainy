//navigation bar active links
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container-fluid .collapse ul li');



window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 5)){
            current = section.getAttribute('id');

        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
   
})
//progress bars in skills section
const container = document.querySelector('.progress-bars');
const progress = document.querySelectorAll('.progress');
const percentage = document.querySelectorAll('.percentage');

let bol = false;
let count;

window.addEventListener("scroll", () => {
    if (pageYOffset > container.offsetTop - 400 && bol === false) {
        for (let i = 0; i < progress.length; i++) {
            percentage.innerText = 0;
            count = 0;

            const data = parseInt(progress[i].dataset.count);

            progress[i].style.transition = "width " + (data * 70) + "ms";
            progress[i].style.width = data + "%";

            function updateCount() {
                if (count < data) {
                    count++;
                    percentage[i].innerText = count + "%";
                    setTimeout(updateCount, 50);
                } else {
                    percentage[i].innerText = data + "%";
                }
            }
            updateCount();
            bol = true;
        }
    }
});

//Send a mail
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("clicked");

    let ebody = `
<b> Name: </b> ${name.value}
<br>
<b> Phone: </b> ${phone.value}
<br>
<b> Email: </b> ${email.value}
<br>
<b> Subject: </b> ${subject.value}
<br>
<b> Message: </b> ${message.value}
` 
    
Email.send({
    SecureToken : "2291efbd-9384-4291-838a-f81eb1eb340a",
    To : 'arwa.ziainy@gmail.com',
    From : "arwa.ziainy@gmail.com",
    Subject : subject.value,
    Body: ebody
}).then(
  message => alert("Your message has been sent")
    ); 
})
