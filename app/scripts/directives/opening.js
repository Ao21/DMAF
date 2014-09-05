app.directive('openingHours', function($compile, $timeout, $compile) {
    return {
        restrict: 'AE',
        replace: 'false',
        templateUrl: 'views/partials/opening.html',
        link: {
            pre: function(scope, element, attrs) {



                scope.openingHours = [];





            },

            post: function(scope, element, attrs) {
                var d = moment().isoWeekday() - 1;
                if (d != 7) {
                    scope.selected = d
                }



                scope.week = [
                    scope.Monday = false, scope.Tuesday = false, scope.Wednesday = false, scope.Thursday = false, scope.Friday = false, scope.Saturday = false
                ]


                var d = moment().isoWeekday() - 1;
                if (d != 7) {
                    scope.selected = d
                    scope.Monday = false, scope.Tuesday = false, scope.Wednesday = false, scope.Thursday = false, scope.Friday = false, scope.Saturday = false;
                    switch (d) {
                        case 0:
                            scope.Monday = true;
                            break;
                        case 1:
                            scope.Tuesday = true;
                            break;
                        case 2:
                            scope.Wednesday = true;
                            break;
                        case 3:
                            scope.Thursday = true;
                            break;
                        case 4:
                            scope.Friday = true;
                            break;
                        case 5:
                            scope.Saturday = true;
                            break;

                    }
                }




                scope.makeSelection = function(index, $event) {
                    scope.selected = index;
                    scope.Monday = false, scope.Tuesday = false, scope.Wednesday = false, scope.Thursday = false, scope.Friday = false, scope.Saturday = false;
                    switch ($event.currentTarget.innerHTML) {
                        case "Monday":
                            scope.Monday = true;
                            break;
                        case "Tuesday":
                            scope.Tuesday = true;
                            break;
                        case "Wednesday":
                            scope.Wednesday = true;
                            break;
                        case "Thursday":
                            scope.Thursday = true;
                            break;
                        case "Friday":
                            scope.Friday = true;
                            break;
                        case "Saturday":
                            scope.Saturday = true;
                            break;
                    }

                }

                scope.nextWeek = function() {
                    start(moment("12/09/2014", "DD/MM/YYYY"));
                }

                scope.weekSelect = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



                var results = [];
                var fResult = [];
                var cResult = [];
                var count = 0;
                var urls = ['1g2ZzEkMfxi7Cv35w9ZY81eZEbCpbRuOW17b8Kea5', '1CsKCjuet4r1gfPEPUHOV9NfDyTbLKuDwM_7s30AK', '1CicPP7wZSFdleoPX5IBWgm6bDHGaBdH3z9_Zlv-j', '1yZQbdvmLgty_wEF4zVrN8OcsC95p__i52ufGUNZp', '1xE2lxHDB-c__YfboWWTVJM-S2v2XZWXsI3-Gfuxj', '1sWEAsFFXjoPH7WbkAfvZCHoQgvvFZ1miOTbZ0_Sw']
                start();

                function start(nDay) {
                    if (nDay) {
                        scope.openingHours.length = 0;
                        count = 0;
                        for (var i = urls.length - 1; i >= 0; i--) {
                            $.ajax({
                                dataType: "jsonp",
                                url: 'https://www.googleapis.com/fusiontables/v1/query?sql=SELECT * FROM ' + urls[i] + '&key=AIzaSyAdjbycGPJCo2R0w_S0L2gHjiv2XPJD0eY',
                                success: function(data) {
                                    for (var x = data.rows.length - 1; x >= 0; x--) {
                                        var day = new Day(data.rows[x][0], data.rows[x][1], data.rows[x][2], data.rows[x][3], data.rows[x][4], data.rows[x][5], data.rows[x][6], data.rows[x][7], data.rows[x][8], data.rows[x][9], data.rows[x][10], data.rows[x][11], data.rows[x][12], data.rows[x][13], data.rows[x][14]);
                                        results.push(day);

                                    };
                                    collectResults(results, i, nDay);


                                }
                            });
                        };
                    } else {
                        for (var i = urls.length - 1; i >= 0; i--) {
                            $.ajax({
                                dataType: "jsonp",
                                url: 'https://www.googleapis.com/fusiontables/v1/query?sql=SELECT * FROM ' + urls[i] + '&key=AIzaSyAdjbycGPJCo2R0w_S0L2gHjiv2XPJD0eY',
                                success: function(data) {
                                    for (var x = data.rows.length - 1; x >= 0; x--) {
                                        var day = new Day(data.rows[x][0], data.rows[x][1], data.rows[x][2], data.rows[x][3], data.rows[x][4], data.rows[x][5], data.rows[x][6], data.rows[x][7], data.rows[x][8], data.rows[x][9], data.rows[x][10], data.rows[x][11], data.rows[x][12], data.rows[x][13], data.rows[x][14]);
                                        results.push(day);

                                    };

                                    collectResults(results, i);


                                }
                            });
                        };
                    }
                }



                function thisweek(result) {
                    var sund = moment().day("Sunday").hour(0).minute(0).seconds(0).milliseconds(0); //get sunday
                    var fri = moment(sund).add('d', 7); //plus 5 days
                    for (var i = result.length - 1; i >= 0; i--) {
                        if (moment(result[i].open, "DD-MM-YYYY").isAfter(sund) && moment(result[i].open, "DD-MM-YYYY").isBefore(fri)) {
                            fResult.push(result[i]);
                        }
                    };
                    processWeek(fResult)

                }

                function week(result, day) {
                    var sund = moment(day).day("Sunday").hour(0).minute(0).seconds(0).milliseconds(0); //get sunday
                    var fri = moment(sund).add('d', 7); //plus 5 days
                    for (var i = result.length - 1; i >= 0; i--) {
                        if (moment(result[i].open, "DD-MM-YYYY").isAfter(sund) && moment(result[i].open, "DD-MM-YYYY").isBefore(fri)) {
                            fResult.push(result[i]);
                        }
                    };
                    processWeek(fResult)

                }

                function collectResults(results, i, day) {
                    if (count === urls.length - 1) {
                        if (day) {
                            week(results, day);
                        } else {
                            thisweek(results);
                        }
                    }
                    count++;
                }


                function Day(date, a, b, c, d, e, f, g, h, i, j, k, l, m, wk) {
                    this.open = moment(date, "DD-MM-YYYY");
                    this.day = moment(date, 'DD-MM-YYYY').format('dddd');
                    this.a = a;
                    this.b = b;
                    this.c = c;
                    this.d = d;
                    this.e = e;
                    this.f = f;
                    this.g = g;
                    this.h = h;
                    this.i = i;
                    this.j = j;
                    this.k = k;
                    this.l = l;
                    this.mow = m;
                    this.week = wk;
                }

                function processWeek(data) {
                    var res = [];

                    var Monday = _.filter(data, function(day) {
                        return day.day == 'Monday';
                    });
                    var Tuesday = _.filter(data, function(day) {
                        return day.day == 'Tuesday';
                    });
                    var Wednesday = _.filter(data, function(day) {
                        return day.day == 'Wednesday';
                    });
                    var Thursday = _.filter(data, function(day) {
                        return day.day == 'Thursday';
                    });
                    var Friday = _.filter(data, function(day) {
                        return day.day == 'Friday';
                    });
                    var Saturday = _.filter(data, function(day) {
                        return day.day == 'Saturday';
                    });
                    var week = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];

                    for (var i = week.length - 1; i >= 0; i--) {
                        var d = {};
                        d.days = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
                        for (var x = week[i].length - 1; x >= 0; x--) {
                            d.day = week[i][x].day;
                            switch (week[i][x].mow) {
                                case "Wood":
                                    d.wood = [week[i][x].a, week[i][x].b, week[i][x].c, week[i][x].d, week[i][x].e, week[i][x].f, week[i][x].g, week[i][x].h, week[i][x].i, week[i][x].j, week[i][x].k, week[i][x].l];
                                    break;
                                case "DigFab":
                                    d.digfab = [week[i][x].a, week[i][x].b, week[i][x].c, week[i][x].d, week[i][x].e, week[i][x].f, week[i][x].g, week[i][x].h, week[i][x].i, week[i][x].j, week[i][x].k, week[i][x].l];
                                    break;
                                case "Metal":
                                    d.metal = [week[i][x].a, week[i][x].b, week[i][x].c, week[i][x].d, week[i][x].e, week[i][x].f, week[i][x].g, week[i][x].h, week[i][x].i, week[i][x].j, week[i][x].k, week[i][x].l];
                                    break;
                                case "3d":
                                    d.open3d = [week[i][x].a, week[i][x].b, week[i][x].c, week[i][x].d, week[i][x].e, week[i][x].f, week[i][x].g, week[i][x].h, week[i][x].i, week[i][x].j, week[i][x].k, week[i][x].l];
                                    break;
                                case "2d":
                                    d.open2d = [week[i][x].a, week[i][x].b, week[i][x].c, week[i][x].d, week[i][x].e, week[i][x].f, week[i][x].g, week[i][x].h, week[i][x].i, week[i][x].j, week[i][x].k, week[i][x].l];
                                    break;
                                case "mixed":
                                    d.mixed = [week[i][x].a, week[i][x].b, week[i][x].c, week[i][x].d, week[i][x].e, week[i][x].f, week[i][x].g, week[i][x].h, week[i][x].i, week[i][x].j, week[i][x].k, week[i][x].l];
                            }

                        };

                        res.push(d);
                        scope.$apply(function() {
                            scope.openingHours.push(d);
                        });

                    };

                    /* var d = {day:'Monday'}
                    d.days = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
                    for (var i = Monday.length - 1; i >= 0; i--) {
                        console.log(Monday[i].mow);
                        switch (Monday[i].mow) {
                            case "Wood":
                            d.wood = [Monday[i].a, Monday[i].b, Monday[i].c, Monday[i].d, Monday[i].e, Monday[i].f, Monday[i].g, Monday[i].h, Monday[i].i, Monday[i].j, Monday[i].k, Monday[i].l];
                            break;
                            case "digfab":
                            d.metal = [Monday[i].a, Monday[i].b, Monday[i].c, Monday[i].d, Monday[i].e, Monday[i].f, Monday[i].g, Monday[i].h, Monday[i].i, Monday[i].j, Monday[i].k, Monday[i].l];
                            break;
                            case "Metal":
                            d.digfab = [Monday[i].a, Monday[i].b, Monday[i].c, Monday[i].d, Monday[i].e, Monday[i].f, Monday[i].g, Monday[i].h, Monday[i].i, Monday[i].j, Monday[i].k, Monday[i].l];
                            break;
                        }
                        
                    };*/



                    /*for (var i = day.length - 1; i >= 0; i--) {
                        
                      var d = {
                            day: 'monday'
                        }
                        switch (day[i].mow) {
                            case "wood":
                                d.wood = [day[i].a, day[i].b, day[i].c, day[i].d, day[i].e, day[i].f, day[i].g, day[i].h, day[i].i, day[i].j, day[i].k, day[i].l];
                            case "metal":
                                d.metal = [day[i].a, day[i].b, day[i].c, day[i].d, day[i].e, day[i].f, day[i].g, day[i].h, day[i].i, day[i].j, day[i].k, day[i].l];
                            case "digfab":
                                d.digfab = [day[i].a, day[i].b, day[i].c, day[i].d, day[i].e, day[i].f, day[i].g, day[i].h, day[i].i, day[i].j, day[i].k, day[i].l];
                        }
                        res.push(d);

                    };*/





                }


            }


        }
    }
});
