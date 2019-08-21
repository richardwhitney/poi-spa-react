import _ from "lodash";
import axios from 'axios';

class StubAPi {
  constructor() {
    this.points = [];
    this.categories = [];
  }

  login(email, password) {
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
    const response = await  axios.get(`http://localhost:3002/api/points/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('poi-jwt')}`
      }
    });
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

  async addPoint(name, description, categoryid) {
    const userRes = await axios.get(`http://localhost:3002/api/users/current`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('poi-jwt')}`
      }
    });
    const currentUser = await userRes.data;
    const point = {
      name: name,
      description: description,
      addedBy: currentUser
    };
    const response = await axios.post(`http://localhost:3002/api/categories/${categoryid}/points`, point, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('poi-jwt')}`
      }
    });
    const newPoint = await response.data;
    this.points.push(newPoint);
    console.log(`Point added: ${JSON.stringify(newPoint)}`);
  }

  async updatePoint(id, name, description, location) {
    const userRes = await axios.get(`http://localhost:3002/api/users/current`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('poi-jwt')}`
      }
    });
    const currentUser = await userRes.data;
    const point = {
      name: name,
      description: description,
      addedBy: currentUser,
      geo: {
        lat: '0',
        lng: '0'
      }
    };
    const response = await axios.put(`http://localhost:3002/api/points/${id}`, point, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('poi-jwt')}`
      }
    });
    console.log(`Point updated: ${response.data}`);
  }

  updatePointLocal(id, name, description, category) {
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

  async deletePoint(id) {
    const response = await axios.delete(`http://localhost:3002/api/points/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('poi-jwt')}`}});
    this.points.length = 0;
    await this.getPoints();
  }

  async getCategories() {
    const response = await axios.get('http://localhost:3002/api/categories');
    const categories = await response.data;
    this.categories = categories;
    return this.categories;
  }

}

export default new StubAPi();