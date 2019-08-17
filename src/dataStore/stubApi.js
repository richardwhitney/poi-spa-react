import _ from "lodash";
import categoriesData from './categoryData'
import pointsData from './pointData'

class StubAPi {
  constructor() {
    this.points = pointsData;
    this.categories = categoriesData;
  }

  getPoints() {
    return this.points;
  }

  getPoint(id) {
    let index = _.findIndex(
      this.points,
      point => `${point._id}` === id
    );
    if (index !== -1) {
      return this.points[index];
    }
    return null
  }

  addPoint(name, description, category) {
    let id = 1;
    let last = _.last(this.points);
    if (last) {
      id = last._id + 1
    }
    const point = {
      name: name,
      description: description,
      addedBy: '',
      _id: id
    };
    this.points.push(point);
  }

  updatePoint(id, name, description, category) {
    let index = _.findIndex(
      this.points,
      point => `${point._id}` === id
    );
    if (index !== -1) {
      this.points[index].name = name;
      this.points[index].description = description;
      return true;
    }
    return false;
  }

  getCategories() {
    return this.categories
  }

}

export default new StubAPi();