class CEventDataType {
  constructor(type, unit, time, place) {
    this.type = type;
    this.unit = unit;
    this.time = time;
    this.place = place;
  }
  s;
  getType() {
    return this.type;
  }
  getUnit() {
    return this.unit;
  }
  getTime() {
    return this.time;
  }
  getPlace() {
    return this.place;
  }
}

export default CEventDataType;
