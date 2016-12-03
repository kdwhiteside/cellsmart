// Include React 
var React = require('react');
var Child = require('./child.js');

// Create the Header component
// Notice how the header uses .createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Header = React.createClass({

	render: function(){

		return(
			<Child/>
		)
	}
});
// Export the componen back for use in other files
module.exports = Header;