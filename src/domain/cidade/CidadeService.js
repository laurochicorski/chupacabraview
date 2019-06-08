export default class CidadeService {

    constructor (http) {
        this._http = http;
    }

    buscarPorId (id) {
        return this._http.get('produto/' + id).then(res => res.body);
    }

    buscarComPaginacao (pagina, quantidade) {
        return this._http.get('produto?pagina=' + (pagina - 1) + '&qtd=' + quantidade).then(res => res.body);
    }

    buscarComFiltro (pagina, quantidade, campo, valor) {
        return this._http.get('produto?pagina=' + (pagina - 1) + '&qtd=' + quantidade + '&' + campo + '=' + valor).then(res => res.body);

    }

    salvar (cidade) {
        return this._http.post('produto', cidade).then(res => res.body);
    }

    excluir (id) {
        return this._http.delete('produto/' + id);
    }
}