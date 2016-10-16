Vue.component('fns-periodpicker', {
    template: [
        '<div class="periodpicker">',
            '<re-button-selector @onshowpicker="showPicker" :ispicker="true" :buttons="buttons" :selected.sync="selected"></re-button-selector>',
            '<p class="text-center">{{periodlabel}}</p>',
            '<input style="visibility: hidden" type="text" name="daterange" value="" />',
        '</div>',
    ].join(' '),
    props: {
        clickhandler: {
            type: Function,
        }
    },
    data: function() {
        return {
            selected: 0,
            periodlabel: null,
            buttons: [
                {
                    text: "Час",
                    value: 0
                },
                {
                    text: "День",
                    value: 1
                },
                {
                    text: "Неделя",
                    value: 2
                },
                {
                    text: "Месяц",
                    value: 3
                },
                {
                    text: "Год",
                    value: 4
                },
                {
                    text: "Период",
                    value: 5
                }
            ],
        };
    },
    watch: {
        selected: function() {
            var vm = this;
            return vm.setValue(vm.selected);
        },
    },
    methods: {
        setValue: function(v) {
            var vm = this;
            vm.selected = v;
            var now = new Date;
            if (v===0) {

                vm.periodlabel = 'Сегодня с ' + moment(now).subtract(1, 'hours').format('HH:mm') + ' до ' + moment(now).format('HH:mm')
            }
            if (v===1) {
                vm.periodlabel = moment(now).subtract(1, 'days').format('dddd, D MMMM YYYY г.') + ' ― ' + moment(now).format('dddd, D MMMM YYYY г.')
            }
            if (v=== 2) {
                vm.periodlabel = moment(now).subtract(1, 'weeks').format('dddd, D MMMM YYYY г.') + ' ― ' + moment(now).format('dddd, D MMMM YYYY г.')
            }
            if (v===3) {
                vm.periodlabel = moment(now).subtract(1, 'month').format('dddd, D MMMM YYYY г.') + ' ― ' + moment(now).format('dddd, D MMMM YYYY г.')
            }
            if (v===4) {
                vm.periodlabel = moment(now).subtract(1, 'year').format('dddd, D MMMM YYYY г.') + ' ― ' + moment(now).format('dddd, D MMMM YYYY г.')
            }
            if (v===5) {
                vm.showPicker(true);
            }
        },
        initRangePicker: function() {
            var vm = this;
            $('input[name="daterange"]').daterangepicker({
                timePicker: true,
                timePicker24Hour: true,
                locale: {
                    format: 'DD/MM/YYYY',
                    cancelLabel: 'Отмена',
                    applyLabel: 'Применить',
                },
                opens: 'left',
                'applyClass': "btn-primary"
            })
            $('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
                console.log(picker.startDate.format('YYYY-MM-DD'));
                console.log(picker.endDate.format('YYYY-MM-DD'));
                vm.periodlabel = picker.startDate.format('dddd, D MMMM YYYY г.') + ' ― ' + picker.endDate.format('dddd, D MMMM YYYY г.');
                vm.showPicker(false);
            });

            $('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
                vm.showPicker(false);
            });
            $('input[name="daterange"]').on('hide.daterangepicker', function(ev, picker) {
                console.log('hidden')
                vm.showPicker(false);
            });

        },
        showPicker: function(val) {
            var vm = this;
            if (val) {
                $('input[name="daterange"]').click();
            }
        }
    },
    ready: function() {
        var vm = this;
        var now = new Date;
        vm.periodlabel = vm.periodlabel = 'Сегодня с ' + moment(now).subtract(1, 'hours').format('HH:mm') + ' до ' + moment(now).format('HH:mm');
        Vue.nextTick(function() {
            vm.initRangePicker();
        });
    },
});
