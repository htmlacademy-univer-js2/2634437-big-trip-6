import {getDestinations, getOffers, getPoints} from '../mock/point.js';

export default class TripModel {
  constructor() {
    this.points = getPoints();
    this.destinations = getDestinations();
    this.offers = getOffers();
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
