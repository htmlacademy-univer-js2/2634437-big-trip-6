import TripModel from './model/trip-model.js';
import TripPresenter from './presenter/trip-presenter.js';

const filterContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const tripModel = new TripModel();

const tripPresenter = new TripPresenter({
  filterContainer,
  tripEventsContainer,
  tripModel,
});

tripPresenter.init();
