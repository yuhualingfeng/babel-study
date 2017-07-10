import "babel-polyfill";

var result = [1,2,3].map(i=>i+1);

React.createClass({
	render:function(){
		return (<div>fdffsfd</div>);
	}
});

function addAll() {
  return Array.from(arguments).reduce((a, b) => a + b);
}

var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};



