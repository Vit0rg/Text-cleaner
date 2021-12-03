function cleanData()
{
  let input = document.getElementById("texto_original").value;
  let lixo = document.getElementById("lixo").value;
  let output = input.split(lixo).join('');

  document.getElementById("texto_filtrado").innerHTML = output;
}