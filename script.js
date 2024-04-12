//IMC
// 1.capturar valores
// 2. calcular o IMC - em 
// 3.gerar classificação do IMC
// 4.organizar as informaçoes
// 5.salvar os dados na lista
// 6.ler a lista com os dados
// 7.renderizar o conteudo no html(tabela)
// 8.botao de limpar os registros (clear(LocalStorage))




function CapturarValores(){
    const nome = document.getElementById('name').value;
    const altura=document.getElementById('height').value;
    const peso = document.getElementById('weight').value;
    const dadosUsuario = {
        nome:nome,
        altura:altura,
        peso:peso,
    }
    return dadosUsuario;
}
function CalcularImc(altura,peso){
    const imc =peso/(altura*altura)
    return imc
}
function ClassificarImc(imc){
    if (imc<18.5){
        return "abaixo do peso"
            }else if (imc < 25){
                return "peso normal"
            }else if (imc < 30){
                return "sobrepeso"
            }else {
                return "obesidade"
            }
}
function OrganizarDados (dadosUsuario,valorImc,classificaçãoImc){
    const dataHoraAtual = Intl.DateTimeFormat('pt-BR',{timeStyle: 'long',dateStyle:'short'}).format(Date.now());
    const dadosUsuarioCompleto={
        ...dadosUsuario,
        imc:valorImc.toFixed(2),
        classificaçãoImc:classificaçãoImc,
        dataCadastro:dataHoraAtual
    }
    return dadosUsuarioCompleto;
}