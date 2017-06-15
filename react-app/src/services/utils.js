var flow = flow || {};

(function () {
	'use strict';
	flow.Utils = {
		store: function (namespace, data) {
			if (data) {
				return localStorage.setItem(namespace, JSON.stringify(data));
			}

			var store = localStorage.getItem(namespace);
			return (store && JSON.parse(store)) || [];
		}
	};
})();

export default flow;
