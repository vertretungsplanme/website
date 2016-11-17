$(function () {
    /*    // response cache
     $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
     if (options.cache) {
     var success = originalOptions.success || $.noop,
     url = originalOptions.url;

     options.cache = false; //remove jQuery cache as we have our own localStorage
     options.beforeSend = function () {
     if (localStorage.getItem(url)) {
     success(JSON.parse(localStorage.getItem(url)));
     return false;
     }
     return true;
     };
     options.success = function (data, textStatus) {
     var responseData = JSON.stringify(data);
     localStorage.setItem(url, responseData);
     if ($.isFunction(success)) success(data); //call back to original ajax call
     };
     }
     });*/

    var mapOptions = {
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    var bounds = new google.maps.LatLngBounds();
    var redIcon = 'http://mt.googleapis.com/vt/icon/name=icons/spotlight/spotlight-poi.png&scale=1';
    var greenIcon = 'http://mt.google.com/vt/icon?psize=30&font=fonts/arialuni_t.ttf&color=ff304C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=43&ay=48&text=%E2%80%A2';

    $.ajax({
        type: "GET",
        url: "https://api.vertretungsplan.me/v2/schools?count=0",
        cache: true,
        success: function (response) {
            var schools = response.results;
            $("#schools-counter").text(schools.length);
            $("#loading-schools").remove();
            var element = $("#supported-schools-list");
            var markers = [];
            var infowindow = new google.maps.InfoWindow({
                content: ''
            });
            $.each(schools, function (i, item) {

                var latlng = new google.maps.LatLng(item.geo[1], item.geo[0]);
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title: item.name + ", " + item.city,
                    icon: item.premium ? greenIcon : redIcon
                });
                markers.push(marker);
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent(item.name + ", " + item.city + (item.premium ? "<br><i>Pro-Features kostenlos</i>" : ""));
                    infowindow.open(map, marker);
                });
                bounds.extend(latlng);
            });
            map.fitBounds(bounds);

            var states = [];
            $.each(schools, function (i, item) {
                var state = null;
                $.each(states, function (i, a_state) {
                    if (a_state.name == item.state) state = a_state;
                });
                if (state == null) {
                    state = {name: item.state, schools: []};
                    states.push(state);
                }
                state.schools.push(item);
            });
            states.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            var i = 0;
            $.each(states, function (i, state) {
                var content = "";
                $.each(state.schools, function (i, school) {
                    content += '<li class="list-group-item col-sm-6"><b>' + school.city + "</b> " + school.name;
                    if (school.premium) {
                        content += ' <i>(Pro-Features kostenlos)</i>'
                    }
                    content += "</li>";
                });

                $('#schools-collapsible').append('<div class="panel panel-default">\
                    <div class="panel-heading" role="tab">\
                    <h4 class="panel-title">\
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '"\
                     aria-expanded="true" aria-controls="collapseOne">' + state.name +
                    '</a><span class="badge">' + state.schools.length + '</span>\
                </h4>\
                </div>\
                <div id="collapse' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">\
                    <ul class="list-group container-fluid">' + content + '</ul>' +
                    '</div>\
                     </div>\
                     </div>');
                i++;
            });
        }
    });
});