
  var imgs = ['img/photo.jpg', 'img/photo0.png', 'img/photo1.png', 'img/photo2.png'];
  var html = " ";

  for (var j = 0; j < imgs.length; j++) {
    html += `<div id="photo">
          <div id="photo-img">
            <img src="${imgs[j]}" />
          </div>
          <span id="photo-opacity" onclick="modal_img(${j})">
            <div id="photo-text">
              <img src="img/like-white.png" /> ${j*j+123}개 &nbsp;&nbsp;
              <img src="img/comment-white.png" /> ${j*j+123+(10+j)}개
            </div>
          </span>

        </div>`;
  }
  document.getElementById('photoLine').innerHTML = html;

  function modal_img(j) {
    var black = document.getElementById('black');
    var modal_imgId = document.getElementById('modal-img');
    var html_img =`<img src="${imgs[j]}" />`

    if(black.style.display == "block"){
      black.style.display = "none"
      modal_imgId.style.display = "none"
    }
    else{
      black.style.display = "block";
      modal_imgId.style.display = "block"
    }
    document.getElementById('modal-img').innerHTML = html_img;
  }
