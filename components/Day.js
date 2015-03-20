// Day Component

/** @jsx React.DOM */

var Day = React.createClass({
  getInitialState: function() {
    return {
      start: undefined,
      end: undefined
    }
  },

  updateDayDisplay: function(shift) {
    this.setState({
      start: shift.start,
      end: shift.end
    });
  },

  render: function() {
    var shift = this.props.shift;
    return (
      <div className="day">
        <h3>{this.props.day}</h3>
        <div>
          <span> {this.state.start} </span>
        </div>
      </div>
    );
  }
});