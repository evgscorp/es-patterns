import {AbstractRulerFactory} from 'AbstractRulerFactory.js'
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
     */
    complaintPresented(cLevel) {
        if (cLevel < this.COMPLAINT_THRESHOLD) {
            this.aRulerFactory.getHandOfTheKing().makeDecision();
        } else {
            this.aRulerFactory.getKing().makeDecision();
        }
    }
}