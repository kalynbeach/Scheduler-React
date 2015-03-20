// Header Controls Component

/** @jsx React.DOM */

var Controls = React.createClass({
  render: function() {
    return (
      <div className="row">
        <h1> Scheduler React </h1>
        <div className="col-sm-12">
          <ShiftForm
            handleUserInput={this.props.handleUserInput}
          />
        </div>
      </div>   
    );
  }
});