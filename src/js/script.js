//Configurando função verificar, que será ativada quando ocorrer evento de click
function contar(){
    //Variáveis que serão utilizadas
    var inicio = Number(document.getElementById("txtini").value);
    var fim = Number(document.getElementById("txtfim").value);
    var passo = Number(document.getElementById("txtpasso").value);
    var answer = document.getElementById("resposta");
    //Iniciando While
    while (1){
      answer.innerText += `${inicio} -->`
      if (inicio >= fim)
      {
        answer.innerText += `Fim`
        break;
      }
      inicio += passo;
    }

}