// Scheduler App Component

// TODO:
// - Need to update the proper Day display with shift times when new shift is created

/** @jsx React.DOM */

var Scheduler = React.createClass({
  getInitialState: function() {
    return {
      shifts: {
        This: {
          Monday: {
            start: '',
            end: ''
          },
          Tuesday: {
            start: '',
            end: ''
          },
          Wednesday: {
            start: '',
            end: ''
          },
          Thursday: {
            start: '',
            end: ''
          },
          Friday: {
            start: '',
            end: ''
          },
          Saturday: {
            start: '',
            end: ''
          },
          Sunday: {
            start: '',
            end: ''
          }
        },
        Next: {
          Monday: {
            start: '',
            end: ''
          },
          Tuesday: {
            start: '',
            end: ''
          },
          Wednesday: {
            start: '',
            end: ''
          },
          Thursday: {
            start: '',
            end: ''
          },
          Friday: {
            start: '',
            end: ''
          },
          Saturday: {
            start: '',
            end: ''
          },
          Sunday: {
            start: '',
            end: ''
          }
        }
      }
    };
  },

  // Create shift object from shift form inputs
  handleUserInput: function(week, day, start, end) {
    var shift = {
      week: week,
      day: day,
      start: start,
      end: end
    };
    // Push the shift to this.state.shifts
    this.state.shifts[shift.week][shift.day].start = shift.start;
    this.state.shifts[shift.week][shift.day].end = shift.end;
    // TESTING
    console.log(this.state.shifts);
  },

  updateShiftDisplay: function(shift) {
    var targetDay = shift.day;
    var start = shift.start;
    var end = shift.end;
  },

  render: function() {
    return (
      <div className="col-sm-12">
        <Controls
          handleUserInput={this.handleUserInput}
        />
        <Week week="This" shifts={this.state.shifts["This"]} />
        <Week week="Next" shifts={this.state.shifts["Next"]} />
      </div>
    );
  }
});

React.render(<Scheduler />, document.getElementById('app-wrapper'));
