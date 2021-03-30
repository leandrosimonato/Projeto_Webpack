webpackJsonp([0],{

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegociacaoService", function() { return NegociacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__ = __webpack_require__(4);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





let NegociacaoService = class NegociacaoService {

    constructor() {

        this._http = new __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__["a" /* HttpService */]();
    }

    obtemNegociacoesDaSemana() {

        return this._http.get(`${"http://localhost:3000"}/negociacoes/semana`).then(dados => dados.map(objeto => new __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__["a" /* Negociacao */](new Date(objeto.data), objeto.quantidade, objeto.valor)), err => {

            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações da semana');
        });
    }

    obtemNegociacoesDaSemanaAnterior() {

        return this._http.get(`${"http://localhost:3000"}/negociacoes/anterior`).then(dados => dados.map(objeto => new __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__["a" /* Negociacao */](new Date(objeto.data), objeto.quantidade, objeto.valor)), err => {

            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações da semana anterior');
        });
    }

    obtemNegociacoesDaSemanaRetrasada() {

        return this._http.get(`${"http://localhost:3000"}/negociacoes/retrasada`).then(dados => dados.map(objeto => new __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__["a" /* Negociacao */](new Date(objeto.data), objeto.quantidade, objeto.valor)), err => {
            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações da semana retrasada');
        });
    }

    obtemNegociacoesDoPeriodo() {
        var _this = this;

        return _asyncToGenerator(function* () {

            try {
                let periodo = yield Promise.all([_this.obtemNegociacoesDaSemana(), _this.obtemNegociacoesDaSemanaAnterior(), _this.obtemNegociacoesDaSemanaRetrasada()]);
                return periodo.reduce(function (novoArray, item) {
                    return novoArray.concat(item);
                }, []).sort(function (a, b) {
                    return b.data.getTime() - a.data.getTime();
                });
            } catch (err) {
                console.log(err);
                throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações do período');
            };
        })();
    }
};

/***/ })

});