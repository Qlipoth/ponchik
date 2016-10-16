Vue.component('fns-pies', Vue.extend({
    props: {
        dataready: {
            type: Boolean,
            defaults: false
        },
        pies: {
            type: Array
        },

    },
    template: [
        '<div class="pie-box sorter" v-if="pies && pies.length">',
            '<div class="item" @move-ended="catchEnd" v-for="pie in pies" transition="item">',
                '<fns-pie :extend="pie" :last-event="pie.lastEvent" :transitionend="transitionend"></fns-pie>',
            '</div>',
        '</div>',
    ].join(' '),
    data: function() {
        return {
            transitionend: false
        }
    },
    methods: {
        catchEnd: function() {
            this.transitionend = !this.transitionend;
        },
        getData: function(p) {
            var vm = this;
            vm.dataready = false;
            // vm.toggleMask();
            // $.get('/aggregate/API/get/groupServiceData')
            $.post('/getTestData', { period: p})
            .done(function(response) {
                console.log(response)
                vm.pies = _.map(response, function(el) {
                    var type = 'middle';
                    if (el.status === '2') {
                        type = 'good'
                    }
                    if (el.status === '5') {
                        type = 'bad'
                    }
                    return {
                        title: el.description,

                        data: {
                            content: [
                                {   status: 2,
                                    value: parseInt(el.green) || 0,
                                    color: '#00a651',
                                },
                                {   status: 3,
                                    value: parseInt(el.yellow) || 0,
                                    color: '#f7d11d',
                                },
                                {   status: 5,
                                    value: parseInt(el.red) || 0,
                                    color: '#ff0000',
                                },
                            ]
                        },
                        lastEvent: {
                            ok: parseInt(el.red)? false : true,
                            text: '',
                            type: type,
                            date: el.startTime,
                            total: el.total
                        }
                    }
                })
                vm.dataready = true;
            })
            .fail(function() {
                console.log("error");
            })
        },
    },
    ready: function() {
        var vm = this;
        vm.getData(0);
    },

}));

