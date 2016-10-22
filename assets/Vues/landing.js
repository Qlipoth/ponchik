$(document).ready(function() {
		window.vm = new Vue({
				el: '#vue',
				template: [
					'<div class="container">',
					  '<div class="jumbotron">',
					    '<h1>Тендерные займы и кредиты</h1>',
					  '</div>',
					  '<div class="flex-row landing-title">',
					    '<div class="flex-item">',
					      '<div class="text-center"><i class="fa fa-desktop h1"></i></div>',
					      '<p class="text-center">УДОБНО</p>',
					    '</div>',
					    '<div class="flex-item">',
					      '<div class="text-center"><i class="fa fa-clock-o h1"></i></div>',
					      '<p class="text-center">ОПЕРАТИВНО</p>',
					    '</div>',
					    '<div class="flex-item">',
					      '<div class="text-center"><i class="fa fa-globe h1"></i></div>',
					      '<p class="text-center">ДИСТАНЦИОННО</p>',
					    '</div>',
					    '<div class="flex-item">',
					      '<div class="text-center"><i class="fa fa-cloud-upload h1"></i></div>',
					      '<p class="text-center">СОВРЕМЕННО</p>',
					    '</div>',
					  '</div>',
					  '<div class="profit">',
					    '<h2 class="l-title">Наши преимущества</h2>',
					    '<div class="flex-row">',
					      '<div class="flex-item profit-item">',
					        '<div><i class="fa fa-check-circle h1"></i></div><span class="h4">1 час на одобрение</span>',
					      '</div>',
					      '<div class="flex-item profit-item">',
					        '<div><i class="fa fa-check-circle h1"></i></div><span class="h4">1 час на получение</span>',
					      '</div>',
					      '<div class="flex-item profit-item">',
					        '<div><i class="fa fa-check-circle h1"></i></div><span class="h4">Ставка от 1% на выдачу займа</span>',
					      '</div>',
					      '<div class="flex-item profit-item">',
					        '<div><i class="fa fa-check-circle h1"></i></div><span class="h4">44-ФЗ 223-ФЗ и коммерческие торги</span>',
					      '</div>',
					      '<div class="flex-item profit-item">',
					        '<div><i class="fa fa-check-circle h1"></i></div><span class="h4">Минимальный пакет документов</span>',
					      '</div>',
					    '</div>',
					  '</div>',
					  '<hr/>',
					  '<div class="get-tender-row text-center"><span class="h3">Получить тендерный займ просто!',
					      '<button type="button" class="btn btn-success get-tender"><span>Получить тендерный займ</span></button></span></div>',
					  '<hr/>',
					  '<calculator></calculator>',
					  '<hr/>',
					  '<div class="steps">',
					    '<h2 class="l-title">Все заботы мы берем на себя<br/><span class="h4">Получение тендерного займа без открытия р/с и залога в 4 простых шага</span></h2>',
					    '<div class="flex-row">',
					      '<div class="flex-item step-item"><span class="step h2">1</span>',
					        '<h4>',
					          	'<a href="#">Отправьте заявку</a>&nbsp;или&nbsp;<strong>Позвоните</strong>',
					          '</h4>',
					        '<p>Менеджер уточнит детали и предложит лучшее для вас решение</p>',
					        '<div class="step-footer"><i class="fa fa-clock-o h1"></i><span class="h5">5 мин.</span></div>',
					      '</div>',
					      '<div class="flex-item step-item"><span class="step h2">2</span>',
					        '<h4><strong>Отправьте всего 2 документа</strong></h4>',
					        '<p>Для решения о выдаче займа вам понадобится бухгалтерская отчетность и заполненая анкета</p>',
					        '<div class="step-footer"><i class="fa fa-clock-o h1"></i><span class="h5">30 мин.</span></div>',
					      '</div>',
					      '<div class="flex-item step-item"><span class="step h2">3</span>',
					        '<h4><strong>Получите решение по займу</strong></h4>',
					        '<p>Вместе с одобрением вы также сразу получите предложение по банковской гарантии</p>',
					        '<div class="step-footer"><i class="fa fa-clock-o h1"></i><span class="h5">10 мин.</span></div>',
					      '</div>',
					      '<div class="flex-item step-item"><span class="step h2">4</span>',
					        '<h4><strong>Средства сразу поступают на ваш виртуальный счет</strong></h4>',
					        '<p>',
					          'Затем деньги перечисляются на площадку срочным платежом в течение 3-х часов',
					        '</p>',
					        '<div class="step-footer"><i class="fa fa-clock-o h1"></i><span class="h5">3 час.</span></div>',
					      '</div>',
					    '</div>',
					  '</div>',
					  '<hr/>',
					  '<div class="request clearfix">',
					    '<h2 class="l-title">Подача заявки</h2>',
					    '<form id="jvalidatecontacts" role="form" method="post" class="form-horizontal">',
					      '<div class="col-md-12">',
					        '<div class="panel-body">',
					          '<div class="form-group">',
					            '<div class="col-md-3"></div>',
					            '<div class="col-md-9">',
					              '<h3>Контактная информация</h3>',
					            '</div>',
					          '</div>',
					          '<div class="form-group">',
					            '<label class="col-md-3 control-label">ФИО *:</label>',
					            '<div class="col-md-9">',
					              '<input type="text" name="fio" class="form-control"/><strong class="help-block">Обязательное поле</strong>',
					            '</div>',
					          '</div>',
					          '<div class="form-group">',
					            '<label class="col-md-3 control-label">E-mail *:</label>',
					            '<div class="col-md-9">',
					              '<input type="email" value="" name="email" class="form-control"/><strong class="help-block">Обязательное поле</strong>',
					            '</div>',
					          '</div>',
					          '<div class="form-group">',
					            '<label class="col-md-3 control-label">Телефон *:</label>',
					            '<div class="col-md-9">',
					              '<input type="tel" value="" name="phone" class="form-control"/><strong class="help-block">Обязательное поле</strong>',
					            '</div>',
					          '</div>',
					          '<div class="form-group">',
					            '<label class="col-md-3 control-label">ИНН:</label>',
					            '<div class="col-md-9">',
					              '<input type="text" value="" name="inn" class="form-control"/><strong class="help-block">Не обязательно, но поможет нашим экспертам быстрее и точнее расчитать ваш тариф</strong>',
					            '</div>',
					          '</div><br/>',
					          '<div class="form-group">',
					            '<div class="col-md-3"></div>',
					            '<div class="col-md-9">',
					              '<h3>Параметры кредита</h3>',
					            '</div>',
					          '</div>',
					          '<div class="form-group">',
					            '<label class="col-md-3 control-label">Сумма кредита *:</label>',
					            '<div class="col-md-9">',
					              '<input type="text" name="sum" class="form-control"/><strong class="help-block">Обязательное поле</strong>',
					            '</div>',
					          '</div>',
					          '<div class="form-group">',
					            '<div class="col-md-3"></div>',
					            '<div class="radio-flex col-md-9">',
					              '<label class="radio-inline">',
					                '<input type="radio" name="fz"/><span>44-ФЗ</span>',
					              '</label>',
					              '<label class="radio-inline">',
					                '<input type="radio" name="fz" checked="checked"/><span>223-ФЗ</span>',
					              '</label>',
					            '</div>',
					          '</div>',
					          '<div class="form-group">',
					            '<label class="col-md-3 control-label">N процедуры на zakupki.gov.ru *:</label>',
					            '<div class="col-md-9">',
					              '<input type="text" value="" name="procedurenumber" class="form-control"/>',
					              '<strong class="help-block">Искать на &nbsp;',
					              	'<a href="http://zakupki.gov.ru">zakupki.gov.ru</a>',
					              '</strong>',
					            '</div>',
					          '</div>',
					          '<div class="form-group">',
					            '<div class="col-md-3"></div>',
					            '<div class="col-md-9">',
					              '<input type="submit" value="Направить заявку" class="submit btn btn-success"/>',
					            '</div>',
					          '</div>',
					        '</div>',
					      '</div>',
					    '</form>',
					  '</div>',
					  '<hr/>',
					  '<div class="l-carousel clearfix">',
					    '<h2 class="l-title">Наши партнеры</h2>',
					    '<div id="myCarousel" data-ride="carousel" data-type="multi" data-interval="3000" class="carousel slide">',
					      '<div class="carousel-inner">',
					        '<div class="item active">',
					          '<div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="img/1.jpg" class="img-responsive"/></a></div>',
					        '</div>',
					        '<div class="item">',
					          '<div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="img/2.jpg" class="img-responsive"/></a></div>',
					        '</div>',
					        '<div class="item">',
					          '<div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="img/3.jpg" class="img-responsive"/></a></div>',
					        '</div>',
					        '<div class="item">',
					          '<div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="img/4.jpg" class="img-responsive"/></a></div>',
					        '</div>',
					        '<div class="item">',
					          '<div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="img/5.jpg" class="img-responsive"/></a></div>',
					        '</div>',
					      '</div><a href="#myCarousel" data-slide="prev" class="left carousel-control"><i class="glyphicon glyphicon-chevron-left"></i></a><a href="#myCarousel" data-slide="next" class="right carousel-control"><i class="glyphicon glyphicon-chevron-right">',     '</i></a>',
					    '</div>',
					  '</div>',
					  '<hr/>',
					  '<div class="l-footer">',
					    '<p>Наша компания полностью обеспечивает полный перечень финансовых продуктов на всех этапах закупки. Получить любой, интересующий Вас продукт можно получить дистанционно и онлайн, перейдя по&nbsp; <a href="#">ссылке</a></p>',
					    '<div id="message-box-success" class="message-box message-box-success animated fadeIn">',
					      '<div class="mb-container">',
					        '<div class="mb-middle">',
					          '<div class="mb-title"><span class="fa fa-check"></span>Отправлено</div>',
					          '<div class="mb-content">',
					            '<p>Ваша заявка принята под № 234234234234, наш менеджер свяжется с вами в течение 30 мин.</p>',
					          '</div>',
					          '<div class="mb-footer">',
					            '<button class="btn btn-default btn-lg pull-right mb-control-close">Закрыть</button>',
					          '</div>',
					        '</div>',
					      '</div>',
					    '</div>',
					  '</div>',
					'</div>',
				].join(' '),
			 
				data: function() {
						return {
								
						}
								
				},
				ready: function() {
					var vm = this;
					vm.launchCarousel();
					vm.launchValidation();
				},
				methods: {
					launchCarousel: function() {
						$('.carousel[data-type="multi"] .item').each(function() {
			        var next = $(this).next();
			        if (!next.length) {
			            next = $(this).siblings(':first');
			        }
			        next.children(':first-child').clone().appendTo($(this));

			        for (var i = 0; i < 2; i++) {
			            next = next.next();
			            if (!next.length) {
			                next = $(this).siblings(':first');
			            }

			            next.children(':first-child').clone().appendTo($(this));
			        }
			      });
					},
					launchValidation: function() {
						$("#jvalidatecontacts").validate({
	            ignore: [],
	            rules: {
	                fio: {
	                    required: true,
	                    minlength: 2,
	                    maxlength: 100
	                },

	                email: {
	                    required: true,
	                    email: true
	                },
	                phone: {
	                    required: true,
	                    min: 10,

	                },
	                inn: {
	                    required: false,
	                },
	                sum: {
	                    required: true,
	                    min: 0,
	                },
	                fz: {
	                    required: true,
	                },
	                procedurenumber: {
	                    required: true,
	                    min: 0,
	                },
	            },
	            invalidHandler: function(event, validator) {
	                // 'this' refers to the form
	                var errors = validator.numberOfInvalids();
	                if (errors) {
	                    var message = errors == 1 ? 'You missed 1 field. It has been highlighted' : 'You missed ' + errors + ' fields. They have been highlighted';
	                    $("div.error span").html(message);
	                    $("div.error").show();
	                } else {
	                    $("div.error").hide();
	                }
	            },
	            submitHandler: function(form) {
                $.post("http://google.com", function() {
                       alert("success");
                    })
                    .done(function() {
                        $('#message-box-success').show()
                    })
                    .fail(function() {
                        $('#message-box-success').show()
                    })
		           }
		        });
					}
				}
				// options
				})

});

