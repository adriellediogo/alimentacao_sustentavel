let conte1 = document.getElementById('conteudo1');
const conte2 = document.getElementById('conteudo2');

// Função para gerar um número aleatório dentro de um intervalo específico
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  

let numeroAleatorio = gerarNumeroAleatorio(1, 5);
console.log(numeroAleatorio);  
  
if (numeroAleatorio === 1){
    conte1.innerHTML = `<strong><h3>Smoothie de morango e banana</h3></strong>
    <img src="img/RecSmoothie.jpeg"width="250px"/>
    <h4>Ingredientes</h4>
    <ul>
        <li>2 bananas</li>
        <li>2 xícaras de chá de morangos</li>
        <li>1/3 xícara de chá de iogurte natural bem consistente</li>
        <li>Adoçante ou açúcar a gosto</li>
        <li>Gelo a gosto</li>
    </ul>   
    <div class="modopreparo">    
        <h4>Modo de Preparo</h4>
        
        <p>Em um liquidificador, coloque a banana, o morango, o iogurte, o gelo e bata bem.<br> Caso precise, adicione um pouco de água para ajudar a bater;<br>Coloque o adoçante e bata somente para misturar<br>Sirva e aproveite!</p>
    </div> `;

    conte2.innerHTML = ` <strong><h3>Baked Oats</h3></strong>
    <img src="img/RecBakedOats.jpeg" width="250px"/>
    <h4>Ingredientes</h4>
    <ul>
        <li>2 colheres de sopa de aveia</li>
        <li>1 colher de chá de cacau em pó</li>
        <li>1 banana madura</li>
        <li>60 ml de leite ou água</li>
        <li>Whey protein de chocolate a gosto</li>
        <li>1/2 colher de chá de fermento químico em pó (fermento para bolo)</li>
        <li> Pedacinhos ou gotas de chocolate meio amargo</li>
    </ul>
    <div class="modopreparo2">
        <h4>Modo de Preparo</h4>
    
        <p>Reúna todos os ingredientes;<br>
        Em uma tigela, coloque a aveia, o cacau, a banana amassadinha, a água ou o leite e o Whey. Misture bem;<br> 
        Acrescente o fermento e misture delicadamente;<br>
        Transfira metade da massa para um potinho que possa ir ao forno e recheie com o que preferir; (sugestão: chocolate amargo)<br>
        Cubra com o restante da massa, salpique algumas gotas de chocolate por cima e leve para assar em forno preaquecido a 180°C por cerca de 15 minutos para ficar cremosa, e 20 minutos para ficar com textura de bolo;<br>
        Agora é só servir. Bom apetite!<p>
    </div> `;
}

if (numeroAleatorio === 2){

    conte1.innerHTML = `<strong><h3>Crepioca com queijo e tomate</h3></strong>
    <img src="img/Reccrepioca.jpg" width="250px"/>
    <h4>Ingredientes</h4>
    <ul>
        <li>1 ovo</li>
        <li>2 colheres de sopa de tapioca</li>
        <li>1 pitada de sal</li>
        <li>1 fio de azeite de oliva</li>
        <li>2 fatias de queijo frescal (ou queijo Minas)</li>
        <li>1 colher de sopa de tomate picadinho</li>
        <li> Orégano a gosto</li>
    </ul>
    <div class="modopreparo">
        <h4>Modo de Preparo</h4>
    
        <p>Reúna todos os ingredientes;<br>
        Em um recipiente, misture o ovo, a tapioca e o sal. Misture bem;<br> 
        Em uma frigideira, aqueça o azeite, despeje a mistura de ovo e tapioca e deixe cozinhar até começar soltando do fundo da frigideira, vire e doure o outro lado;<br>
        Adicione o queijo frescal, o tomate e o orégano, tampe a frigideira e cozinhe por 1 a 2 minutos;<br>
        Depois do tempo necessário, dobre a crepioca ao meio e acomode em um prato. Sirva essa delícia e bom apetite<p>
    </div>`;

    conte2.innerHTML = `<strong><h3>Vitamina de Abacate</h3></strong>
    <img src="img/RecVitAbacate.jpg" width="250px"/>
    <h4>Ingredientes</h4>
    <ul>
        <li>1 xícara de chá de abacate cortado em cubos</li>
        <li>1 e ½ xícara de chá de leite gelado</li>
        <li>2 colheres de sopa de mel (ou outro adoçante de sua preferência)</li>
        <li>Cubos de gelo a gosto</li>
    </ul>
    <div class="modopreparo2">
        <h4>Modo de Preparo</h4>
    
        <p>Reúna todos os ingredientes;<br>
        Coloque o abacate, o leite e o mel no liquidificador e bata até atingir uma mistura homogênea;<br> 
        Transfira a vitamina para 2 copos e sirva-a com os cubos de gelo. Bom apetite!<p>
    </div> `;
}

