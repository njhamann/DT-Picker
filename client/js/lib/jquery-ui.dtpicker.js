(function($) {
    $.widget('ui.dtpicker', {
        options: {
            time: null,
            format: null,
            autocomplete: null,
            datepicker: null
        },
        _create: function(){
            var $el = this.element; 
            this._events(); 
        },
        _setOption: function(key, value){
        },
        _appendPicker: function(){
            var _this = this;
            var $el = _this.element;
            var pos = _this._getOffset($el);
            var inputH = $el.outerHeight();
            var cont = '<div id="dt_container"><div id="dt_datepicker_container"></div><input type="hidden" id="dt_date" /><input type="text" id="dt_time" /></div>'; 
            $('#dt_container').remove(); 
            $('body').append(cont);
            $('#dt_container').css({
                padding:'10px',
                background: 'white',
                position:'absolute',
                top: pos.top+ inputH,
                left: pos.left
            });
            $('#dt_container').addClass('ui-widget'); 
            $('#dt_datepicker_container').datepicker({
                onSelect: function(){
                    _this._pushDateTime();
                }
            });
            $('#dt_time').autocomplete({
                source: this._getAutocompleteMinutes()
            });
            $('#dt_time').outerWidth($('#dt_container').width());
            $('#dt_time').css({
                margin: '10px 0 0 0'
            });
            $('#dt_time').val(this._getCurrentTime());
        },
        _pushDateTime: function(){
            var d = $('#dt_datepicker_container').datepicker('getDate');
            //console.log(d);
            var year = d.getFullYear();
            var month = d.getMonth()+1;
            var day = d.getDate();
            var t = $('#dt_time').val();
            var formatted = month + '/' + day + '/' + year + ' ' + t;
            this.element.val(formatted);
            console.log(d + ' ' + t);
        },
        _getCurrentTime: function(){
            var d = new Date();
            var curr_hour = d.getHours();
            var a_p = curr_hour < 12 ? 'AM' : 'PM';

            if (curr_hour == 0){
                curr_hour = 12;
            }
            if (curr_hour > 12){
                curr_hour = curr_hour - 12;
            }
            var curr_min = d.getMinutes();
            curr_min = curr_min < 10 ? '0' + curr_min : curr_min;
            var formatted = curr_hour + ':' + curr_min + ' ' + a_p;
            return formatted;
        },
        _getAutocompleteMinutes: function(){
            var splits = ['AM', 'PM'];
            var hours = 12;
            var minutes = 60;
            var finalTimes = [];
            for(var i=0; i<splits.length; i++){
                for(var a=0; a<hours; a++){
                    for(var b=0; b<minutes; b++){
                        var hourNum = a;
                        var minNum = b;
                        hourNum = (hourNum == 0 ? '12' : hourNum);
                        minNum = (minNum < 10 ? '0' : '') + minNum;
                        var time = hourNum+':'+minNum+' '+splits[i];
                        finalTimes.push(time);
                    }
                }
            }
            return finalTimes;
        },
        _removePicker: function(){
            $('#dt_container').remove();
        },
        _getOffset: function($el){
            var off = $el.offset();
            return off;
        },
        _events: function(){
            var _this = this;
            var $el = _this.element;
            $el.on('focus click', function(e){
                e.stopPropagation();
                _this._appendPicker();
                _this._pushDateTime();
            });
            
            $el.on('blur', function(){
                //_this._removePicker();
            });
            
            $(document).on('focus keyup', '#dt_time', function(e){
                e.stopPropagation();
                _this.element.val($(this).val());
                _this._pushDateTime();
            });
            $(document).on('click', function(e){
                var container = $('#dt_container');

                if (!container.is(e.target) && container.has(e.target).length === 0){
                    _this._removePicker();
                }                
            });
        },
        _destroy: function(){
        }
    });
})(jQuery);

