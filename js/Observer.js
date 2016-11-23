var DAZ = (function() {
	'use strict';

	/* observerlist collection object */
	function ObserverList() {
		this.observerList = [];
	};

	ObserverList.prototype = {
		set: function(obj) {
			this.observerList.push(obj);
		},
		get: function(index) {
			return this.observerList[index];
		},
		del: function(index) {
			this.observerList.splice(index, 1);
		},
		list: function() {
			return this.observerList;
		},
		cnt: function() {
			return this.observerList.length;
		},
		idx: function(obj) {
			for(let i=0, l = this.observerList.length; i<l; i+=1) {
				if(obj === this.observerList[i]) {
					return i;
				}
			}
		}
	}

	/* subject interface */
	function ISubject() {
		this.Observers = new ObserverList();
	}

	ISubject.prototype = {
		addObserver: function(observer) {
			this.Observers.set(observer);
		},
		removeObserver: function(observer){
			this.Observers.del(this.Observers.idx(observer));
		},
		notify: function(event) {
			for(let i=0, l=this.Observers.cnt(); i<l; i+=1) {
				if(this.Observers.get(i).hasOwnProperty('update')) {
					this.Observers.get(i).update(event);
				} else {
					this.Observers.get(i).update = function(){
						return null;
					};
				}
			}
		}
	}

	// /* observer interface */
	// function IObserver(){}

	// IObserver.prototype = {
	// 	update: function(val) {
	// 		/* implement in the concrete observer */
	// 	}
	// }

	/* a method that helps sticking interface methods on concrete type */
	function Extend(obj, extension) {
		for (let k in extension){
			obj[k] = extension[k];
		}
	}

	return {
		OBSERVER: ObserverList,
		ISUBJECT: ISubject,
		EXTEND: Extend
	}
});