function displayImage() {
    const textInput = document.getElementById("textInput").value;
    const outputImage = document.getElementById("outputImage");

    if (textInput) {
        outputImage.src = textInput;
        outputImage.alt = "表示する画像";
    } else {
        alert("画像のURLを入力してください");
    }
}

$(document).ready(function() {
    // Homeリンクがクリックされたときに実行される
    $('#home-link').click(function(event) {
        event.preventDefault(); // デフォルトのリンク動作を無効にする
        
        // <div class="uni">に画像をHTMLとして追加
        $('#box1,#box2,#box3').html('<img src="./uni3.png" alt="表示画像" style="width:100%; height:auto;">');

        // チェックボックスの状態を解除して、オーバーレイを非表示にする
        $('#overlay-input').prop('checked', false);
    });

    // .uni内の画像がクリックされたときにその画像を削除
    $('.uni').on('click', 'img', function() {
        $(this).remove(); // クリックされた画像を削除
    });
});



$(document).ready(function() {
    // Homeリンクがクリックされたときに実行される
    $('#dj').click(function(event) {
        event.preventDefault(); // デフォルトのリンク動作を無効にする
        
        // <div class="uni">に画像をHTMLとして追加
        $('.djing').html('<img src="./djikegaisan.png" alt="表示画像" style="width:100%; height:auto;">');

        // $('.turntable').html('<img src="./turntable.png" alt="表示画像" style="width:100%; height:auto;">');

        // チェックボックスの状態を解除して、オーバーレイを非表示にする
        $('#overlay-input').prop('checked', false);
    });

    // .uni内の画像がクリックされたときにその画像を削除
    $('.djing').on('click', 'img', function() {
        $(this).remove(); // クリックされた画像を削除
    });
});




$(document).ready(function() {
    // Homeリンクがクリックされたときに実行される
    $('#ikura').click(function(event) {
        event.preventDefault(); // デフォルトのリンク動作を無効にする
        
        // <div class="uni">に画像をHTMLとして追加
        $('#box1,#box2,#box3').html('<img src="./ikura3.png" alt="表示画像" style="width:100%; height:auto;">');

        // $('.turntable').html('<img src="./turntable.png" alt="表示画像" style="width:100%; height:auto;">');

        // チェックボックスの状態を解除して、オーバーレイを非表示にする
        $('#overlay-input').prop('checked', false);
    });

    // .uni内の画像がクリックされたときにその画像を削除
    $('.uni').on('click', 'img', function() {
        $(this).remove(); // クリックされた画像を削除
    });
});

$(document).ready(function() {
    // Homeリンクがクリックされたときに実行される
    $('#maguro').click(function(event) {
        event.preventDefault(); // デフォルトのリンク動作を無効にする
        
        // <div class="uni">に画像をHTMLとして追加
        $('#box1,#box2,#box3').html('<img src="./maguro7.png" alt="表示画像" style="width:100%; height:auto;">');

        // $('.turntable').html('<img src="./turntable.png" alt="表示画像" style="width:100%; height:auto;">');

        // チェックボックスの状態を解除して、オーバーレイを非表示にする
        $('#overlay-input').prop('checked', false);
    });

    // .uni内の画像がクリックされたときにその画像を削除
    $('.uni').on('click', 'img', function() {
        $(this).remove(); // クリックされた画像を削除
    });
});



$(document).ready(function() {
    // オーディオ要素の取得
    var audio = $('#audio-player')[0];

    // 再生ボタンをクリックしたとき
    $('#play-button').on('click', function() {
        audio.play();
    });

    // 停止ボタンをクリックしたとき
    $('#pause-button').on('click', function() {
        audio.pause();
        audio.currentTime = 0; // 再生位置をリセット
    });

    $('#volume-slider').on('input', function() {
        audio.volume = $(this).val(); // 音量を調整
    });
});


$(document).ready(function() {
    // Web Audio API の初期化
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = $('#audio-player')[0];
    const audioSource = audioContext.createMediaElementSource(audioElement);

    // イコライザーのフィルタを作成
    const bassFilter = audioContext.createBiquadFilter();
    bassFilter.type = "lowshelf";
    bassFilter.frequency.value = 200; // 低音のカットオフ周波数

    const midFilter = audioContext.createBiquadFilter();
    midFilter.type = "peaking";
    midFilter.frequency.value = 1000; // 中音のカットオフ周波数

    const trebleFilter = audioContext.createBiquadFilter();
    trebleFilter.type = "highshelf";
    trebleFilter.frequency.value = 3000; // 高音のカットオフ周波数

    // オーディオチェーンの構築
    audioSource.connect(bassFilter);
    bassFilter.connect(midFilter);
    midFilter.connect(trebleFilter);
    trebleFilter.connect(audioContext.destination);

    // 再生ボタン
    $('#play-button').on('click', function() {
        audioContext.resume();
        audioElement.play();
    });

    // 停止ボタン
    $('#pause-button').on('click', function() {
        audioElement.pause();
        audioElement.currentTime = 0;
    });

    // 音量スライダー
    $('#volume-slider').on('input', function() {
        audioElement.volume = $(this).val();
    });

    // 低音スライダー
    $('#bass-slider').on('input', function() {
        bassFilter.gain.value = $(this).val();
    });

    // 中音スライダー
    $('#mid-slider').on('input', function() {
        midFilter.gain.value = $(this).val();
    });

    // 高音スライダー
    $('#treble-slider').on('input', function() {
        trebleFilter.gain.value = $(this).val();
    });
});



$(document).ready(function() {
    let isDragging = false;
    let offsetX, offsetY;

    $('.controls').on('mousedown', function(event) {
        isDragging = true;
        offsetX = event.clientX - $(this).offset().left;
        offsetY = event.clientY - $(this).offset().top;
        $(this).css('cursor', 'move'); // カーソルをドラッグ状態に変更
    });

    $(document).on('mousemove', function(event) {
        if (isDragging) {
            $('.controls').css({
                left: event.clientX - offsetX + 'px',
                top: event.clientY - offsetY + 'px',
                position: 'absolute'
            });
        }
    });

    $(document).on('mouseup', function() {
        isDragging = false;
        $('.controls').css('cursor', 'default'); // カーソルを元に戻す
    });
});



// 以下JSおねえさん
document.addEventListener("DOMContentLoaded", function () {
    let isDisp = false;  // 表示状態を記録するフラグ
    let repeat;  // タイマーのIDを保持

    if (repeat) {
      clearTimeout(repeat);
    }

    let pMessage = document.getElementById("message"); // pMessageをここで定義

    // メッセージを表示する関数
    window.disp = function () {  // グローバル関数として定義
      if (isDisp) {
        pMessage.innerHTML = "それは良かったです！";
        isDisp = false;
      } else {
        pMessage.innerHTML = "<br>";
        isDisp = true;
      }
      repeat = setTimeout(disp, 500);  // 関数をそのまま渡す
    };

    let yellMessage = "私ももっとがんばります〜";  // 表示する文字列
    let yellIndex = 1;

    // メッセージを段階的に表示する関数
    window.dispYell = function () {  // グローバル関数として定義
      if (repeat) {
        clearTimeout(repeat);
      }

      let pMessage = document.getElementById('message');
      pMessage.innerHTML = yellMessage.substring(0, yellIndex);
      yellIndex++;

      if (yellIndex > yellMessage.length) {
        yellIndex = 1;
      }

      repeat = setTimeout(dispYell, 500);  // 関数をそのまま渡す
    };
  });
