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

  getCategories() {
    return this.categories
  }

}

export default new StubAPi();