$(document).ready(function() {

	window.vm = new Vue({
		el: '#login-container',
		methods: {
			onByCert: function(e) {
				mp.alert('Пожалуйста, вставте электронный ключ!');
			},
		},
	});

});

