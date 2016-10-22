Vue.component('calculator', Vue.extend({
		template: [
				'<div class="calc clearfix">',
					'<h2 class="text-center">Калькулятор</h2>',
					'<div class="col-md-12">',
						'<div class="form-horizontal">',
							'<div class="panel-body">',
								'<div class="form-group">',
									'<div class="col-md-3"></div>',
									'<div class="radio-flex col-md-9">',
										'<label class="radio-inline">',
											'<input checked type="radio" name="program" value="1" v-model="program"/><span>Программа А</span>',
										'</label>',
										'<label class="radio-inline">',
											'<input type="radio" name="program" value="2" v-model="program"/><span>Программа Б</span>',
										'</label>',
									'</div>',
								'</div>',
								'<div class="form-group">',
									'<label class="col-md-3 col-xs-12 control-label">Сумма займа</label>',
									'<div class="col-md-6 col-xs-12">',
										'<div class="input-group"><span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
											'<input v-model="loanAmount"max="10000000" type="number" class="form-control"/>',
										'</div><span class="help-block">Макс. 10 млн. руб.</span>',
									'</div>',
								'</div>',
								'<div class="form-group">',
									'<label class="col-md-3 col-xs-12 control-label">Срок займа</label>',
									'<div class="col-md-6 col-xs-12">',
										'<div class="input-group"><span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
											'<input v-model="loanTerm" type="number" max="1095" class="form-control"/>',
										'</div><span class="help-block">Макс. 1095 дней.</span>',
									'</div>',
								'</div>',
								'<div class="form-group">',
									'<div class="col-md-3"></div>',
									'<div class="consider clearfix col-md-6">',
										'<div>',
											'<div class="pull-left">',
												'<button @click="calculate" class="btn btn-success">Рассчитать</button>',
											'</div>',
										'</div>',
										'<div>',
											'<div class="pull-right">',
												'<h4>',
													'Итого:&nbsp;<strong>{{total || "Ошибка!"}}</strong>',
												'</h4>',
											'</div>',
										'</div>',
									'</div>',
								'</div>',
							'</div>',
						'</div>',
					'</div>',
				'</div>',
		].join(' '),
		methods: {
			calculate: function() {
				var vm = this;
	  		var loanAmount = parseInt(vm.loanAmount);
	  		var loanTerm = parseInt(vm.loanTerm);
	  		var sum;
	  		var percent;

	  		if (vm.program == 1) {
	  			percent = 16 / 365 * loanTerm;
	    		sum = loanAmount + (loanAmount / 100 * percent);
	    	}
	    	else {
	    		percent = 25 / 365 * loanTerm;
	      	sum = loanAmount + (loanAmount / 100 * percent);
	    	}
	    	vm.total = !isNaN(parseFloat(sum)) && isFinite(sum)? sum.toFixed(2) : null;
			}
		},
		ready: function() {
				var vm = this;

		},
		data: function() {
				return {
					total: '0',
					program: null,
					loanAmount: 0,
					loanTerm: 0,
				}
		},

}));
