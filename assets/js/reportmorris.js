$(document).ready(function() {
    areaChart();
  
    $(window).resize(function() {
      window.areaChart.redraw();
    });
  });
  
  
  
  function areaChart() {
    window.areaChart = Morris.Area({
      element: 'area-chart',
      data: [{
                period: '2011',
                citytour: 45,
                landtour: 75,
                outbound: 18
            }, {
                period: '2012',
                citytour: 130,
                landtour: 110,
                outbound: 82
            }, {
                period: '2013',
                citytour: 80,
                landtour: 60,
                outbound: 85
            }, {
                period: '2014',
                citytour: 78,
                landtour: 205,
                outbound: 135
            }, {
                period: '2015',
                citytour: 180,
                landtour: 124,
                outbound: 140
            }, {
                period: '2016',
                citytour: 105,
                landtour: 100,
                outbound: 85
            },
            {
                period: '2017',
                citytour: 210,
                landtour: 180,
                outbound: 120
            }
        ],
        xkey: 'period',
        ykeys: ['citytour', 'landtour', 'outbound'],
        labels: ['City Tour', 'Land Tour', 'Outbound Tour'],
        pointSize: 2,
        fillOpacity: 0,
        pointStrokeColors: ['#2cbfb7', '#5dcef6', '#c0d0d6'],
        behaveLikeLine: true,
        gridLineColor: '#eeeeee',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#2cbfb7', '#5dcef6', '#c0d0d6'],
        resize: true

    });
  }
  