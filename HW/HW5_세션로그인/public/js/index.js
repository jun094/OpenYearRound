
var emailValId = document.getElementById("email");
var nameValId = document.getElementById("name");
var useridValId = document.getElementById("userid");
var pwValId = document.getElementById("pw");

function verify(n) {
  var regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  var regPhone = /01[01]\D?\d{4}\D?\d{4}/;
  var regName = /^[가-힣a-zA-Z\s]+$/; // 한글,영어 + 공백
  var regUserid = /^[가-힣a-zA-Z0-9\s]/;  // 한글,영어,숫자
  var regPw = /^[가-힣a-zA-Z0-9\s]/; // 한글,영어,숫자

  if(n.id=='email')
  {
    // 이메일 & 휴대폰 번호 검증
    if (emailValId.value.match(regEmail) != null || emailValId.value.match(regPhone) != null) {
      emailValId.style.borderColor = 'green';
      emailValId.style.color = 'black';
    }
    else if (emailValId.value.match(regEmail) == null || emailValId.value.match(regPhone) == null) {
      emailValId.style.borderColor = 'red';
      alert("  휴대폰 또는 이메일 양식을 지켜주세요") ;
    }
  }

  else if(n.id=='name')
  {
    //성명 검증
    if (nameValId.value.match(regName) != null) {
      nameValId.style.borderColor = 'green';
      nameValId.style.color = 'black';
    }
    else if (nameValId.value.match(regName) == null) {
      nameValId.style.borderColor = 'red';
      alert("  성명 양식을 지켜주세요 (한글, 영어, 공백 가능)") ;
    }
  }
  else if(n.id=='userid')
  {
    //사용자 아이디 검증
    if (useridValId.value.match(regUserid) != null) {
      useridValId.style.borderColor = 'green';
      useridValId.style.color = 'black';
    }
    else if (useridValId.value.match(regUserid) == null) {
      useridValId.style.borderColor = 'red';
      alert("  아이디 양식을 지켜주세요 (한글, 영어, 숫자 가능)") ;
    }
  }
  else if(n.id=='pw')
  {
    //비밀번호 검증
    if (pwValId.value.match(regPw) != null) {
      pwValId.style.borderColor = 'green';
      pwValId.style.color = 'black';
    }
    else if (pwValId.value.match(regPw) == null) {
      pwValId.style.borderColor = 'red';
      alert("  비밀번호 양식을 지켜주세요 (한글, 영어, 숫자 가능)") ;
    }
  }
}

function login() {
  //console.log(emailValId.style.borderColor);
  if (emailValId.style.borderColor == 'green' &&
      nameValId.style.borderColor == 'green' &&
      useridValId.style.borderColor == 'green' &&
      pwValId.style.borderColor == 'green')
  {
    alert('번호 또는 이메일 : ' + emailValId.value + '\n성명 : ' + nameValId.value + '\n사용자 이름 : ' + useridValId.value);
    document.location.href="main.html"
  }
  else {
    alert('모든 양식을 제대로 채워주세요 !');
  }
};
