class QuartBarreCalc {
  static calculateNumberNeeded(volume, literBarrelCalc) {
    return Math.ceil(literBarrelCalc.calculateNumberNeeded(volume) * 1.35);
  }
}

module.exports = QuartBarreCalc;