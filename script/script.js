window.onload = function(){
    // 가로 슬라이드
    var image_list = document.querySelector('.images');
    var prev = document.querySelector('.button_prev');
    var next = document.querySelector('.button_next');
    var paging = document.querySelectorAll('.hpaging > div');

    let curPos = 0;
    var imagewidth = 600;

    const fnext = () => {
        if(curPos < 4){
            prev.removeAttribute('disabled');
            image_list.style.left = -(curPos + 1) * imagewidth +"px";
            paging[curPos].style.backgroundColor = "white";
            paging[curPos+1].style.backgroundColor = "cornflowerblue";
            curPos = curPos + 1;
        }
        if(curPos == 4){
            prev.removeAttribute('disabled');
            next.setAttribute('disabled','true');
        }
    }

    const fprev = () => {
        if(curPos > 0){
            next.removeAttribute('disabled');
            image_list.style.left = -(curPos-1) * imagewidth +"px";
            paging[curPos].style.backgroundColor = "white";
            paging[curPos-1].style.backgroundColor = "cornflowerblue";
            curPos = curPos - 1;
        }
        if(curPos == 0){
            next.removeAttribute('disabled')
            prev.setAttribute('disabled','true');
        }
    }

    // 무한루프 - 가로
    var Limages = document.querySelector('.Limages');
    var Lprev = document.querySelector('.loop_prev');
    var Lnext = document.querySelector('.loop_next');
    var Lpaging = document.querySelectorAll('.loop_paging > div');
    
    var firstClone = Limages.firstElementChild;
    var lastClone = Limages.lastElementChild;
    var ClonedFirst = firstClone.cloneNode(true);
    var ClonedLast = lastClone.cloneNode(true);    
        
    let LcurPos = 1;

    // 가로 슬라이드 - 무한 루프 함수(0,-600,-1200,-1800,-2400,-3000,-3600)
    const lnext = () => {
        if(LcurPos <= 5){
            Limages.style.transition= 'all 0.5s';
            Limages.style.left = -(LcurPos + 1) * imagewidth +"px";
            if(LcurPos < 5){
                Lpaging[LcurPos-1].style.backgroundColor = "white";
                Lpaging[LcurPos].style.backgroundColor = "cornflowerblue";
            }
            else{
                Lpaging[LcurPos-1].style.backgroundColor = "white";
                Lpaging[0].style.backgroundColor = "cornflowerblue";
            }

            LcurPos = LcurPos + 1;
        }
        if(LcurPos == 6){
            setTimeout(() => {
                Limages.style.transition= 'all 0s';
                Limages.style.left = "-600px";
            },500)
            LcurPos = 1;
            
        }
    }

    const lprev = () => {
        if(LcurPos >= 1){
            Limages.style.transition= 'all 0.5s';
            Limages.style.left = -(LcurPos-1) * imagewidth +"px";
            
            if(LcurPos > 1){
                Lpaging[LcurPos-1].style.backgroundColor = "white";
                Lpaging[LcurPos-2].style.backgroundColor = "cornflowerblue";
            }
            else{
                Lpaging[LcurPos-1].style.backgroundColor = "white";
                Lpaging[4].style.backgroundColor = "cornflowerblue";
            }
            LcurPos = LcurPos - 1;
        }
        if(LcurPos == 0){
            setTimeout(() => {
                Limages.style.transition= 'all 0s';
                Limages.style.left = "-3000px";
            },500)
            LcurPos = 5;
        }
    }

    /* 세로 슬라이드 */
    var vimage = document.querySelector('.vimages');
    var vprev = document.querySelector('.verti_prev');
    var vnext = document.querySelector('.verti_next');
    var vpaging = document.querySelectorAll('.verti_paging > div');

    let vcurPos = 0;
    var imageHeight = 300;

    const v_next = () => {
        if(vcurPos < 4){
            vimage.style.transition = 'top 0.5s';
            vprev.removeAttribute('disabled');
            vimage.style.top = -(vcurPos + 1) * imageHeight +"px";
            vpaging[vcurPos].style.backgroundColor = "white";
            vpaging[vcurPos+1].style.backgroundColor = "cornflowerblue";
            vcurPos = vcurPos + 1;
        }
        if(vcurPos == 4){
            vprev.removeAttribute('disabled');
            vnext.setAttribute('disabled','true');
        }
    }

    const v_prev = () => {
        if(vcurPos > 0){
            vimage.style.top = -(vcurPos-1) * imageHeight +"px";
            vpaging[vcurPos].style.backgroundColor = "white";
            vpaging[vcurPos-1].style.backgroundColor = "cornflowerblue";
            vcurPos = vcurPos - 1;
        }
        if(vcurPos == 0){
            vnext.removeAttribute('disabled')
            vprev.setAttribute('disabled','true');
        }
    }

    /* 페이드인/아웃 슬라이드 */
    var fadeImage = document.querySelectorAll('.fade_images > img');
    var fade_prev = document.querySelector('.fade_prev');
    var fade_next = document.querySelector('.fade_next');
    var fade_paging = document.querySelectorAll('.fade_paging > div');

    let fade_curPos = 0;

    const fadeNext = () => {
        if(fade_curPos < 4){
            fade_prev.removeAttribute('disabled');
            fadeImage[fade_curPos].style.opacity = 0;
            fadeImage[fade_curPos+1].style.opacity = 1;
            fade_paging[fade_curPos].style.backgroundColor = "white";
            fade_paging[fade_curPos+1].style.backgroundColor = "cornflowerblue";
            fade_curPos = fade_curPos + 1;
        }
        if(fade_curPos == 4){
            fade_prev.removeAttribute('disabled');
            fade_next.setAttribute('disabled','true');
        }
    }

    const fadePrev = () => {
        if(fade_curPos > 0){
            fade_next.removeAttribute('disabled');
            fadeImage[fade_curPos].style.opacity = 0;
            fadeImage[fade_curPos-1].style.opacity = 1;
            fade_paging[fade_curPos].style.backgroundColor = "white";
            fade_paging[fade_curPos-1].style.backgroundColor = "cornflowerblue";
            fade_curPos = fade_curPos - 1;
        }
        if(fade_curPos == 0){
            fade_next.removeAttribute('disabled')
            fade_prev.setAttribute('disabled','true');
        }
    }

    function init(){
        /*가로 슬라이드 */
        prev.setAttribute("disabled","true");
        paging[0].style.backgroundColor = "cornflowerblue";
        prev.addEventListener('click', fprev);
        next.addEventListener('click', fnext);

        /*가로 슬라이드 - 페이징 */
        for(let page = 0 ; page < 5; page++){
            paging[page].addEventListener('click',function(e){
                image_list.style.left = -(e.target.id) * imagewidth +"px";
                for(let subpage = 0 ; subpage < 5; subpage++){
                    paging[subpage].style.backgroundColor = "white";
                }
                e.target.style.backgroundColor = "cornflowerblue";
                curPos = parseInt(e.target.id);

                if(curPos != 0 && curPos != 4){ // curPos가 1~3일때
                    prev.removeAttribute('disabled');
                    next.removeAttribute('disabled');
                }
                if(curPos == 0){
                    prev.setAttribute("disabled","true");
                    next.removeAttribute('disabled');
                }
                if(curPos == 4){
                    next.setAttribute("disabled","true");
                    prev.removeAttribute('disabled');
                }
                
            });
        }

        /* 가로 슬라이드 - 무한 루프*/
        Limages.append(ClonedFirst);
        Limages.prepend(ClonedLast);
        Lpaging[0].style.backgroundColor = "cornflowerblue";
        Lprev.addEventListener('click', lprev);
        Lnext.addEventListener('click', lnext);

        /*가로 슬라이드 무한 루프 - 페이징 */
        for(let lpage = 0 ; lpage < 5; lpage++){
            Lpaging[lpage].addEventListener('click',function(e){
                Limages.style.left = -(e.target.id) * imagewidth +"px";
                for(let lsubpage = 0 ; lsubpage < 5; lsubpage++){
                    Lpaging[lsubpage].style.backgroundColor = "white";
                }
                e.target.style.backgroundColor = "cornflowerblue";
                LcurPos = parseInt(e.target.id);
            });
        }

        /* 세로 슬라이드 */
        vprev.setAttribute('disabled','true');
        vpaging[0].style.backgroundColor = "cornflowerblue";
        vprev.addEventListener('click',v_prev);
        vnext.addEventListener('click',v_next);
        
        for(let vp = 0 ; vp < 5; vp++){
            vpaging[vp].addEventListener('click',function(e){
                vimage.style.top = -(e.target.id) * imageHeight +"px";
                for(let vpage = 0 ; vpage < 5; vpage++){
                    vpaging[vpage].style.backgroundColor = "white";
                }
                e.target.style.backgroundColor = "cornflowerblue";
                vcurPos = parseInt(e.target.id);

                if(vcurPos != 0 && vcurPos != 4){ // curPos가 1~3일때
                    vprev.removeAttribute('disabled');
                    vnext.removeAttribute('disabled');
                }
                if(vcurPos == 0){
                    vprev.setAttribute("disabled","true");
                    vnext.removeAttribute('disabled');
                }
                if(vcurPos == 4){
                    vnext.setAttribute("disabled","true");
                    vprev.removeAttribute('disabled');
                }
                
            });
        }
        /*페이드인/아웃 슬라이드 */
        fade_prev.setAttribute("disabled","true");
        fade_paging[0].style.backgroundColor = "cornflowerblue";
        fadeImage[0].style.opacity = 1;
        fadeImage[0].style.transition = 'all 0s';
        fade_prev.addEventListener('click', fadePrev);
        fade_next.addEventListener('click', fadeNext);

        for(let Fp = 0 ; Fp < 5; Fp++){
            fade_paging[Fp].addEventListener('click',function(e){

                for(let Fpsubpage = 0 ; Fpsubpage < 5; Fpsubpage++){
                    fadeImage[Fpsubpage].style.opacity = 0;
                    fade_paging[Fpsubpage].style.backgroundColor = "white";
                }
                e.target.style.backgroundColor = "cornflowerblue";
                fadeImage[e.target.id].style.opacity = 1;
                fade_curPos = parseInt(e.target.id);

                if(fade_curPos != 0 && fade_curPos != 4){ // curPos가 1~3일때
                    fade_prev.removeAttribute('disabled');
                    fade_next.removeAttribute('disabled');
                }
                if(fade_curPos == 0){
                    fade_prev.setAttribute("disabled","true");
                    fade_next.removeAttribute('disabled');
                }
                if(fade_curPos == 4){
                    fade_next.setAttribute("disabled","true");
                    fade_prev.removeAttribute('disabled');
                }
                
            });
        }

    }
    init();
}