const cloneData = Symbol("cloneData");

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[cloneData] = {};
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const clonedCar = new this.constructor(
      this._brand,
      this._motor,
      this._color
    );
    clonedCar[cloneData] = {};
    return clonedCar;
  }
}
