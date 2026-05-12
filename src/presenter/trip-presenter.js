import {render} from '../render.js';
import FilterView from '../view/filter.js';
import SortView from '../view/sort.js';
import ListView from '../view/list.js';
import PointView from '../view/point.js';
import PointEditView from '../view/point-edit.js';
import PointNewView from '../view/point-new.js';

export default class TripPresenter {
  constructor({filterContainer, tripEventsContainer, tripModel}) {
    this.filterContainer = filterContainer;
    this.tripEventsContainer = tripEventsContainer;
    this.tripModel = tripModel;
    this.tripEventsListComponent = new ListView();
  }

  getPointDestination(point) {
    return this.tripModel.getDestinations().find((destination) => destination.id === point.destination);
  }

  getPointOffers(point) {
    return this.tripModel
      .getOffers()
      .filter((offer) => offer.type === point.type && point.offers.includes(offer.id));
  }

  init() {
    const points = this.tripModel.getPoints();
    const destinations = this.tripModel.getDestinations();
    const offers = this.tripModel.getOffers();

    render(new FilterView(), this.filterContainer);
    render(new SortView(), this.tripEventsContainer);
    render(this.tripEventsListComponent, this.tripEventsContainer);

    const tripEventsListElement = this.tripEventsListComponent.getElement();
    const firstPoint = points[0];

    render(new PointEditView({
      point: firstPoint,
      destinations,
      offers,
    }), tripEventsListElement);

    render(new PointNewView({
      destinations,
      offers,
    }), tripEventsListElement);

    points.forEach((point) => {
      render(new PointView({
        point,
        destination: this.getPointDestination(point),
        offers: this.getPointOffers(point),
      }), tripEventsListElement);
    });
  }
}
