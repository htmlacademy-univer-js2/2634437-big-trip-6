import PointEditView from './point-edit.js';

export default class PointNewView extends PointEditView {
  constructor({destinations, offers}) {
    super({
      destinations,
      offers,
      isNewPoint: true,
    });
  }
}
