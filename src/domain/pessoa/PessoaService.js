export default class PessoaService {

    constructor (http) {
        this._http = http;
    }

    buscarPorId (id) {
        return this._http.get('parceiro/' + id).then(res => res.body);
    }

    buscarComPaginacao (pagina, quantidade) {
        return this._http.get('parceiro?pagina=' + (pagina - 1) + '&qtd=' + quantidade).then(res => res.body);
    }

    buscarComFiltro (pagina, quantidade, campo, valor) {
        return this._http.get('parceiro?pagina=' + (pagina - 1) + '&qtd=' + quantidade + '&' + campo + '=' + valor).then(res => res.body);

    }

    salvar (pessoa) {
        return this._http.post('parceiro', pessoa).then(res => res.body);
    }

    excluir (id) {
        return this._http.delete('parceiro/' + id);
    }
}