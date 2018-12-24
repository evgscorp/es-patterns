class PintBarreCalc {
    static calculateNumberNeeded(volume, literBarrelCalc) {
        return Math.ceil(literBarrelCalc.calculateNumberNeeded(volume) * 0.57);
    }
}

module.exports = PintBarreCalc;