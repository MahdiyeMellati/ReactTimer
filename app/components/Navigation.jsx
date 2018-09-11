var React = require('react');
var {Link,IndexLink}=require('react-router');
var Navigation=()=>{
{
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">My React Timer</li>
          <li><IndexLink to="/" activeClassName="active" > Timer </IndexLink></li>
          <li><Link to="/" activeClassName="active" > CountDown </Link></li>
        </ul>
      </div>

      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text"> Created by Mahdiye </li>
        </ul>


      </div>
    </div>

    );
}
};
module.exports=Navigation;
