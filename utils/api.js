var axios = require('axios');

module.exports = {
  getStatus: function (ip_address) {
    return axios.get('http://localhost:5000/' + ip_address + '/status')
      .then(function (data) {
        return data.data;
      });
  },
  getInfo: function (ip_address) {
    return axios.get('http://localhost:5000/' + ip_address + '/info')
      .then(function (data) {
        return data.data;
      });
  },
   getProgress: function (ip_address) {
    return axios.get('http://localhost:5000/' + ip_address + '/progress')
      .then(function (data) {
        return data.data;
      });
  },
   getTemp: function (ip_address) {
    return axios.get('http://localhost:5000/' + ip_address + '/temp')
      .then(function (data) {
        return data.data;
      });
  }
};
