window.addEventListener('load', () => {
// ここで音声データをまとめて取得
    const audioList = [
        // 応援歌
        new Audio("https://o289.github.io/NewMusicList/audio/audio1.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio2.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio3.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio4.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio5.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio6.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio7.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio8.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio9.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio10.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio11.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio12.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio13.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio14.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio15.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio16.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio17.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio18.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio19.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio20.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio21.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio22.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio23.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio24.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio25.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio26.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio27.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio28.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio29.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio30.mp3"),
        // ゲームBGM
        new Audio("https://o289.github.io/NewMusicList/audio/audio31.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio32.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio33.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio34.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio35.mp3"),
        // その他
        new Audio("https://o289.github.io/NewMusicList/audio/audio36.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio37.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio38.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio39.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio40.mp3"),
        // 応援歌2
        new Audio("https://o289.github.io/NewMusicList/audio/audio41.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio42.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio43.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio44.mp3"),
        new Audio("https://o289.github.io/NewMusicList/audio/audio45.mp3"),
    ];
// ここでID情報をまとめて取得
    const idList = [
        // 応援歌
        document.getElementById('nishioka'),
        document.getElementById('nakamura'),
        document.getElementById('yamakawa'),
        document.getElementById('ogata'),
        document.getElementById('maeda'),
        document.getElementById('imaoka'),
        document.getElementById('rose'),
        document.getElementById('haru'),
        document.getElementById('sniping'),
        document.getElementById('arai'),
        document.getElementById('ChanceArrives'),
        document.getElementById('fukudome'),
        document.getElementById('itoi'),
        document.getElementById('sekikawa'),
        document.getElementById('ohmura'),
        document.getElementById('Chance1'),
        document.getElementById('ishii'),
        document.getElementById('Chance4'),
        document.getElementById('takahashi'),
        document.getElementById('shibahara'),
        document.getElementById('iguchi'),
        document.getElementById('mayumi'),
        document.getElementById('fuzimoto'),
        document.getElementById('ogasawara'),
        document.getElementById('hiyama'),
        document.getElementById('suzuki'),
        document.getElementById('rose2'),
        document.getElementById('birth'),
        document.getElementById('yoshida'),
        document.getElementById('matunaka'),
        // ゲームBGM
        document.getElementById('bgm1'),
        document.getElementById('bgm2'),
        document.getElementById('bgm3'),
        document.getElementById('bgm4'),
        document.getElementById('bgm5'),
        // その他
        document.getElementById('other1'),
        document.getElementById('other2'),
        document.getElementById('other3'),
        document.getElementById('other4'),
        document.getElementById('other5'),
        // 応援歌
        document.getElementById('yamasaki'),
        document.getElementById('kiyohara'),
        document.getElementById('jyozima'),
        document.getElementById('murata'),
        document.getElementById('inaba'),
        // 
        document.getElementById('open1'),
        document.getElementById('open2'),
        document.getElementById('open3')
    ];
    // 特殊
    const pausing  = document.getElementById('pause');
    const stopping = document.getElementById('stop');



    // DOM操作
    // 
    function removeClass(){
        idList.forEach(function (id){
            id.classList.add('none')
        });
        stopping.classList.add('stop')
    }
    // 
    function addClass(){
        idList.forEach(function (id){
            id.classList.remove('none')
        });
        stopping.classList.remove('stop')
    }
    // 
    function prepare(){
        idList.forEach(function (id){
            id.classList.remove('prepare')
        });

    };
    function get(){
        pausing.classList.toggle('No')
    };




// 特殊ボタン
    // pause
    function pause(){
        audioList.forEach(function (music){
            music.pause();
        })
    };
    pausing.addEventListener('click', () => {
        pause();
        get();
    });
    // stop
    function stop(){
        audioList.forEach(function (music){
            music.pause();
            music.currentTime = 0;
        })
    };
    stopping.addEventListener('click', () => {
        stop();
        prepare();
        addClass();
        pausing.classList.remove('No')
    });
    // 
    function loop(){
        audioList.forEach(function (music){
            music.loop = true;
        });
    }
    // 




// 音楽の再生
    const play = () => {
    idList[0].addEventListener('click', () => {
        pause();
        removeClass();
        idList[0].classList.remove('none');
        idList[0].classList.add('prepare');
        get();
        audioList[0].play();
    })
    idList[1].addEventListener('click', () => {
        pause();
        removeClass();
        idList[1].classList.remove('none');
        idList[1].classList.add('prepare');
        get();        
        audioList[1].play();
    })
    idList[2].addEventListener('click', () => {
        pause();
        removeClass();
        idList[2].classList.remove('none');
        idList[2].classList.add('prepare');
        get();        
        audioList[2].play();
    })
    idList[3].addEventListener('click', () => {
        pause();
        removeClass();
        idList[3].classList.remove('none');
        idList[3].classList.add('prepare');
        get();        
        audioList[3].play();
    })
    idList[4].addEventListener('click', () => {
        pause();
        removeClass();
        idList[4].classList.remove('none');
        idList[4].classList.add('prepare');
        get();        
        audioList[4].play();
    });
    idList[5].addEventListener('click', () => {
        pause();
        removeClass();
        idList[5].classList.remove('none');
        idList[5].classList.add('prepare');
        get();        
        audioList[5].play();
    });
    idList[6].addEventListener('click', () => {
        pause();
        removeClass();
        idList[6].classList.remove('none');
        idList[6].classList.add('prepare')
        get();        
        audioList[6].play();
    });
    idList[7].addEventListener('click', () => {
        pause();
        removeClass();
        idList[7].classList.remove('none');
        idList[7].classList.add('prepare')
        get();        
        audioList[7].play();
    });
    idList[8].addEventListener('click', () => {
        pause();
        removeClass();
        idList[8].classList.remove('none');
        idList[8].classList.add('prepare')
        get();  
        audioList[8].play();
    });
    idList[9].addEventListener('click', () => {
        pause();
        removeClass();
        idList[9].classList.remove('none');
        idList[9].classList.add('prepare')
        get();
        audioList[9].play();
    });
    idList[10].addEventListener('click', () => {
        pause();
        removeClass();
        idList[10].classList.remove('none');
        idList[10].classList.add('prepare')
        get();
        audioList[10].play();
    });
    idList[11].addEventListener('click', () => {
        pause();
        removeClass();
        idList[11].classList.remove('none');
        idList[11].classList.add('prepare')
        get();
        audioList[11].play();
    });
    idList[12].addEventListener('click', () => {
        pause();
        removeClass();
        idList[12].classList.remove('none');
        idList[12].classList.add('prepare')
        get();
        audioList[12].play();
    });
    idList[13].addEventListener('click', () => {
        pause();
        removeClass();
        idList[13].classList.remove('none');
        idList[13].classList.add('prepare')
        get();
        audioList[13].play();
    });
    idList[14].addEventListener('click', () => {
        pause();
        removeClass();
        idList[14].classList.remove('none');
        idList[14].classList.add('prepare')
        get();
        audioList[14].play();
    });
    idList[15].addEventListener('click', () => {
        pause();
        removeClass();
        idList[15].classList.remove('none');
        idList[15].classList.add('prepare')
        get();
        audioList[15].play();
    });
    idList[16].addEventListener('click', () => {
        pause();
        removeClass();
        idList[16].classList.remove('none');
        idList[16].classList.add('prepare')
        get();
        audioList[16].play();
    });
    idList[17].addEventListener('click', () => {
        pause();
        removeClass();
        idList[17].classList.remove('none');
        idList[17].classList.add('prepare')
        get();
        audioList[17].play();
    });
    idList[18].addEventListener('click', () => {
        pause();
        removeClass();
        idList[18].classList.remove('none');
        idList[18].classList.add('prepare')
        get();
        audioList[18].play();
    });
    idList[19].addEventListener('click', () => {
        pause();
        removeClass();
        idList[19].classList.remove('none');
        idList[19].classList.add('prepare')
        get();
        audioList[19].play();
    });
    idList[20].addEventListener('click', () => {
        pause();
        removeClass();
        idList[20].classList.remove('none');
        idList[20].classList.add('prepare')
        get();
        audioList[20].play();
    });
    idList[21].addEventListener('click', () => {
        pause();
        removeClass();
        idList[21].classList.remove('none');
        idList[21].classList.add('prepare')
        get();
        audioList[21].play();
    });
    idList[22].addEventListener('click', () => {
        pause();
        removeClass();
        idList[22].classList.remove('none');
        idList[22].classList.add('prepare')
        get();
        audioList[22].play();
    });
    idList[23].addEventListener('click', () => {
        pause();
        removeClass();
        idList[23].classList.remove('none');
        idList[23].classList.add('prepare')
        get();
        audioList[23].play();
    });
    idList[24].addEventListener('click', () => {
        pause();
        removeClass();
        idList[24].classList.remove('none');
        idList[24].classList.add('prepare')
        get();
        audioList[24].play();
    });
    idList[25].addEventListener('click', () => {
        pause();
        removeClass();
        idList[25].classList.remove('none');
        idList[25].classList.add('prepare')
        get();
        audioList[25].play();
    });
    idList[26].addEventListener('click', () => {
        pause();
        removeClass();
        idList[26].classList.remove('none');
        idList[26].classList.add('prepare')
        get();
        audioList[26].play();
    });
    idList[27].addEventListener('click', () => {
        pause();
        removeClass();
        idList[27].classList.remove('none');
        idList[27].classList.add('prepare')
        get();
        audioList[27].play();
    });
    idList[28].addEventListener('click', () => {
        pause();
        removeClass();
        idList[28].classList.remove('none');
        idList[28].classList.add('prepare')
        get();
        audioList[28].play();
    });
    idList[29].addEventListener('click', () => {
        pause();
        removeClass();
        idList[29].classList.remove('none');
        idList[29].classList.add('prepare')
        get();
        audioList[29].play();
    });
    idList[30].addEventListener('click', () => {
        pause();
        removeClass();
        idList[30].classList.remove('none');
        idList[30].classList.add('prepare')
        get();
        audioList[30].play();
    });
    idList[31].addEventListener('click', () => {
        pause();
        removeClass();
        idList[31].classList.remove('none');
        idList[31].classList.add('prepare')
        get();
        audioList[31].play();
    });
    idList[32].addEventListener('click', () => {
        pause();
        removeClass();
        idList[32].classList.remove('none');
        idList[32].classList.add('prepare')
        get();
        audioList[32].play();
    });
    idList[33].addEventListener('click', () => {
        pause();
        removeClass();
        idList[33].classList.remove('none');
        idList[33].classList.add('prepare')
        get();
        audioList[33].play();
    });
    idList[34].addEventListener('click', () => {
        pause();
        removeClass();
        idList[34].classList.remove('none');
        idList[34].classList.add('prepare')
        get();
        audioList[34].play();
    });
    idList[35].addEventListener('click', () => {
        pause();
        removeClass();
        idList[35].classList.remove('none');
        idList[35].classList.add('prepare')
        get();
        audioList[35].play();
    });
    idList[36].addEventListener('click', () => {
        pause();
        removeClass();
        idList[36].classList.remove('none');
        idList[36].classList.add('prepare')
        get();
        audioList[36].play();
    });
    idList[37].addEventListener('click', () => {
        pause();
        removeClass();
        idList[37].classList.remove('none');
        idList[37].classList.add('prepare')
        get();
        audioList[37].play();
    });
    idList[38].addEventListener('click', () => {
        pause();
        removeClass();
        idList[38].classList.remove('none');
        idList[38].classList.add('prepare')
        get();
        audioList[38].play();
    });
    idList[39].addEventListener('click', () => {
        pause();
        removeClass();
        idList[39].classList.remove('none');
        idList[39].classList.add('prepare')
        get();
        audioList[39].play();
    });
    idList[40].addEventListener('click', () => {
        pause();
        removeClass();
        idList[40].classList.remove('none');
        idList[40].classList.add('prepare')
        get();
        audioList[40].play();
    });
    idList[41].addEventListener('click', () => {
        pause();
        removeClass();
        idList[41].classList.remove('none');
        idList[41].classList.add('prepare')
        get();
        audioList[41].play();
    });
    idList[42].addEventListener('click', () => {
        pause();
        removeClass();
        idList[42].classList.remove('none');
        idList[42].classList.add('prepare')
        get();
        audioList[42].play();
    });
    idList[43].addEventListener('click', () => {
        pause();
        removeClass();
        idList[43].classList.remove('none');
        idList[43].classList.add('prepare')
        get();
        audioList[43].play();
    });
    idList[44].addEventListener('click', () => {
        pause();
        removeClass();
        idList[44].classList.remove('none');
        idList[44].classList.add('prepare')
        get();
        audioList[44].play();
    });
    };
    play();
    loop();
});