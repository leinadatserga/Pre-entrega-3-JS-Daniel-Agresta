let nombre = "DANIEL";
let apellido = "AGRESTA";
let cargo;
let horasTotales=parseInt (0);
let mensualidad=parseFloat (0);
let sueldoCargo=parseFloat (0);
let resultado;
let empId;




let arrayImpo = JSON.parse(localStorage.getItem("LSempleados"));
    console.log(arrayImpo);

/*const botonI = document.getElementById("ingreso");
botonI.addEventListener("click", ()=>{
});*/
function ingClv(){
const formulario = document.getElementById("form1");
    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        const cl = document.getElementById("clave");
        if (cl.value=="34"){saludar()}
        else {alert("Error de Contraseña. Intenta de nuevo.")};
    });
    formulario.reset();
    borraSaludar();
}
function saludar(){
    let parrafo = document.getElementById("saludo");
    parrafo.innerHTML = "Hola "+nombre+" "+apellido+", es un gusto tenerte por aquí!"+"<br>"+"<br>";
    parrafo.innerHTML += "Para saber a cuanto asciende lo generado en el mes, deberás completar los datos a continuación:"+"<br>"+"<br>";
}
function borraSaludar(){
    let parrafo = document.getElementById("saludo");
    parrafo.innerHTML = "";
}
function insertaForm(){
    let clv = document.querySelector('#entrada');
    clv.innerHTML = `<form id="form1">
                        <label for="clave">Clave única de acceso personal:</label>
                        <input type="number" name="clave" id="clave" required min="1" max="50">
                    </form>`;
ingClv();
}