function somar()
{
    let resultado = Number(valor1.value) + Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é = "+resultado+"</h4>"

}
function subtrair()
{
    let resultado = Number(valor1.value) - Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é = "+resultado+"</h4>"

}
function multiplicar()
{
    let resultado = Number(valor1.value) * Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é = "+resultado+"</h4>"
}

function dividir()
{
    let resultado = Number(valor1.value) / Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é = "+resultado+"</h4>"
}
