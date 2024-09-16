const scriptURL = ''

const form = document.forms['confirmation']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scruptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you for purchasing! :)" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})