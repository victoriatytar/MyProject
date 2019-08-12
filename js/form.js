document.querySelector('form').addEventListener('submit', sendForm);

function sendForm(event) {
    var formData = {
        phone: document.querySelector('input[name="phone"]').value,
        name: document.querySelector('input[name="name"]').value,
        useremail: document.querySelector('input[name="useremail"]').value,
        childname: document.querySelector('input[name="childname"]').value,
        childage: document.querySelector('input[name="childage"]').value,
        daterange: document.querySelector('select[name="daterange"]').value,
    };
    event.preventDefault();
    if (formData.phone=="" || formData.name=="" || formData.useremail=="" || formData.childname=="" || formData.childage=="" || formData.daterange=="") {
        alert("Заповніть, будь ласка, усі поля форми.");
        return;
    }
    var fetchOptions = {
        method: "POST",
        body: JSON.stringify(formData),
    }
    fetch("https://formspree.io/victoria.tytar@gmail.com", fetchOptions)
    .then(onFetchResult);
}
function onFetchResult(result){
    if (result.status==200) {
        alert('Дякуємо, ми з Вами незабаром сконтактуємося!');
        document.querySelector('form').reset();
    }
    else {
        alert('Сталася технічна помилка, спробуйте пізніше.')
    }

}