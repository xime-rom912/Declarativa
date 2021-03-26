const change = () => {
    let value = document.getElementById("value");
    uno.innerHTML = value.value.split('');
    dos.innerHTML = value.value.split('').reverse();
    tres.innerHTML = value.value.split('').reverse().join('');
}