if (numeroAleatorio === 3){
    conte1.innerHTML = `<strong><h3>Bolo de Caneca de Banana </h3></strong>
    <img src="img/RecBoloBanana.jpg" width="250px"/>
    <h4>Ingredientes</h4>
    <ul>
        <li>2 colheres de sopa de farinha de aveia</li>
        <li>1 banana madura</li>
        <li>1 ovo</li>
        <li>1 colher de chá de cacau em pó</li>
        <li>1 colher de café de fermento químico em pó (fermento para bolos)</li>
        <li>Canela em pó a gosto</li>
        <li>Granola a gosto</li>
    </ul>
    <div class="modopreparo">
        <h4>Modo de Preparo</h4>
    
        <p>Reúna todos os ingredientes do bolo de caneca de banana fit;<br>
        Na própria caneca em que for servir, bata o ovo com o auxílio de um garfo;<br> 
        Adicione o cacau, um pouco de canela e mexa bem;<br>Pique a banana direto nessa massa e mexa vigorosamente até a banana ficar amassadinha (por isso é importante que ela esteja bem madura)<br>Incorpore a farinha de aveia e a granola. Misture bem;<br>Adicione o fermento e mexa delicadamente;<br>Leve ao microondas por 2 minutos, tomando cuidado para o bolo não vazar para fora do recipiente;<br>Está pronto! Aproveite essa delícia no cafézinho da tarde. Bom apetite!<p>
    </div> `;

    conte2.innerHTML = `<strong><h3>Suco de limão com coco </h3></strong>
    <img src="img/Recsucolim.jpg" width="250px"/>
    <h4>Ingredientes</h4>
    <ul>
        <li>1 polpa de coco (coco seco)</li>
        <li>2 copos de água de coco</li>
        <li>Suco de 2 limões</li>
    </ul>
    <div class="modopreparo2">
        <h4>Modo de Preparo</h4>
    
        <p>Reúna todos os ingredientes;<br> 
        Em um liquidificador, adicione a polpa do coco, a água de coco e bata até misturar bem;<br>Coe o leite que formou e transfira novamente para o liquidificador;<br>Acrescente o suco dos limões e bata novamente;<br>Agora é só servir. Bom apetite!<p>
    </div> `;
}

