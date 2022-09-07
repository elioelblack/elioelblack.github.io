// Evitar recargar al momento de enviar el formulario
document.getElementById('confirmacion_form').addEventListener('submit', function (event) {
    // Se evita recargar la página web después de enviar el formulario.
    event.preventDefault();
    let input = document.getElementById('form_code').value;
    cargarDatos(input)
});

document.getElementById('sendForm').addEventListener('submit', function (event) {
    // Se evita recargar la página web después de enviar el formulario.
    event.preventDefault();
    let input = document.getElementById('form_code').value;
    saveDatos(input)
});

document.addEventListener("DOMContentLoaded", function () {
    createCode();
    setInterval(()=>{
        setTimeToWedding();
    },1000);
    setInvitationCode();
});

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] === variable) {
            return pair[1];
        }
    }
    return undefined;
}

function setTimeToWedding(){
    var fecha1 = moment(new Date());
    var fecha2 = moment('2022-10-22 18:45:00');

    document.getElementById('dias').innerHTML  = fecha2.diff(fecha1, 'day');
    document.getElementById('horas').innerHTML  = fecha2.diff(fecha1, 'hours');
    document.getElementById('minutos').innerHTML  = fecha2.diff(fecha1, 'minutes');
}

function setInvitationCode(){
    let code = getQueryVariable("code");
    if(code!==undefined){
        document.getElementById('form_code').value = code;
        document.getElementById('confirm_first').classList.remove('display');
    }
}

// Funcion para ocultar el boton del primer input en caso este vacio
function createCode () {
    let inputCode = document.getElementById('form_code');
    let button = document.getElementById('confirm_first');
    if (inputCode.value == '') {
        button.classList.add('display')
    }
    inputCode.addEventListener('input', e => {
        button.classList.remove('display')
        if (inputCode.value == '') { button.classList.add('display') }
    });
}

function controlForm(back, next) {
    document.getElementById(back).classList.add('display');
    document.getElementById(next).classList.remove('display');
}

const cargarDatos = async (code) => {
    let loading = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Buscando...';
    document.getElementById('confirm_first').disabled = true;
    document.getElementById('confirm_first').innerHTML = loading;
    const respuesta = await fetch(`https://api-wedding-api.herokuapp.com/v1/personamesa/search?code=${code}`)
    const datos = await respuesta.json();
    let content = '';
    if (datos[0]) {
        controlForm('first','confirmacion_dv');
        document.getElementById('cantidad').innerHTML = datos.length;
        let i = 0;
        datos.forEach(element => {
            i++;
            (element.confirmado == true) ? ck = 'checked' : ck = '';
            content += `
            <input class="form-check-input mb-3" type="checkbox" id="${i}" ${ck}>
            <label class="form-check-label mb-3" for="flexCheckDefault">${element.idPersona.nombres + ' ' + element.idPersona.apellidos}</label>
            <br>`;
            document.getElementById('mesa').innerHTML = 'Invitados (Estarán en '+element.idMesa.nombre+')'
        });
        document.getElementById('lista_check').innerHTML = content;
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Uups!',
            text: 'Verifica que el codigo de tu invitación este correcto',
        })
    }
    document.getElementById('confirm_first').disabled = false;
    document.getElementById('confirm_first').innerHTML = 'Buscar';
}

const saveDatos = async (code) => {
    const respuesta = await fetch(`https://api-wedding-api.herokuapp.com/v1/personamesa/search?code=${code}`)
    const datos = await respuesta.json();
    if (datos[0]) {
        let i = 0;
        datos.forEach(element => {
            i++;
            element.confirmado = document.getElementById(i).checked;
        });
        saveRow(datos);
    }
}

function saveRow(data) {
    let loading = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Enviando confirmación...';
    document.getElementById('btn-send-confirm').disabled = true;
    document.getElementById('btn-send-confirm').innerHTML = loading;
    if(validateCheck()){
        fetch("https://api-wedding-api.herokuapp.com/v1/personamesa/confirm", {
            method: "post",
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{ 'Content-Type': 'application/json' }
        }).then(function (request) {
            request.json().then(function (response) {
                console.log(response);
                if (response[0]) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Listo!',
                        text: 'Gracias por acompañarnos en esta fecha tan especial',
                    });
                    controlForm('lista_dv','first');
                }
            });
        });
    }else{
        Swal.fire({
            icon: 'warning',
            title: 'Uups!',
            text: 'Selecciona al menos un invitado a confirmar.',
        });
    }
    document.getElementById('btn-send-confirm').disabled = false;
    document.getElementById('btn-send-confirm').innerHTML = 'Confirmar';
}

function validateCheck(){
    var formulario = document.getElementById('sendForm');
    let contador = 0;
    for(var i = 0; i < formulario.elements.length - 1 ; i++) {
        console.log(formulario.elements[i].cheked)
        if (formulario.elements[i].type === "checkbox" && formulario.elements[i].checked === true){
            contador++;
        }
    }
    if(contador<1){
        return false;
    }else{
        return true;
    }
}

