
  var imgs = ['img/photo0.png', 'img/photo1.png', 'img/photo2.png'];
  var title = ['hiliterecords', 'aomgofficial', '1llionaire_records'];
  var id = ['jun094', 'cwd094', 'khy1234'];
  var title_comment = ['레디가 출연하는 #힙플쇼 Vol. 56의 예매가 오늘 오후 7시 멜론티켓을 통해 진행됩니다.',
    '[JAY PARK x YULTRON]',
    '05/30 신곡'
  ];
  var html = `<li class="feed">
            <div class="feed_header">
              <span class="feed_header_profile">
                <img src="https://scontent-icn1-1.cdninstagram.com/vp/1add49d3e51a48729bf717b7f32362d3/5D3D4ADA/t51.2885-19/s150x150/29740159_203573343571562_7949237046097215488_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com" />
                <a title="kozypop" href="https://www.instagram.com/kozypop/">kozypop</a>
              </span>
              <span id="moreclick"> <img id="feed_header_more" src="img/more.png" onclick="alert()" /></span>

            </div>

            <div class="photo">
              <img src="img/photo.jpg" />
            </div>

            <div class="icon">
              <span class="icon_left">
                <button><img onclick="like()" id="like-red" src="img/like.png" /></button>
                <button><img src="img/comment.png" /></button>
                <button><img src="img/share.png" /></button>
              </span>
              <span class="icon_right"><button><img src="img/save.png" /></button></span>
            </div>

            <div class="feed_footer">
              <div class="like">
                <img src="https://scontent-icn1-1.cdninstagram.com/vp/39111654ea70fa7b97d619408188bc65/5D3BD96A/t51.2885-19/s150x150/18723067_212900799227461_3198872430672084992_a.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com" />
                <strong> huckleberryp84</strong>님 <strong>외 1,036명</strong>이 좋아합니다.
              </div>
              <div class="hashtag">
                <strong>kozypop</strong> 월요일은 밝은 노래로🖼 Taeb2 - Precious (prod. Noden) <br />
                <span>#nowplaying #soundclod #사운드클라우드</span>
              </div>
              <div class="comments">
                <button>댓글 132개 모두 보기</button>
                <text><strong>r_n_014</strong> legendary three <br /></text>
                <text><strong>jingjind</strong> 真的！！！羡慕了</text>
              </div>

              <div class="comments_time">
                35분 전
              </div>
              <div class="textarea">
                <form>
                  <input type="text" placeholder="댓글 달기..." />
                  <input id="submit" type="submit" value="게시" />
                </form>
              </div>
            </div>
          </li>`;

  for (var i = 0; i < 3; i++) {
    html += `<li class="feed">
      <div class="feed_header">
        <span class="feed_header_profile">
          <img src= "https://scontent-icn1-1.cdninstagram.com/vp/1add49d3e51a48729bf717b7f32362d3/5D3D4ADA/t51.2885-19/s150x150/29740159_203573343571562_7949237046097215488_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"/>
          <a title="${title[i]}" href="https://www.instagram.com/kozypop/">${title[i]}</a>
        </span>
        <span id="moreclick"> <img id="feed_header_more" src="img/more.png" onclick="alert()" /></span>

      </div>

      <div class="photo">
        <img src="${imgs[i]}" />
      </div>

      <div class="icon">
        <span class="icon_left">
          <button><img onclick="like_(${i})" id="like-red${i}" src="img/like.png" /></button>
          <button><img src="img/comment.png" /></button>
          <button><img src="img/share.png" /></button>
        </span>
        <span class="icon_right"><button><img src="img/save.png" /></button></span>
      </div>

      <div class="feed_footer">
        <div class="like">
          <img src="https://scontent-icn1-1.cdninstagram.com/vp/39111654ea70fa7b97d619408188bc65/5D3BD96A/t51.2885-19/s150x150/18723067_212900799227461_3198872430672084992_a.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com" />
          <strong> ${id[i]}</strong>님 <strong>외 1,036명</strong>이 좋아합니다.
        </div>
        <div class="hashtag">
          <strong>${title[i]}</strong> ${title_comment[i]}
        </div>

        <div class="textarea">
          <form>
            <input type="text" placeholder="댓글 달기..." />
            <input id="submit" type="submit" value="게시" />
          </form>
        </div>
      </div>
    </li>`;


  }
  document.getElementById('slider').innerHTML = html;


  var image = document.getElementById(`like-red`);
  function like() {
    if (image.src.match("img/like.png")) {
      image.src = "img/like-red.png";
      image.style.animationName = "big";
      image.style.animationDuration= "0.4s";
      image.style.animationTimingFunction="linear";
      image.style.animationDelay= "0s";
      image.style.animationIterationCount= "1";
      image.style.animationDirection= "normal";
      image.style.animationFillMode= "forwards";
      image.style.animationPlayState= "running";
    } else {
      image.src = "img/like.png";
      image.style.animation="";
    }
  }

  var image2 = new Array();
  for(var i=0;i<3;i++){
    image2[i] = document.getElementById("like-red"+`${i}`);
  }
  function like_(i) {
    if (image2[i].src.match("img/like.png")) {
      image2[i].src = "img/like-red.png";
      image2[i].style.animationName = "big";
      image2[i].style.animationDuration= "0.4s";
      image2[i].style.animationTimingFunction="linear";
      image2[i].style.animationDelay= "0s";
      image2[i].style.animationIterationCount= "1";
      image2[i].style.animationDirection= "normal";
      image2[i].style.animationFillMode= "forwards";
      image2[i].style.animationPlayState= "running";
    } else {
      image2[i].src = "img/like.png";
      image2[i].style.animation="";
    }
  }


  function changeTextFind() {
    var textfindChange = document.getElementById("TextFind");

    if (textfindChange.style.backgroundColor == 'white') {
      textfindChange.style.backgroundColor = '#fcf7f7';
      textfindChange.style.textAlign = 'center';
    } else {
      textfindChange.style.backgroundColor = 'white';
      textfindChange.style.textAlign = 'left';
    }
  }

  function alert() {
    var changeBody = document.getElementById("bodycheck");
    var click_more = document.getElementById("more");

    if (click_more.style.display == 'block') {
      click_more.style.display = 'none';
      changeBody.style.opacity = '1';
      changeBody.style.display = 'none';
    } else {
      click_more.style.display = 'block';
      changeBody.style.backgroundColor = 'rgba(153, 149, 149, 0.7)';
      changeBody.style.display = 'block';
    }
  }

  function bodyclick() {
    var changeBody = document.getElementById("blackOpacity");
    var click_mor = document.getElementById("more");
    var bodyC = document.getElementById("bodycheck");

    if (click_mor.style.display == 'block') {
      bodyC.style.display = 'none';
      click_mor.style.display = 'none';
      changeBody.style.opacity = '1';
    }
  }
