"use strict"

var Shape = require("@ull-andrea-carlos/ull-andrea-carlos-shape")

module.exports = class Square extends Shape{
  constructor(options){
/**
 * Paquete npm de Square
 *
 * https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-andrea-carlos-35l1-p5
 *
 * Autores: Andrea Rodríguez Rivarés y Carlos Castro García
 *
 * Paquete npm con la clase Square
 *
 * @class Square clase square
 * @param {hash} options Ancho
 */
    super(options);
    this.width = options.width;
    this.area = 0;

    shape.Square = Square;

    this.constructor = "Square";
  }

   /**
    * @function calcular
    * @return {number} devuelve el área del círculo
    */

  calcular(){
    this.area =  Math.pow(this.width, 2);;
    return this.area;
  }
}
