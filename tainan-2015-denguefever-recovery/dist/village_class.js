!function(r){function t(r,t){d3.json(t,function(t){l=t,$(".updateAt").text(l.updateAt),d3.json(r,function(r){for(var t in r.objects)geojson=topojson.feature(r,r.objects[t]);f=L.geoJson(geojson,{style:o,onEachFeature:a}).addTo(d)})})}function e(r,t,e){g=e,d=new L.Map("map");var o="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",n='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',a=new L.TileLayer(o,{minZoom:10,maxZoom:19,attribution:n});d.setView(new L.LatLng(r,t),g),a.addTo(d),w.addTo(d)}function o(r){var t=n(r.properties.TOWNNAME+r.properties.VILLAGENAM);return{fillColor:t,weight:1,opacity:.3,color:"#666",dashArray:"",fillOpacity:.7}}function n(r){if(!(r in l))return"rgb(3, 177, 255)";if(0===l[r].day_1_7)return"rgb(0, 187, 170)";var t=l[r]["class"];return"low-down"===t||"height-down"===t&&l[r].day_1_7<3?"rgb(0, 187, 170)":"#C1BEBE"}function a(r,t){t.on({mouseover:u,mouseout:s});var e=r.properties.TOWNNAME+r.properties.VILLAGENAM;e in l?t.bindPopup('<div class="village-pop"><span>'+r.properties.TOWNNAME+" "+r.properties.VILLAGENAM+"</span>"+i(l[e])+"<hr/>1-7天內病例數："+p(l[e].day_1_7)+"<br/>8-14天內病例數："+l[e].day_8_14+"</div>"):t.bindPopup(r.properties.TOWNNAME+" "+r.properties.VILLAGENAM+"<br/>14天病例數：0")}function i(r){var t=r.day_1_7-r.day_8_14;return t>0?'<span class="arrow-up"></span>'+Math.abs(t):0>t?'<span class="arrow-down"></span>'+Math.abs(t):"--"}function p(r){return 10>r?r:'<span class="red">'+r+"</span>"}function s(r){f.resetStyle(r.target)}function u(r){var t=r.target;t.setStyle({weight:2,color:"#666",dashArray:"",fillOpacity:.9}),L.Browser.ie||L.Browser.opera||t.bringToFront()}function c(r){for(var t=L.DomUtil.create("div","info legend"),e=["#C1BEBE","rgb(0, 187, 170)","rgb(3, 177, 255)"],o=["2週內無病例數",'1週內低病例下降中<span class="arrow-down"></span>',"尚有登革熱病例"].reverse(),n=0;n<o.length;n++)t.innerHTML+='<i style="background:'+e[n]+'"></i>'+o[n]+"<br/>";return t}var d,l,f,g,w=L.control({position:"bottomleft"});r.initData=t,r.initMap=e,w.onAdd=c}(window);