const formItems = document.querySelectorAll('.form-item');
const submit = document.querySelector('.submit-form')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    formItems.forEach(even => {
       if (!even.value && !even.innerHTML) {
           even.classList.add('error')
           console.log(even.innerHTML)
       }
       else{
           even.classList.remove('error')
       }
    })
})

