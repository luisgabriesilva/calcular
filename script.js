function soma() {
    // puxar valor do numero digitados
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    // verificar se o valor e numero 
    if (!isNaN(numero1) && !isNaN(numero2)){
        // calcular a soma 
        let resultado = numero1 + numero2;
        // mostra o resultado
        alert(" a soma dos numero e  " + resultado)
    } else {
        alert("por favor, digite um valor valido")
    }
}
