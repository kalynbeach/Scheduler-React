// Week Component

/** @jsx React.DOM */

var Week = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h3>{this.props.week} Week</h3>
          <div className="week">
            <Day day="Monday" shift={this.props.shifts["Monday"]} />
            <Day day="Tuesday" />
            <Day day="Wednesday" />
            <Day day="Thursday" />
            <Day day="Friday" />
            <Day day="Saturday" />
            <Day day="Sunday" />
          </div>
        </div>
      </div>
    );
  }
});