Vue.component('fns-timer', Vue.extend({
    props: ['time'],
    data: function() {
        return {
            formatedtime: null,
            ticktack: false,
        }
    },
    template: [
        '<div v-if="time">',
            '<i class="bad fa fa-circle" :class="{\'tick\': ticktack, \'tack\': !ticktack}"></i>',
            '<span>{{formatedtime}}</span>',
        '<div>',
    ].join(' '),
    ready: function() {
        var vm = this;
        var duration; // = moment.duration(moment() - vm.lastEvent, 'milliseconds');
        var ms; // miliseconds
        setInterval(function() {
            vm.ticktack = !vm.ticktack;
            duration = moment.duration(moment() - moment(vm.time), 'milliseconds');
            ms = duration.asMilliseconds();
            vm.formatedtime = moment(ms).format('hh:mm:ss');
        }, 1000);
    },
}));
