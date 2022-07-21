var $doc = $(document),
    $win = $(window),
    $svg = $('#mail-svg').drawsvg();
    // console.log($svg.scrollTop);
    // $svg_wrapper = $('#svg-wrapper');

    let svg_wrapper = document.getElementById('svg-wrapper');
    
    console.log('Client Top' + svg_wrapper.getBoundingClientRect().top);

    max = 1700 - 1400;

    // console.log('doc height: ' + $doc.height());
    // console.log('win height: ' + $win.height());
    // console.log($doc.height() - $win.height()  + ': doc - win');
    // console.log($doc.height() - $win.height()  + ': doc - win');
    // console.log(positionTop);
    $win.on('scroll', function() {
        var scrollValue =  $win.scrollTop() - 1300;
        var $this = $(this), offsetTop = $this.offset().top;
        console.log(scrollValue+':scrollvalue') ;
        console.log('OFFSET TOP ' + offsetTop);
        // console.log($svg_wrapper.scrollTop() + 'scrollTop');
        var positionTop= $win.scrollTop();
        console.log(positionTop+':windows scrolltop');
        if((positionTop>500) && (positionTop<2000)){
            // alert('aftab');
            console.log('svg running');
            console.log(positionTop+': scrolltop1');
            if (svg_wrapper.getBoundingClientRect().top >= 150 && svg_wrapper.getBoundingClientRect().top <= 151)  {
                // alert('hello');
                // var p = scrollValue / max;
                $svg.drawsvg('animate');
            }
            
            // console.log('progress' + p);
            // $svg.drawsvg('progress', p);
        }
        // $svg.drawsvg('animate');
    });