if (navigator.geolocation) {
							navigator.geolocation
									.getCurrentPosition(
											function(p) {
												var siteUrl="http://localhost:8080/sprotiz/";
												
												var myCenter = new google.maps.LatLng(
														p.coords.latitude,
														p.coords.longitude);
													$.get(siteUrl+"activity",
														function(locations) {
														var temp = JSON.parse(locations);
														var marker;
																function initialize() {
																	var mapProp = {
																		center:myCenter,
																		//center : new google.maps.LatLng(-37.92, 151.25),
																		zoom : 15,
																		mapTypeId : google.maps.MapTypeId.ROADMAP
																	};
																	var map = new google.maps.Map(
																			document
																					.getElementById("googleMap"),
																			mapProp);

																	var markers = new Array();

																	for (var i = 0; i < temp.length; i++) {
																		var marker = new google.maps.Marker(
																				{
																					position : new google.maps.LatLng(
																							temp[i][1],
																							temp[i][2]),
																					map : map,
																				//icon: icons[iconCounter]
																				});
																		markers.push(marker);
																		var infowindow = new google.maps.InfoWindow();
																		google.maps.event
																				.addListener(
																						marker,
																						'click',
																						(function(
																								marker,
																								i) {
																							return function() {

																								infowindow
																										.setContent(temp[i][0]);
																								infowindow
																										.open(
																												map,
																												marker);
																							}
																						})
																								(
																										marker,
																										i));

																	}
																	//					marker=new google.maps.Marker({
																	//					  position:myCenter,
																	// icon:'themes/assets/images/nepali-momo.png',
																	//					  animation:google.maps.Animation.BOUNCE
																	//					  });
																	//marker.setMap(map);
																	// Info open
																	//					var infowindow = new google.maps.InfoWindow({
																	//					  content:"Hello World!"
																	//					  });
																	//					google.maps.event.addListener(marker, 'click', function() {
																	//					  infowindow.open(map,marker);
																	//					  });
																}
																google.maps.event
																		.addDomListener(window,
																				'load',
																				initialize);
														});
											},
											function(error) {
												var i, l, options = [{
												       value: 'first',
												       text: 'First'
												    }, {
												       value: 'second',
												       text: 'Second'
												    }],
												    newWindow = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");  

												    newWindow.document.write("<select onchange='window.opener.setValue(this.value);'>");
												    for(i=0,l=options.length; i<l; i++) {
												        newWindow.document.write("<option value='"+options[i].value+"'>");  
												        newWindow.document.write(options[i].text);  
												        newWindow.document.write("</option>");
												    }
												    newWindow.document.write("</select>");
											});
						}
