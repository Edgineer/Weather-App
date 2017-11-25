const request = require('request');

var geocodeAddress =  (address,callback) => {

  var encodedAddress = encodeURIComponent(address);
  /*
  The second parameter is a callback function, it gets called once the data
  comes back from the http endpoint, once the json data comes to the node application*/
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) =>{
      if (error) {
        callback('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that Address');
      }else if (body.status === 'OK') {
        callback(undefined,{
          address: body.results[0].formatted_address,
          latitude:body.results[0].geometry.location.lat,
          longitude:body.results[0].geometry.location.lat
        });
      }
  });
};
/*

HTTP HyperTextTransferProtocol

console.log(JSON.stringify(body, undefined, 2));

BODY:
when a request comes back you get the body
you've made http request thousands of times what you get back is an html page that the browser knows how to render
or it could be JSON information (it IS THE CORE DATA THAT RETURNS FROM THE REQUESTS)

console.log(JSON.stringify(response, undefined, 2));

RESPONSE:
status code tells you how the request went:
200: Success
body is part of the response

header are part of the http protocol, can be sent in the request and RESPONSE

request objects hold info about the request that was made

hia: we also have our own headers that we set by adding JSON:true to the object
    we told request we wanted json data back so request made the headers to tell google to do it

ERROR:
whereas status code reports errors happening on the server side,
errors related to the process of making the http request if ex. domain is wrong
these are errors on our endpoint

error "code": ENOTFOUND
*/

module.exports = {
  geocodeAddress
};
