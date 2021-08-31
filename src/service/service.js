import axios from 'axios';

const API_URL = 'http://crudapp-env.eba-w7ihp7eu.us-east-2.elasticbeanstalk.com/api/';

class EventService {
    caller(options, callback, errorCallback) {
        options.headers = { "content-type": "application/json" }

        var data = null;
        const url = API_URL + options.url;
        axios(url, options)
            .then(function (response) {
                data = response;
                callback(data);
            })
            .catch(function (error) {
                errorCallback(error);
            });

    }

    
// handlers
    getUsers(options, callback, errorCallback) {
        options.url = "users/";
        options.method = "GET";
        this.caller(options, callback, errorCallback);
    } 


}

export default new EventService();