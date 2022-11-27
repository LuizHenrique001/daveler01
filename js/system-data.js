let vendas = document.querySelector('p#vendas_feitas')
let totalVendido = document.querySelector('p#total_faturamento')
let faturamentoMostrar = document.querySelector('p#faturamento_mensal')


const dadosDaveler = [
    {
        nome: '@indianobjj17',
        horario: '21H46',
        data: '3/10/22',
        pedidoEfetuado: '200 seguidores',
        valorCompra: 2,
        seguidores: 435
    },

    {
        nome: '@indianobjj17',
        horario: '17H06',
        data: '4/10/22',
        pedidoEfetuado: '100 seguidores',
        valorCompra: 1,
        seguidores: 435
    },

    {
        nome: '@indianobjj17',
        horario: '17H06',
        data: '4/10/22',
        pedidoEfetuado: '100 curtidas',
        valorCompra: 1,
        seguidores: 435
    },

    {
        nome: '@dvx7.trem ',
        horario: '10H19',
        data: '18/10/2022',
        pedidoEfetuado: '300 seguidores',
        valorCompra: 3,
        seguidores: 397
    }
]


sistemaDadosSite = () => {
    let containerVendas = document.querySelector('div.container_vendas')
    dadosDaveler.map((value) =>{
        containerVendas.innerHTML += `
        <div class="bloco_vendas">
            <div class="div_img">
                <img src="images/logo-daveler-icon.png" alt="Icon Daveler">
            </div>
            <div class="info_venda">
                <div class="info_div_top">
                    <p id="instagram_user">
                        ${value.nome}
                    </p>
                    <p id="horario_compra">
                        ${value.horario}
                    </p>
                    <p id="data_compra">
                        ${value.data}
                    </p>
                </div>
                <hr>
                <div class="info_div_bottom">
                    <p id="pedido_user">
                        ${value.pedidoEfetuado}
                    </p>
                    <p id="valor_pedido_compra">
                        R$ ${value.valorCompra},00
                    </p>
                </div>
            </div>
        </div>`
    })
}

sistemaDadosSite()

faturamentoMensalDaveler = () => {
    let faturamentoPedido = 0

    dadosDaveler.map((val) => {
        faturamentoPedido += val.valorCompra
    })
    faturamentoMostrar.innerHTML = `R$ ${faturamentoPedido},00`
    totalVendido.innerHTML = `R$ ${faturamentoPedido},00`
}

faturamentoMensalDaveler()

// Total de vendas
let vendasPedido = 0
vendasPedido = dadosDaveler.length
vendas.innerHTML = vendasPedido

