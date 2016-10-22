$(document).ready(function() {
    window.vm = new Vue({
        el: '#vue',
        template: [
            '<div class="col-md-12">',
                '<div class="form-group clearfix">',
                    '<re-table v-bind:rows="investmentrows" v-bind:config="financeconfig"></re-table>',
                '</div>',
            '</div>',
        ].join(' '),
        mixins: [mixin],
        data: function() {
            return {
            }
                
        },
        ready: function() {
        }
        // options
        })

});

