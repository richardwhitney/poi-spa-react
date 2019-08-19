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
  }

  getPointLocal(id) {
    let index = _.findIndex(
      this.points,
      point => `${point._id}` === id
    );
    if (index !== -1) {
      return this.points[index];
    }
    return null
  }

  async getPoint(id) {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const response = await  axios.get(`http://localhost:3002/api/points/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('poi-jwt')}`}});
    const point = await response.data;
    console.log(JSON.stringify(point));
    return point;
  }

  addPointLocal(name, description, category) {
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


  async addPoint(name, description, categoryid, user) {
    const point = {
      name: name,
      description: description,
      addedBy: user,
      geo: []
    };
    /*
    const response = await axios.post(`http://localhost:3002/api/${categoryid}/points`, {
      point
    });
    */

    const response = fetch(`http://localhost:3002/api/${categoryid}/points`, {
      method: 'post',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(point)
    });
    console.log(response);
    const newPoint = await response.data;
    //newPoint.geo = point.geo;
    this.points.push(newPoint);
    console.log(`Point added: ${JSON.stringify(newPoint)}`);
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