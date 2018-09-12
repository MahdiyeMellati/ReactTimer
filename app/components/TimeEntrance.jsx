var React = require('react');


var TimeEntrance= React.createClass({
  onSubmit: function(e)
  {
    e.preventDefault();
    var time=this.refs.seconds.value;

    if(time.match(/^[0-9]*$/))
    {
      this.refs.seconds.value='';
      this.props.onSetTimeEntrance(parseInt(time,10));
    }
    else
    {
    alert("Please enter time");
    }
  },
render: function()
{
  return(
    <div>
      <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
      <input type="text" placeholder="Enter Time in seconds" ref="seconds"></input>
      <button className="button expanded">Start</button>
      </form>
    </div>
  );

}

});

module.exports=TimeEntrance;
