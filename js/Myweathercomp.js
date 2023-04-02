'use strict';
const Myweathercomp = () => {
return (
<span className="navbar-text mr-3">
<span>Weather at store 
<img id='myimg' src=''/>
<span id='myweather'> Weather here </span>
<span id='moreweather'> Weather more </span>
</span>
</span>
);
};
ReactDOM.render( <Myweathercomp/>,document.getElementById('myweatherdiv')
);
