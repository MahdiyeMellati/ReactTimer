var React=require('react');
var Controls=require('Controls');
var Clock= require('Clock');
//var TimeEntrance=require('TimeEntrance');


var Timer=React.createClass({
  getInitialState: function()
  {
    return{
      count : 0,
      timerStatus:'stopped'
    };
  },
   componentDidUpdate: function(prevProps,prevState)
   {
     if(this.state.timerStatus!==prevState.timerStatus)
     {
       switch (this.state.timerStatus) {
         case 'started':
          this.handleStart();
         break;
         debugger;
         case 'stopped':
           this.setState({count:0});
         case 'paused':
          clearInterval(this.timer);
          this.timer=undefined;
          break;
       }
     }
   },
   componentWillUnmount: function()
   {
     clearInterval(this.timer);
   },
   handleStart: function()
   {
     this.timer=setInterval(()=>{
       this.setState({
         count:this.state.count+1
       });
     }, 1000);
   },

handleStatusChange:function(newTimerStatus)
{

  this.setState({timerStatus:newTimerStatus});
},
  render: function()
  {
    var {count,timerStatus}=this.state;
    // var renderStartStopButton=()=>
    // {
    //   if(countDownStatus==='started')
    //   {
    //     return<button className="button secondary" onClick={this.onStatusChange('paused')}>paused</button>
    //   }
    //   else{
    //     return<button className="button primary" onClick={this.onStatusChange('started')}>started</button>
    //   }
    //
    // };
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countDownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>

    )
  }
})

module.exports=Timer;
