var Event = function(sender) {
	this._sender = sender;
	this._listeners = [];
	console.log(this._sender, this._listeners);
}

Event.prototype = {
	attach: function(listener) {
		this._listeners.push(listener);
	},
	notify: function(args) {
		var i =0, l = this._listeners.length;
		for( ; i<l; i++) {
			this._listeners[i](this._sender, args);
		}
	}
}