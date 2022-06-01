const axios = require("axios").default;

function Cronly(apikey) {
  this.apikey = apikey;
  this.base_url = "https://cronly.app/api/";

  this.get = function (endpoint) {
    return axios.get(this.base_url + endpoint, {
      headers: {
        "Authorization": "Bearer " + this.apikey,
      }
    });
  };

  this.post = function (endpoint, data) {
    return axios.post(this.base_url + endpoint, data, {
      headers: {
        "Authorization": "Bearer " + this.apikey,
      }
    });
  }

  this.delete = function (endpoint) {
    return axios.delete(this.base_url + endpoint, {
      headers: {
        "Authorization": "Bearer " + this.apikey,
      }
    });
  }
}

Cronly.prototype.getApiKey = function () {
  return this.apikey;
};

Cronly.prototype.getAllUsers = function () {
  return this.get("users");
};

Cronly.prototype.getUser = function (id) {
  return this.get("users/" + id);
};

Cronly.prototype.getAllCertificates = function () {
  return this.get("certificates");
};

Cronly.prototype.getCertificate = function (id) {
  return this.get("certificates/" + id);
};

Cronly.prototype.deleteCertificate = function (id) {
  return this.delete("certificates/" + id);
};

Cronly.prototype.createCertificate = function (hostname, port = 443, projectId = null) {

  if (hostname == null || hostname == "") {
    return Promise.reject(new Error("hostname is required"));
  }

  let data = {
    hostname: hostname,
    port: port,
    project_id: projectId
  }
  return this.post("certificates", data);
};

Cronly.prototype.getCompany = function () {
  return this.get("companies");
};

Cronly.prototype.getAllNotifications = function (page = 1, perPage = 10) {
  return this.get("notifications" + "?page=" + page + "&per_page=" + perPage);
};

Cronly.prototype.getMonitor = function (id) {
  return this.get("monitors/" + id);
};

Cronly.prototype.getAllMonitors = function () {
  return this.get("monitors");
};

Cronly.prototype.deleteMonitor = function (id) {
  return this.delete("monitors/" + id);
};

Cronly.prototype.createMonitor = function (name, timezone, schedule, duration, projectId = null) {

  //if name, timezone, schedule or duration is null or empty, reject
  if (name == null || name == "") {
    return Promise.reject(new Error("name is required"));
  }
  if (timezone == null || timezone == "") {
    return Promise.reject(new Error("Timezone is required"));
  }
  if (schedule == null || schedule == "") {
    return Promise.reject(new Error("Schedule is required"));
  }
  if (duration == null || duration == "") {
    return Promise.reject(new Error("Duration is required"));
  }

  let data = {
    name: name,
    timezone: timezone,
    schedule: schedule,
    duration: duration,
    project_id: projectId
  }

  return this.post("monitors", data);
};

//get all projects
Cronly.prototype.getAllProjects = function () {
  return this.get("projects");
};

//get project by id
Cronly.prototype.getProject = function (id) {
  return this.get("projects/" + id);
};

// delete project by id
Cronly.prototype.deleteProject = function (id) {
  return this.delete("projects/" + id);
};

//create project
Cronly.prototype.createProject = function (name) {

  if (name == null || name == "") {
    return Promise.reject(new Error("name is required"));
  }

  let data = {
    name: name,
  }

  return this.post("projects", data);
};




module.exports = Cronly;
