
var directionDisplay;
var directionService=new google.maps.DirectionsService();
var map;
function initialize(){
	directionDisplay=new google.maps.DirectionsRenderer();
	var wellington=new google.maps.LatLng(-41.2865, 174.7762);
	var myOptions={
		zoom:6,
		mapTypeId: 'roadmap',
		center:wellington
	};
	map=new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	directionDisplay.setMap(map);
	calcRoute();
}
function calcRoute(){
	var waypts=[];
	stop=new google.maps.LatLng(-38.6857, 176.0702);
	waypts.push({
		location:stop,
		stopover:true});
		console.log(waypts);
	start=new google.maps.LatLng(-41.2865, 174.7762);
	end=new google.maps.LatLng(-36.8485, 174.7633);
	var request={
		origin:start,
		destination:end,
		waypoints:waypts,
		optimizeWaypoints:true,
		travelMode:google.maps.DirectionsTravelMode.DRIVING
	};
	directionService.route(request,function(response,status){
		if(status==google.maps.DirectionsStatus.OK){
			directionDisplay.setDirections(response);
			var route=response.routes[0];
		}
	});
	}
