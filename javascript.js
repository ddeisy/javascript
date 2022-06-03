let Caneta = [];
let Marcador = [];
let kitEscolar  = [];
function adicionar(materiais, material) { 
    materiais.push(material);
}
function alterar(materiais, material, id) {
    materiais[id] = material
}
function deletar(materiais, id) {
    materiais.splice(id, 1)
}
function listar(materiais) {
    return materiais
}
function controlar_lista(materiais) {
    materiais = listar(materiais);
    mostrar_lista(materiais)
}
function mostrar_cadastro() {
    alert('cadastrar') 
    let nome = prompt('Nome do produto');
    let valor = parseInt(prompt('Preço do produto'));
    let descrição = prompt('Descrição do produto ');
    let material = {
        nome: nome,
        valor: valor,
        descrição: descrição 
    };
    return material
}
function mostrar_edicao() {
    let id = parseInt(prompt('Qual id quer editar?'))
    let material = materiais[id]
    let nome = prompt(`Qual nome do produto? [${material.nome}]`); 
    if (nome == '') {
        nome = material.nome        
    } 
    let valor = prompt(`Preço do produto [${material.valor}]`);
    if (valor == '') {
        valor = material.valor        
    } 
    let descrição = prompt(`Descrição do produto [${material.descrição}]`);
    if (descrição == '') {
        descrição = material.descrição        
    }
    let materialNovo = {
        nome: nome,
        valor: valor,
        descrição: descrição
    };
    return [materialNovo, id]
    
}
function mostrar_delete() {
    let id = parseInt(prompt('Qual id quer apagar?'))
    return id 
}

function cadastrar(materiais) {
    let material = mostrar_cadastro()
    adicionar(materiais, material)
}
//model
function mostrar_lista(materiais) {
    //view
    alert('listar')
    let mensagem = '';
    let id = 0;
    for (let material of materiais) {
        mensagem += id + ' : ' + material['nome'] + ' - ' + material.valor + ' : ' + material.descrição + '\n';
        id++ ;
    }
    alert(mensagem);
}   
function editar(materiais) {
    controlar_lista(materiais)
    //control and view
    let [materialNovo, id] = mostrar_edicao()
    
    //model
    alterar(materiais, materialNovo, id)
    
}  
function apagar(materiais) {
    controlar_lista(materiais)
    //control and view
    let id = mostrar_delete() 
    //model
    deletar(materiais, id)
    
}
function menu() {
    loop:
        while (true) {
            //view
            alert('1-Cadastrar Caneta\n2-Listar Caneta\n3-Cadastrar Marcador\n4-Listar Marcador\n5-Cadastrar KIT Escolar\n6Listar KIT Escolar\n7-Editar\n8-Apagar\n9-Sair');
            //control and view
            opcao = prompt('');
            //control
            switch (opcao) {
                case '1': 
                    cadastrar(Caneta)
                    break
                case '2': 
                    controlar_lista(Caneta)
                    break
                case '3':
                    cadastrar(Marcador)
                    break
                case '4':
                    controlar_lista(Marcador)
                    break      
                case '5':
                    cadastrar(kitEscolar)
                    break   
                case '6':
                    controlar_lista(kitEscolar)
                    break   
                case '7':
                    editar(Caneta)
                    break
                case '8':
                    apagar(Caneta)
                    break          
                case '9': 
                    alert('sair')
                    break loop;
            }
        }
}