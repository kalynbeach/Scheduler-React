// Shift Form Component

/** @jsx React.DOM */

var ShiftForm = React.createClass({
  getInitialState: function() {
    return {
      week: undefined,
      day: undefined,
      start: undefined,
      end: undefined
    }
  },

  onWeekChange: function(event) {
    this.setState({week: event.target.value})
  },

  onDayChange: function(event) {
    this.setState({day: event.target.value});
  },

  onStartChange: function(event) {
    this.setState({start: event.target.value});
  },

  onEndChange: function(event) {
    this.setState({end: event.target.value});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var week = this.state.week;
    var day = this.state.day;
    var start = this.state.start;
    var end = this.state.end;

    this.props.handleUserInput(week, day, start, end);
  },

  // TESTING
  logState: function() {
    console.log("Week: " + this.state.week);
    console.log("Day: " + this.state.day);
    console.log("Start: " + this.state.start);
    console.log("End: " + this.state.end);
  },

  render: function() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Week: </label>
          <div className="btn-group">
            <label className="btn btn-default">
              This
              <input type="radio" ref="thisWeek" name="week" value={"This"} onChange={this.onWeekChange} />
            </label>
            <label className="btn btn-default">
              Next
              <input type="radio" ref="nextWeek" name="week" value={"Next"} onChange={this.onWeekChange} />
            </label>
          </div>
        </div>
        <div className="form-group">
          <label for="day">Day: </label>
          <select className="form-control" ref="day" onChange={this.onDayChange}>
            <option>Choose</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        <div className="form-group">
          <label for="start-time">Start: </label>
          <select className="form-control" ref="start" onChange={this.onStartChange}>
            <option>Choose</option>
            <option value="4:30 AM">4:30 AM</option>
            <option value="4:45 AM">4:45 AM</option>
            <option value="5:00 AM">5:00 AM</option>
            <option value="5:15 AM">5:15 AM</option>
            <option value="5:30 AM">5:30 AM</option>
            <option value="5:45 AM">5:45 AM</option>
            <option value="6:00 AM">6:00 AM</option>
            <option value="6:15 AM">6:15 AM</option>
            <option value="6:30 AM">6:30 AM</option>
            <option value="6:45 AM">6:45 AM</option>
            <option value="7:00 AM">7:00 AM</option>
            <option value="7:15 AM">7:15 AM</option>
            <option value="7:30 AM">7:30 AM</option>
            <option value="7:45 AM">7:45 AM</option>
            <option value="8:00 AM">8:00 AM</option>
            <option value="8:15 AM">8:15 AM</option>
            <option value="8:30 AM">8:30 AM</option>
            <option value="8:45 AM">8:45 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="9:15 AM">9:15 AM</option>
            <option value="9:30 AM">9:30 AM</option>
            <option value="9:45 AM">9:45 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:15 AM">10:15 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="10:45 AM">10:45 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:15 AM">11:15 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="11:45 AM">11:45 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="12:15 PM">12:15 PM</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="12:45 PM">12:45 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="1:15 PM">1:15 PM</option>
            <option value="1:30 PM">1:30 PM</option>
            <option value="1:45 PM">1:45 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="2:15 PM">2:15 PM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="2:45 PM">2:45 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="3:15 PM">3:15 PM</option>
            <option value="3:30 PM">3:30 PM</option>
            <option value="3:45 PM">3:45 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="4:15 PM">4:15 PM</option>
            <option value="4:30 PM">4:30 PM</option>
          </select>
          <label for="end-time">End: </label>
          <select className="form-control" ref="end" onChange={this.onEndChange}>
            <option>Choose</option>
            <option value="8:30 AM">8:30 AM</option>
            <option value="8:45 AM">8:45 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="9:15 AM">9:15 AM</option>
            <option value="9:30 AM">9:30 AM</option>
            <option value="9:45 AM">9:45 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:15 AM">10:15 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="10:45 AM">10:45 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:15 AM">11:15 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="11:45 AM">11:45 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="12:15 PM">12:15 PM</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="12:45 PM">12:45 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="1:15 PM">1:15 PM</option>
            <option value="1:30 PM">1:30 PM</option>
            <option value="1:45 PM">1:45 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="2:15 PM">2:15 PM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="2:45 PM">2:45 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="3:15 PM">3:15 PM</option>
            <option value="3:30 PM">3:30 PM</option>
            <option value="3:45 PM">3:45 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="4:15 PM">4:15 PM</option>
            <option value="4:30 PM">4:30 PM</option>
            <option value="4:45 PM">4:45 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="5:15 PM">5:15 PM</option>
            <option value="5:30 PM">5:30 PM</option>
            <option value="5:45 PM">5:45 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="6:15 PM">6:15 PM</option>
            <option value="6:30 PM">6:30 PM</option>
            <option value="6:45 PM">6:45 PM</option>
            <option value="7:00 PM">7:00 PM</option>
            <option value="7:15 PM">7:15 PM</option>
            <option value="7:30 PM">7:30 PM</option>
            <option value="7:45 PM">7:45 PM</option>
            <option value="8:00 PM">8:00 PM</option>
            <option value="8:15 PM">8:15 PM</option>
            <option value="8:30 PM">8:30 PM</option>
          </select>
        </div>
        <button type="submit" className="btn btn-default"> Create </button>
      </form>
    );
  }
});