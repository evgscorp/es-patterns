'use strict';
import {LannisterFactory} from 'LannisterFactory.js';
import {CourtSession} from 'CourtSession.js';

let courtSession1 = new CourtSession(new LannisterFactory());
courtSession1.complaintPresented(8);
courtSession1.complaintPresented(10);