mapboxgl.accessToken = 'pk.eyJ1IjoiYWZhcmVuY2UiLCJhIjoiY2tpaWNmZXNrMGF1bzJzcW1uMGRiZnRpbCJ9.uopR-f-9VC4hwT7aEGQpxg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/afarence/ckry8lla501k217s132e0j3pc',
    zoom: 3.25,
    center: [-95.45, 40.725]
});
map.on('load', function(){
    
    map.addLayer({
        'id':'superdelaydata',
        'type':'fill',
        'source': {
            'type':'geojson',
            'data':'super_delay.geojson'
        },
        'paint':{
            'fill-color':'#0000ff',
            'fill-opacity': 0.5

        }
    }, );
})

map.on('click', 'superdelaydata', function (e) {
    var districtName = e.features[0].properties.NAME_y;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h2>' + districtName + '</h2>' +  '<h3><hr>')
        .addTo(map);
});
map.on('mouseenter', 'superdelaydata', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'superdelaydata', function () {
    map.getCanvas().style.cursor = '';
});
