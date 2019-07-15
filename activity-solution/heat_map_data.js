"use strict";
exports.__esModule = true;
var _ = require("lodash");
var jon;
jon = {
    batterHotZones: [[12.2, -3], [10.2, -5], [3, 2]],
    pitcherHotZones: [[3, 2], [-12.2, 3], [-10.2, 5]]
};
exports.findMatch = function (batterHotZones, pitcherHotZones) {
    return _.intersectionWith(batterHotZones, pitcherHotZones, _.isEqual); //?
};
jon.coordinateMap = exports.findMatch(jon.batterHotZones, jon.pitcherHotZones); //?
exports.findMatch(jon.batterHotZones, jon.pitcherHotZones);
exports.data = jon;
