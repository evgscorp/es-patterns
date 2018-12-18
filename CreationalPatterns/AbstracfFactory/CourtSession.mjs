import {AbstractRulerFactory} from './AbstractRulerFactory.mjs'
export class CourtSession {
    /**
     *Creates an instance of CourtSession.
     * @param {AbstractRulerFactory} aRulerFactory
     * @memberof CourtSession
     */
    constructor(aRulerFactory) {
        this.aRulerFactory = aRulerFactory;
        this.COMPLAINT_THRESHOLD = 10;
    }
    /**
     * @param {number} cLevel
     * @memberof CourtSession
     * @returns {string} 
     */
    complaintPresented(cLevel) {
        if (cLevel < this.COMPLAINT_THRESHOLD) {
           return this.aRulerFactory.getHandOfTheKing().makeDecision();
        } else {
           return this.aRulerFactory.getKing().makeDecision();
        }
    }
}