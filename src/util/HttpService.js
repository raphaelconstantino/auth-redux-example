import * as constants from './constants';

export default class HttpService {

    static host = "https://i2x-challenge.herokuapp.com/"

    /** Default Error Handler */
    static _handleErrors(res) {
        if(!res.ok) throw new Error(res.statusText);
        return res;
    }


    /** FetchAPI for GET calls */
    static get (url) {

        return fetch(this.host + "/" + url, {
            headers : {
                'Authorization': `JWT ${localStorage.getItem(constants.TOKEN)}`
            },
            method: 'get'
        })
        .then(res => this._handleErrors(res))
        .then(res => res.json());
        
    }
    
    /** FetchAPI for POST calls */
    static post(url, data) {

        return fetch(this.host + "/" + url, {
            headers: { 
                'Content-type' : 'application/json',
                'Authorization': `JWT ${localStorage.getItem(constants.TOKEN)}`         
            },
            method: 'post',
            body: JSON.stringify(data)
        })
        .then(res => this._handleErrors(res))
        .then(res => res.json());

    }

    // ... Add PUT, DELETE... when needed
}