window.onload = function() {

if (navigator.geolocation) {
	
	navigator.geolocation.getCurrentPosition(function(position){


	var myLat = position.coords.latitude;
	var myLong = position.coords.longitude;

	var CyberLat = 2.922561
	var CyberLong = 101.650964

	var SunwayLat = 3.073065
	var SunwayLong = 101.607787
	var Cyberjayadistance1 = distance(myLat,myLong,CyberLat,CyberLong);
	alert('Cyber distance is ' +Math.ceil(Cyberjayadistance1) + ' km')
//alert("Latitiude is "+position.coords.latitude + " "  + "Longitude:" +position.coords.longitude)

			});
}

// Convert numeric degrees to radians
if (typeof(Number.prototype.toRad) === 'undefined') {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

function distance(lat1, lng1, lat2, lng2) {
  var dLat = (lat2-lat1).toRad(),
      dLng = (lng2-lng1).toRad(),
      lat1 = lat1.toRad(),
      lat2 = lat2.toRad();

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.sin(dLng / 2) * Math.sin(dLng / 2) * 
          Math.cos(lat1) * Math.cos(lat2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return 3956 * c;
}


}