if (numeroAleatorio === 4){

    conte1.innerHTML = `<strong><h3>Chips de Batata-doce e Alecrim</h3></strong>
    <img src="img/Recchips.jpg" width="250px"/>
    <h4>Ingredientes</h4>
    <ul>
        <li>3 batatas-doces</li>
        <li>1 fio de azeite de oliva</li>
        <li>Sal e pimenta-do-reino a gosto</li>
        <li>Alecrim a gosto</li>
    </ul>
    <div class="modopreparo">
        <h4>Modo de Preparo</h4>
    
        <p>Reúna todos os ingredientes do chips assado de batata-doce e alecrim;<br>
        Com o auxílio de um mandolin, corte as batatas ainda com casca em rodelas bem fininhas;<br> 
        Ajeite as fatias em uma assadeira coberta com papel-manteiga e untada com azeite. Tempere com sal e pimenta, regue com um fio de azeite, salpique alecrim por cima e leve ao forno preaquecido a 200 °C por 20 minutos ou até as fatias ficarem douradas e crocantes;<br>Retire do forno e deixe esfriar uns 5 minutinhos antes de servir, para ficarem bem crocantes. Aproveite esse petisco de dar água na boca. Bom apetite!<p>
    </div>`;

    conte2.innerHTML = `<strong><h3>Waffle de banana</h3></strong>
    <img src="img/Recwaffle.jpg" width="250px"/>
    <h4>Ingredientes</h4>
    <ul>
        <li>2 e 1/2 xícaras de chá de farinha de trigo</li>
        <li>1 colher de sopa rasa de fermento químico (fermento para bolo)</li>
        <li>1/2 xícara de chá de açúcar</li>
        <li>1 colher de sopa de margarina</li>
        <li>1 ovo</li>
        <li>1 pitada de sal</li>
        <li>1 e 1/2 xícara de chá de leite</li>
        <li>4 bananas amassadas</li>
    </ul>
    <div class="modopreparo2">
        <h4>Modo de Preparo</h4>
    
        <p>Reúna todos os ingredientes;<br> 
        Amasse as bananas com um garfo e reserve;<br>Em uma tigela, adicione a farinha, o fermento, o açúcar, a margarina, uma pitada de sal, o ovo e o leite. Mexa com um fuê até a massa ficar homogênea;<br>Adicione as bananas amassadas e mexa tudo muito bem;<br>Com o auxílio de uma concha, coloque uma porção da massa na máquina de waffle untada e asse por aproximadamente 6 a 8 minutinhos ou até ela estar cozida;<br>Sirva com o acompanhamento de sua preferência. Bom apetite!<p>
    </div>`
}

if (numeroAleatorio === 5){

    conte1.innerHTML = `<strong><h3>Pão de queijo na frigideira</h3></strong>
    <img src="img/Recpqueijo.jpg" width="250px"/>
    <h4>Ingredientes</h4>
    <ul>
        <li>1/3 de xícara de chá de queijo parmesão ralado</li>
        <li>1 ovo</li>
        <li>1/3 de xícara de chá de leite</li>
        <li>2 colheres de sopa de óleo neutro (soja, girassol ou milho)</li>
        <li>1 xícara de chá de polvilho doce</li>
        <li>Sal a gosto</li>
    </ul>
    <div class="modopreparo">
        <h4>Modo de Preparo</h4>
    
        <p>Reúna todos os ingredientes do pão de queijo de frigideira;<br> 
        Em uma vasilha, coloque todos os ingredientes e misture até formar uma massa homogênea;<br>Aqueça uma frigideira antiaderente, despeje parte da massa e frite como se fosse uma panqueca, até que as bordas fiquem douradas;<br>Repita o processo até acabar a massa;<br>Agora é só servir. Aproveite esse delicioso pão de queijo seja no café da manhã ou da tarde!<p>
    </div>`

    conte2.innerHTML = `<strong><h3>Pudim de chia</h3></strong>
    <img src="img/Recpudim.jpg" width="250px"/>
    <h4>Ingredientes</h4>
    <ul>
        <li>1 xícara de chá de leite de coco</li>
        <li>4 colheres de sopa de sementes de chia</li>
        <li>2 colheres de sopa de mel (ou qualquer adoçante a gosto)</li>
        <li>Frutas a gosto</li>
    </ul>
    <div class="modopreparo2">
        <h4>Modo de Preparo</h4>
    
        <p>Reúna todos os ingredientes;<br> 
        Em um recipiente, adicione o leite de coco, a chia, o mel e misture bem;<br>Leve para a geladeira por no mínimo 1 hora para ganhar consistência;<br>Agora é só montar: faça camadas do pudim intercalando com frutas em um potinho de vidro;<br>Leve para a geladeira e deixe por mais 4 horas, ou de um dia para o outro;<br>Agora é só servir.<p>
    </div>`
}
