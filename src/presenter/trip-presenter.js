import {render} from '../render.js';
import FilterView from '../view/filter.js';
import SortView from '../view/sort.js';
import ListView from '../view/list.js';
import PointView from '../view/point.js';
import PointEditView from '../view/point-edit.js';
import PointNewView from '../view/point-new.js';

const POINT_COUNT = 3;

export default class TripPresenter {
  constructor({filterContainer, tripEventsContainer}) {
    this.filterContainer = filterContainer;
    this.tripEventsContainer = tripEventsContainer;
    this.tripEventsListComponent = new ListView();
  }

  init() {
    render(new FilterView(), this.filterContainer);
    render(new SortView(), this.tripEventsContainer);
    render(this.tripEventsListComponent, this.tripEventsContainer);

    const tripEventsListElement = this.tripEventsListComponent.getElement();

    render(new PointEditView(), tripEventsListElement);
    render(new PointNewView(), tripEventsListElement);

    for (let i = 0; i < POINT_COUNT; i++) {
      render(new PointView(), tripEventsListElement);
    }
  }
}
