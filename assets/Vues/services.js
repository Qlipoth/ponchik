$(document).ready(function() {
    window.vm = new Vue({
        el: '#vue',
        template: [
            '<div class="container services">',
                '<div>',
                    '<h2 class="l-title">Финансовые сервисы</h2>',
                    '<br>',
                    '<h3 class="text-center">Предоставление финансирования:</h3>',
                    '<hr>',
                    '<div class="flex-row profit">',
                        '<div v-for="f in financing" class="flex-item profit-item service-item">',
                            '<div><i class="fa fa-check-circle h1"></i></div><h4><strong>{{f}}</strong></h4>',
                        '</div>',
                    '</div>',
                '</div>',
                '<hr>',
                '<div>',
                    // '<h2 class="l-title">Краткосрочное и среднесрочное инвестирование</h2>',
                    // '<br>',
                    '<h3 class="text-center">Краткосрочное и среднесрочное инвестирование</h3>',
                    '<hr>',
                    '<div class="flex-row profit">',
                        '<div v-for="i in investment" class="flex-item profit-item service-item">',
                            '<div><i class="fa fa-check-circle h1"></i></div><h4><strong>{{i}}</strong></h4>',
                        '</div>',
                    '</div>',
                '</div>',
                '<hr>',
                '<div>',
                '</div>',
                    // '<h2 class="l-title">Консалтинг в финансовой сфере</h2>',
                    '<h3 class="text-center">Консалтинг в финансовой сфере</h3>',
                    // '<br>',
                    '<img class="img-responsive" style="margin: auto;" src="img/21.png"/>',
                    // '<img class="img-responsive" src="img/finansy.jpg"/>',
            '</div>',
        ].join(' '),
       
        data: function() {
            return {
                financing: [
                    'тендерные займы',
                    'тендерные кредиты',
                    'банковские гарантии',
                    'обеспечение исполнения контракта',
                    'обеспечение заявки для участия в конкурсе',
                    'вечурное финансирование',
                    'предпринимательские займы',
                    'займы под недвижимость',
                ],
                investment: [
                    'Финансирование в обеспечение исполнения работ по коммерческим и государственным тендерам',
                    'Финансирование проектов и стартапов в различных сферах',
                ]
            }
                
        },
        ready: function() {
        }
        // options
        })

});




