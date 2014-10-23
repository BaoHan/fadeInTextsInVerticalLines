////////////////////////////////////////////////////
//
// fadeInTextsInVerticalLines 1.0.0
//
// fade in texts in vertical lines
//
// MIT licensed
//
// Copyright (C) 2014 Yuki Yamashina and Minorin
////////////////////////////////////////////////////

(function($){

    $.fn.verticalTextsWithDelay = function(options) {

        var defaults = {
            lineByLine       : true,
            opacityThreshold : 0.1,
            delaySpeed       : 1000,
            fadeSpeed        : 2500,
            fontSize         : '1.5rem',
            lineHeight       : '1.8rem'
        };

        var options = $.extend({},defaults,options);

        // CSS settings
        $('.vertical').css({
            'margin'         : 0,
            'padding'        : 0,
            'border'         : 0,
            'float'          : 'right',
            'position'       : 'relative',
            'width'          : options.fontSize,
            'margin-right'   : options.fontSize,
            'line-height'    : options.lineHeight,
            'letter-spacing' : options.letterSpacing,
            'font-size'      : options.fontSize
        });        

        var _strings = [];

        var _this  = $(this),
            _these = $(this).children( 'span.vertical' );

        _these.each( function( index ) {

            var self  = this;

            // substitute texts for strings and delete texts
            $(self).css('opacity','1');
            _strings[index] = $(self).text();
            $(self).text('');

            if ( options.lineByLine ) {

                var interval = setInterval( function() {
                    // delay showing next line
                    if ( index == 0 || _these.eq( index - 1 )
                                             .children( 'span:last' )
                                             .css('opacity') >= options.opacityThreshold ) {
                        clearInterval( interval );
                        showTexts( self, _strings[index], options );
                    }
                }, 50);

            } else {
                showTexts( self, _strings[index], options );
            }

            function showTexts( element, string, options ) {

                var $element = $(element);

                for ( var j = 0; j < string.length; j++ ) {

                    var character = string.substr(j,1);

                    switch ( character ) {
                        case '、':
                        case '。':
                            $element.append('<span class="vertical period">' + character + '</span>');
                            $('.period').css({
                                'position'      : 'relative',
                                'display'       : 'block',
                                'top'           : - parseFloat(options.fontSize) * 0.7 + 'rem',
                                'left'          :   parseFloat(options.fontSize) * 0.7 + 'rem',
                                'margin-bottom' : - parseFloat(options.fontSize) * 0.5 + 'rem'
                            });
                            break;
                        case 'っ':
                        case 'ゃ':
                        case 'ゅ':
                        case 'ょ':
                        case 'ぁ':
                        case 'ぃ':
                        case 'ぅ':
                        case 'ぇ':
                        case 'ぉ':
                        case 'ッ':
                        case 'ャ':
                        case 'ュ':
                        case 'ョ':
                        case 'ァ':
                        case 'ィ':
                        case 'ゥ':
                        case 'ェ':
                        case 'ォ':
                            $element.append('<span class="vertical smallChar">' + character + '</span>');
                            $('.smallChar').css({
                                'position'      : 'relative',
                                'display'       : 'block',
                                'top'           : - parseFloat(options.fontSize) * 0.15 + 'rem',
                                'left'          :   parseFloat(options.fontSize) * 0.35 + 'rem',
                                'font-size'     :   parseFloat(options.fontSize) * 0.8  + 'rem'
                            });
                            break;
                        case '-':
                            $element.append('<span class="vertical bar">｜</span>');
                            $('.bar').css({
                                'position'      : 'relative',
                                'display'       : 'block',
                                'left'          : - parseFloat(options.fontSize) * 0.15 + 'rem',
                                'font-size'     :   parseFloat(options.fontSize) * 1.2  + 'rem',
                                'margin-top'    :   parseFloat(options.fontSize) * 0.3  + 'rem',
                                'margin-bottom' :   parseFloat(options.fontSize) * 0.3  + 'rem'
                            });
                            break;
                        case 'ー':
                            $element.append('<span class="vertical macron">' + character + '</span>');
                            $('.macron').css({
                                'position'      : 'relative',
                                'display'       : 'block',
                                'transform'     : 'rotate(90deg)',
                                'left'          : -parseFloat(options.fontSize) * 0.1 + 'rem',
                                'font-size'     :  parseFloat(options.fontSize) * 1   + 'rem'
                            });
                            break;
                        default:
                            $element.append('<span class="vertical">' + character + '</span>');
                            break;
                    }

                    // fade in characters one by one with delay
                    $element.children( 'span:last' )
                            .delay( options.delaySpeed * j )
                            .animate( {'opacity':'1'}, options.fadeSpeed );

                }
   
            }

        });

    }

})(jQuery);