var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '五峰鄉',
                interactive: true,
    title: '五峰鄉<br />\
    <img src="styles/legend/_1_0.png" /> <br />\
    <img src="styles/legend/_1_1.png" /> <br />\
    <img src="styles/legend/_1_2.png" /> <br />\
    <img src="styles/legend/_1_3.png" /> <br />\
    <img src="styles/legend/_1_4.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1];
lyr__1.set('fieldAliases', {'經度': '經度', '緯度': '緯度', 'Category': 'Category', '露營場名稱': '露營場名稱', 'field_5': 'field_5', '分數': '分數', '排名': '排名', });
lyr__1.set('fieldImages', {'經度': 'TextEdit', '緯度': 'TextEdit', 'Category': 'Range', '露營場名稱': 'TextEdit', 'field_5': '', '分數': '', '排名': '', });
lyr__1.set('fieldLabels', {'經度': 'no label', '緯度': 'no label', 'Category': 'no label', '露營場名稱': 'inline label - always visible', 'field_5': 'no label', '分數': 'no label', '排名': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});