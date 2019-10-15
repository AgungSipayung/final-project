document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list', 'rrule' ],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    defaultDate: '2018-07-01',
    editable: true,
    events: [
      {
        title: 'TRIP Surabaya',
        start: '2018-07-01',
        className: 'bg-info',
        textColor: '#FFFFFF',
        
      },
      {
          title: 'Long Trip Karimun',
          start: '2018-07-07',
          end: '2018-07-10',
          className: 'bg-danger',
          textColor: '#FFFFFF'
      },
      {
          title: 'Surabaya City Tour',
          start: '2018-07-12',
          className: 'bg-dark',
          textColor: '#FFFFFF'
      },
    ],
    

    eventClick: function(arg) {
      if (confirm('delete event?')) {
        arg.event.remove()
      }
    }
  });
  
  calendar.render();
});
