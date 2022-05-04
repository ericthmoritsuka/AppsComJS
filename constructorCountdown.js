export default class Countdown {
  constructor(evento, dataFutura) {
    this.evento = evento;
    this.dataFutura = dataFutura;
  }
  get _dataAtual() {
    return new Date();
  }
  get _dataFutura() {
    return new Date(this.dataFutura);
  }
  get _diferencaDatas() {
    return this._dataFutura.getTime() - this._dataAtual.getTime();
  }
  get dias() {
    return Math.floor(this._diferencaDatas / (24 * 60 * 60 * 1000));
  }
  get horas() {
    return Math.floor(this._diferencaDatas / (60 * 60 * 1000));
  }
  get minutos() {
    return Math.floor(this._diferencaDatas / (60 * 1000));
  }
  get segundos() {
    return Math.floor(this._diferencaDatas / 1000);
  }
  get total() {
    const dias = this.dias;
    const horas = this.horas % 24;
    const minutos = this.minutos % 60;
    const segundos = this.segundos % 60;
    return {
      dias: dias,
      horas: horas,
      minutos: minutos,
      segundos: segundos,
    };
  }
}
