const mapboxgl = require("mapbox-gl");

module.exports = function(type, label, coords){
    const markerDiv = document.createElement('div');
    const imageElem = document.createElement('img');
    switch (type){
        case 'Hotel':
            imageElem.src = 'D9574Cu.png';
            break;
        case 'Restaurant':
            imageElem.src = 'cqR6pUI.png';
            break;
        case 'Activity':
            imageElem.src = 'WbMOfMl.png';
            break;
        default:
    }
    const labelText = document.createTextNode(label);
    markerDiv.appendChild(imageElem);
    markerDiv.appendChild(labelText);
    return new mapboxgl.Marker(markerDiv).setLngLat(coords);
}
