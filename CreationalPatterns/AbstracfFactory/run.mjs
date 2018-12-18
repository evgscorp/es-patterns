'use strict';
import {LannisterFactory} from './LannisterFactory.mjs';
import {CourtSession} from './CourtSession.mjs';

let courtSession1 = new CourtSession(new LannisterFactory());
console.log(courtSession1.complaintPresented(8));
console.log(courtSession1.complaintPresented(10));