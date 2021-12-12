function cleanData()
{
  let input = document.getElementById("texto_original").value;
  let lixo = document.getElementById("lixo").value;
  var output = input.split(lixo).join('');

  document.getElementById("texto_filtrado").innerHTML = output;
}

function Copy()
{
  let copiarTexto = document.getElementById("texto_filtrado");

  navigator.clipboard.writeText(copiarTexto.innerHTML);
}

function Reset()
{
  document.getElementById("texto_filtrado").innerHTML = '';
}