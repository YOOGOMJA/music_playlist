var __global = (function($){
    window.addEventListener('popstate' , e =>{
        console.log(location.hash);
        _fn.bg.change(location.hash);
    });

    var _list = [
        { 
            hash : '#honey', 
            class : 'honey', 
            embed : 'https://www.youtube.com/embed/rSL3LX8YYOw',
            title : 'honey',
            artist : 'Johnny Balik',
            releaseDate : '2018.7.13.',
            lyrics : "<p>Tell me everything and hold no lies</p>            <p>Say you're waiting for better skies</p>            <p>When you're mad as hell and you realize</p>            <p>All the little things which we rely</p>            <br>            <p>Hoping, praying</p>            <p>Working every day to get my mind right</p>            <p>Wasting my own time</p>            <p>Where were you when I was lost</p>            <p>So far from trying</p>            <br>            <p>Oh, but honey don't taste like summer no more</p>            <p>Stick around now, I miss you every night</p>            <p>We could pass time moving left and right</p>            <p>Think about when life goes by</p>            <p>Oh, within a day</p>            <br>            <p>Tell me everything and hold no lies</p>            <p>Say you're waiting for better skies</p>            <p>When you're mad as hell and you realize</p>            <p>All the little things which we rely</p>            <p>Oh, I've been</p>            <br>            <p>Hoping, praying</p>            <p>Working every day to get my mind right</p>            <p>Wasting my own time</p>            <p>Where were you when I was lost</p>            <p>So far from trying</p>            <br>            <p>Oh, but honey don't taste like summer no more</p>            <p>Stick around now, I miss you every night</p>            <p>We could pass time moving left and right</p>            <p>Think about when life goes by</p>            <p>Oh, within a day</p>            <br>            <p>Honey don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Summer no more, summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Summer no more, summer no more</p>            <br>            <p>Oh, but honey don't taste like summer no more</p>            <p>Stick around now, I miss you every night</p>            <p>We could pass time moving left and right</p>            <p>Think about when life goes by</p>            <p>Oh, within a day</p>            <br>            <p>Oh, but honey don't taste like summer no more</p>            <p>Stick around now, I miss you every night</p>            <p>We could pass time moving left and right</p>            <p>Think about when life goes by</p>            <p>Oh, within a day</p>            <br>            <p>Honey don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Summer no more, summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Summer no more, summer no more</p>"
        },
        { 
            hash : '#provider' , 
            class : 'provider' , 
            embed : 'https://www.youtube.com/embed/XKQNJzquduI' ,
            title : 'provider',
            artist : 'Frank Ocean',
            releaseDate : '2018.8.28.',
            lyrics : "<p>Memo finna start acting out if I don't see him soon</p>            <p>Yeah my best friend ain't backing out, it's still on sight, fool</p>            <p>I'm the only one out here on the night loops</p>            <p>I'm the only one out here on the night loops</p>            <p>Trophy case still light, body need a race stripe</p>            <p>And these minerals on my body break light</p>            <p>And these reds on my body brakelight</p>            <p>New man comin' up ahead on his own two</p>            <p>Is you a natural blondie like Goku?</p>            <p>Sleepin' on my belly in a loop like a serpent</p>            <p>Talking Heads ripplin' on the surface</p>            <p>Eyes low, chin heavy shoegazer</p>            <p>Moonwalkin', R.I.P. Stanley Kubrick</p>            <p>You had you some birthdays, could you prove it?</p>            <p>Show me the wisdom in your movement</p>            <p>Show me some wisdom in your movement</p>            <p>Feelings you provide</p>            <p>Feelings you provide</p>            <p>I know it, I know it</p>            <p>The feelings I, the feelings, I know it, I</p>            <p>Feelings you provide</p>            <p>Feelings you provide</p>            <p>I know it, I know it</p>            <p>The feelings, I know it, the feelings, I, I</p>            <p>Tonight I might change my life</p>            <p>If you lived like I live</p>            <p>You couldn't live without it</p>            <p>Said I'd be your new best friend</p>            <p>But what more? Yeah</p>            <p>Ain't too late to out</p>            <p>(Provide)</p>            <p>(Provide)</p>            <p>Tonight I might change my life, all for you</p>            <p>All for you (provide)</p>            <p>Provided, diamond lane that didn't exist</p>            <p>Packed the Astro van and brought my kids through</p>            <p>Prada tee on the eldest, throw the Gildan on the children</p>            <p>Hand-me-down fits</p>            <p>Chest pass, see mist off rotation (swish, swisha)</p>            <p>Stiff smile just like I'm Aphex Twin (yeah, come to daddy, yeah)</p>            <p>Pat the Patagonia pockets, tryna find my zip (uh, where it's at? Yeah)</p>            <p>Blunt twist, tightropes, I'm not fallin' off (never that, no)</p>            <p>Watch friends, go pro through fisheye lens, drownin' off clear</p>            <p>I just saw Jaws, divin' under influence</p>            <p>Been feelin' like the Lord just out of reach for me (for me)</p>            <p>How I feel lettin' man speak</p>            <p>How I feel lettin' man speak for me (for me)</p>            <p>Holyfield, keep your ears split for me</p>            <p>Can't show my face if you spit for me</p>            <p>Spit for me, yeah</p>            <p>Eyes low, chin heavy shoegazer</p>            <p>Moonwalkin', R.I.P. Stanley Kubrick</p>            <p>You had you some birthdays, could you prove it?</p>            <p>Show me the wisdom in your movement</p>            <p>Show me some wisdom in your movement</p>            <p>Feelings you provide</p>            <p>Feelings you provide</p>            <p>I know, I know it</p>            <p>The feelings I, the feelings, I know it, I</p>            <p>Feelings you provide</p>            <p>Feelings you provide</p>            <p>I know it, I know it</p>            <p>The feelings, I know it, the feelings, I, I</p>            <p>Tonight I might change my life, all for you, all for you</p>"
        }
    ]

    var _fn = {
        bg : {
            change : function(hash){
                if(hash){
                    for(var i= 0 ; i < _list.length ; i++){
                        if(_list[i].hash === hash){
                            $('.background .images').removeAttr('class').addClass('images').addClass(_list[i].class);
                            $('iframe').attr('src' , _list[i].embed);
                            $('.info-container .title').text(_list[i].title);
                            $('.info-container .artist').text(_list[i].artist);
                            $('.info-container .release-date').text(_list[i].releaseDate);
                            $('.lyrics-container .lyrics').html(_list[i].lyrics)
                            break;
                        }
                    }  
                }
                else{
                    $('.background .images').removeAttr('class').addClass('images').addClass(_list[0].class);
                    $('iframe').attr('src' , _list[0].embed);
                    $('.info-container .title').text(_list[0].title);
                    $('.info-container .artist').text(_list[0].artist);
                    $('.info-container .release-date').text(_list[0].releaseDate);
                    $('.lyrics-container .lyrics').html(_list[0].lyrics)
                }
                
                console.log('changed');
            }
        }
    }

    return {
        fn : {
            transition : {
                slideLyrics : function(){
                    if($('.lyrics').hasClass('slideup')){
                        $('.lyrics').removeClass('slideup').addClass('slidedown');
                        $('.lyrics-button').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
                    }
                    else{
                        $('.lyrics').removeClass('slidedown').addClass('slideup');
                        $('.lyrics-button').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
                    }
                },
                changeState : function(){
                    _fn.bg.change(location.hash);
                }
            }
        } 
    }
})(jQuery);

$(function(){
    __global.fn.transition.changeState();
})