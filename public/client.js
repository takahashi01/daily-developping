$(function() {
  
  // 「/imglist」にアクセスして画像リストを取得
  $.get('/imglist', function(imglist) {
    
    // 画像リストを参照して、すべての画像を表示する
    imglist.forEach(function(img) {
      $('<div class="column is-one-quarter"><img src="'+ img +'"></div>')
      .appendTo('#imgbox');
    });
    
  });
  
});