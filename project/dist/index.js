"use strict";

require("babel-polyfill");

var result = [1, 2, 3].map(function (i) {
  return i + 1;
});

React.createClass({
  render: function render() {
    return React.createElement(
      "div",
      null,
      "fdffsfd"
    );
  }
});

function addAll() {
  return Array.from(arguments).reduce(function (a, b) {
    return a + b;
  });
}

var bob = {
  _name: "Bob",
  _friends: [],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      return console.log(_this._name + " knows " + f);
    });
  }
};