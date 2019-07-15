/// <reference path="./types/HeatMapTypes.d.ts"/>
import hmt = require("HeatMapTypes");
import _ = require("lodash");

let jon: hmt.Pitcher;

jon = {
  batterHotZones: [[12.2, -3], [10.2, -5], [3, 2]],
  pitcherHotZones: [[3, 2], [-12.2, 3], [-10.2, 5]]
};

export const findMatch = (batterHotZones, pitcherHotZones) => {
  return _.intersectionWith(batterHotZones, pitcherHotZones, _.isEqual); //?
};

jon.coordinateMap = findMatch(jon.batterHotZones, jon.pitcherHotZones); //?

findMatch(jon.batterHotZones, jon.pitcherHotZones);

export const data = jon;
