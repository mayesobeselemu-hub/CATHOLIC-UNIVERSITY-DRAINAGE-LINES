var wms_layers = [];

var format_woodloat_0 = new ol.format.GeoJSON();
var features_woodloat_0 = format_woodloat_0.readFeatures(json_woodloat_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_woodloat_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_woodloat_0.addFeatures(features_woodloat_0);
var lyr_woodloat_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_woodloat_0, 
                style: style_woodloat_0,
                popuplayertitle: 'woodloat',
                interactive: true,
                title: '<img src="styles/legend/woodloat_0.png" /> woodloat'
            });
var format_MINORROADS_1 = new ol.format.GeoJSON();
var features_MINORROADS_1 = format_MINORROADS_1.readFeatures(json_MINORROADS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINORROADS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINORROADS_1.addFeatures(features_MINORROADS_1);
var lyr_MINORROADS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINORROADS_1, 
                style: style_MINORROADS_1,
                popuplayertitle: 'MINOR ROADS',
                interactive: true,
                title: '<img src="styles/legend/MINORROADS_1.png" /> MINOR ROADS'
            });
var format_cugrounds_2 = new ol.format.GeoJSON();
var features_cugrounds_2 = format_cugrounds_2.readFeatures(json_cugrounds_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cugrounds_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cugrounds_2.addFeatures(features_cugrounds_2);
var lyr_cugrounds_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cugrounds_2, 
                style: style_cugrounds_2,
                popuplayertitle: 'cu grounds',
                interactive: true,
                title: '<img src="styles/legend/cugrounds_2.png" /> cu grounds'
            });
var format_roads_3 = new ol.format.GeoJSON();
var features_roads_3 = format_roads_3.readFeatures(json_roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_3.addFeatures(features_roads_3);
var lyr_roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_3, 
                style: style_roads_3,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_3.png" /> roads'
            });
var format_hostels_4 = new ol.format.GeoJSON();
var features_hostels_4 = format_hostels_4.readFeatures(json_hostels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hostels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hostels_4.addFeatures(features_hostels_4);
var lyr_hostels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hostels_4, 
                style: style_hostels_4,
                popuplayertitle: 'hostels',
                interactive: true,
                title: '<img src="styles/legend/hostels_4.png" /> hostels'
            });
var format_drainage_5 = new ol.format.GeoJSON();
var features_drainage_5 = format_drainage_5.readFeatures(json_drainage_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainage_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainage_5.addFeatures(features_drainage_5);
var lyr_drainage_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainage_5, 
                style: style_drainage_5,
                popuplayertitle: 'drainage',
                interactive: true,
                title: '<img src="styles/legend/drainage_5.png" /> drainage'
            });
var format_buildings_6 = new ol.format.GeoJSON();
var features_buildings_6 = format_buildings_6.readFeatures(json_buildings_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_6.addFeatures(features_buildings_6);
var lyr_buildings_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_6, 
                style: style_buildings_6,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_6.png" /> buildings'
            });

lyr_woodloat_0.setVisible(true);lyr_MINORROADS_1.setVisible(true);lyr_cugrounds_2.setVisible(true);lyr_roads_3.setVisible(true);lyr_hostels_4.setVisible(true);lyr_drainage_5.setVisible(true);lyr_buildings_6.setVisible(true);
var layersList = [lyr_woodloat_0,lyr_MINORROADS_1,lyr_cugrounds_2,lyr_roads_3,lyr_hostels_4,lyr_drainage_5,lyr_buildings_6];
lyr_woodloat_0.set('fieldAliases', {'id': 'id', });
lyr_MINORROADS_1.set('fieldAliases', {'id': 'id', });
lyr_cugrounds_2.set('fieldAliases', {'id': 'id', });
lyr_roads_3.set('fieldAliases', {'id': 'id', });
lyr_hostels_4.set('fieldAliases', {'id': 'id', });
lyr_drainage_5.set('fieldAliases', {'id': 'id', 'shp': 'shp', });
lyr_buildings_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tower_type': 'tower_type', 'man_made': 'man_made', 'amenity': 'amenity', 'tourism': 'tourism', });
lyr_woodloat_0.set('fieldImages', {'id': 'TextEdit', });
lyr_MINORROADS_1.set('fieldImages', {'id': 'TextEdit', });
lyr_cugrounds_2.set('fieldImages', {'id': 'TextEdit', });
lyr_roads_3.set('fieldImages', {'id': 'TextEdit', });
lyr_hostels_4.set('fieldImages', {'id': 'TextEdit', });
lyr_drainage_5.set('fieldImages', {'id': 'TextEdit', 'shp': 'TextEdit', });
lyr_buildings_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'tower_type': 'TextEdit', 'man_made': 'TextEdit', 'amenity': 'TextEdit', 'tourism': 'TextEdit', });
lyr_woodloat_0.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_MINORROADS_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_cugrounds_2.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_roads_3.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_hostels_4.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_drainage_5.set('fieldLabels', {'id': 'inline label - always visible', 'shp': 'header label - visible with data', });
lyr_buildings_6.set('fieldLabels', {'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'building': 'inline label - always visible', 'tower_type': 'inline label - always visible', 'man_made': 'inline label - always visible', 'amenity': 'inline label - always visible', 'tourism': 'inline label - always visible', });
lyr_buildings_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});