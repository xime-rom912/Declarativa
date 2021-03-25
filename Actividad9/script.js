let lista = document.getElementById("lista");

let values = [];

const getValue = () => values.map(value =>  {
    let componentLi = document.createElement("li");
    componentLi.innerHTML = value;
    lista.appendChild(componentLi);
})
const addValue = () => {
    let value = document.getElementById("value");
    lista.innerHTML = "";
    values.push(value.value);
    console.log(values);
    getValue();
    value.value = "";
}
const cleanValues = () =>{
    lista.innerHTML = "";
    values = [];
}
getValue();