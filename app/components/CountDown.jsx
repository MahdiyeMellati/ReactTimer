var React=require('react');
var Clock= require('Clock');
var TimeEntrance=require('TimeEntrance');


var CountDown=React.createClass({
getInitialState: function()
{
  return{count : 0};
},
handleSetTimeEntrance : function(seconds)
{
  this.setState({
    count:seconds
  });
},
  render: function()
  {
    var {count}=this.state;
    return(
    <div>

      <Clock totalSeconds={count}/>
      <TimeEntrance onSetTimeEntrance={this.handleSetTimeEntrance}/>
    </div>
  );
  }
});
module.exports=CountDown;
