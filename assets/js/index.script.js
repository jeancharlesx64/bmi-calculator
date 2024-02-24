var btnCalculator = document.querySelector('#btn-calcular'); //capturando o botão de calcular
var response = document.querySelector('#resposta'); // capturando a div de resposta

btnCalculator.addEventListener('click',()=>{ // click do botão
    //capturando os dados dos inputs em string
    let txtName = document.querySelector('#txt-nome').value;
    let txtHeight = document.querySelector('#txt-altura').value;
    let txtWeight = document.querySelector('#txt-massa').value;

    //verificando campos vazios
    if(txtName === '' || txtHeight === '' || txtWeight == ''){
        alert('campos vazio, tende novamente!');
    }else{
        //conversão de string para numeros
        height = Number(txtHeight); 
        weight = Number(txtWeight);

        //impedindo valor zero
        if(height < 0 || weight < 0){
            alert('Digite um valor válido, maior que zero!')
        }else{
            //calculando o IMC
            let imc = weight / (height * height);

            //mensagem de um dianóstico de acordo com o IMC
            let diagnostic;
            let status;

            if(imc < 18.5){
                diagnostic = `Você está abaixo do peso, se atente a sua saúde urgentemente!`;
                status = "vermelho";
            }else if(imc <= 24.9){
                diagnostic = `Parabéns!!! Você está no peso ideal, continue assim!`;
                status = "verde";
            }else if(imc <= 29.9){
                diagnostic = `Quase lá, você está levemente acima do ideal, tome cuidado!`;
                status = "laranja";
            }else if(imc <= 34.9){
                diagnostic = `Obesidade grau I !!! Você corre sérios riscos de saúde, não neglicencie!`;
                status = "vermelho"
            }else if(imc <= 39.9){
                diagnostic = `Obesidade grau II (Severa)!!! Você necessita rever seus hábitos, procure por um nutricionista!`;
                status = "vermelho"
            }else{
                diagnostic = `Obesidade grau III (Mórbida)!!! Você atingiu o grau máximo de perigo, procure um endrocrenologista urgentemente!`;
                status = "vermelho"
            }

            //conversão para pés(ft) e onças(oz)
            let ft = height * 3.28084;
            let oz = weight * 35.27400;
            
            //imc alternativo usando os dados convertidos
            let alternativoImc = oz / (ft*ft);

            //adicionando todos as informações na div resposta
            //IMC Alternativo Aproximado* 
            resposta.innerHTML = `
                <p class="frase">Olá <span class="bold">${txtName}</span>, Seu IMC é igual à <span class="bold">${imc.toFixed(1)}</span></p>
                <p class="diagnostico ${status}">${diagnostic}</p>
                <br>
                <ul class="imc-list">
                    <li class="imc-items">Altura em pés(ft): <span class="bold">${ft.toFixed(2)}ft</span></li>
                    <li class="imc-items">Sua massa em onças(oz): <span class="bold">${oz.toFixed(2)}oz</span></li>
                    <li class="imc-items">Seu IMC alternativo: <span class="bold">${alternativoImc.toFixed(2)} oz/ft²</span></li>
                </ul>
            `
        }
    }
})