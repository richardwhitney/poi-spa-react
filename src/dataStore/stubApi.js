import _ from "lodash";
import categoriesData from './categoryData'
import pointsData from './pointData'
import axios from 'axios';

class StubAPi {
  constructor() {
    this.points = [];
    this.categories = categoriesData;
  }

  login(email, password) {
    //'/api/users/authenticate'
    axios.post('http://localhost:3002/api/users/authenticate', {
      email: email,
      password: password
    }).then(res => localStorage.setItem('poi-jwt', res.data.token));
  }

  async getPoints() {
    const response = await axios.get('http://localhost:3002/api/points', {headers: {Authorization: `Bearer ${localStorage.getItem('poi-jwt')}`}});
    const points = response.data;
    this.points = points;
    return this.points;
    /*
    axios.get('http://localhost:3002/api/points')
      .then(res => {
        console.log(res.data);
        this.points = res.data;
      });
    return this.points;
    */
  }

  async getPoint(id) {
    const response = await  axios.get(`http://localhost:3002/api/points/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('poi-jwt')}`}});
    const point = await response.data;
    console.log(JSON.stringify(point));
    return point;
    /*
    axios.get(`http://localhost:3002/api/points/${id}`)
      .then(res => {
        //console.log(res.data);
        point = res.data;
      });
    return point;
    */
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

  deletePoint(id) {
    let elements = _.remove(this.points, point => point._id === id);
    return elements;
  }

  getCategories() {
    return this.categories
  }

}

export default new StubAPi();