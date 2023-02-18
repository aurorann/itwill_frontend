/* member.js */

function getID(){
  //alert();

  //<input type="text" id="uid" class="form-control"></input> 접근

  //1)<form>의 컨트롤 요소 접근시 id 사용 (추천)
  //[object HTMLInputElement]
  //alert(document.getElementById("uid"));
  alert(document.getElementById("uid").value);


  //2)tag name 접근
  //본문에서 <input> 태그를 접근
  //[object HTMLCollection]
  //alert(document.getElementsByTagName("input"));
  
  //<input>태그들 중에서 0번째 접근
  //[object HTMLInputElement]
  //alert(document.getElementsByTagName("input")[0]);
  
  //실제값
  //alert(document.getElementsByTagName("input")[0].value);


  //3)<form>의 컨트롤 요소 접근시 name 사용
  //[object NodeList]
  //alert(document.getElementsByName("uid"));
  //alert(document.getElementsByName("uid")[0].value);
  //alert(document.memfrm.uid.value);//비추천

  //4)스타일 접근
  //[object HTMLCollection]
  alert(document.getElementsByClassName("line"));

}//getID() end


function setID() {
  //<input type="text" id="uid">
  //값 대입하기

  let str="itwill";

  //1) id 접근(추천)
  //document.getElementById("uid").value = str;

  //2) tag name 접근
  //document.getElementsByTagName("input")[1].value = str;

  //3) name 접근
  document.getElementsByName("uid")[0].value = str;

}//setID() end


function validate(){
  //회원가입 폼에 대한 유효성 검사

  //1) 이름 글자갯수 2글자 이상인지 확인하시오
  //   위의 조건을 만족하지 않으면
  //   -> 경고창 (alert)
  //   -> 이름을 다시 입력할 수 있도록 id=uname에 커서를 생성해 주고(focus)
  //   -> 해당 폼이 서버로 전송하는 것을 차단
  let uname=document.getElementById("uname").value;
  //alert(uname);
  //alert("#" + uname + "#");
  //alert("#" + uname.trim() + "#");//문자열 맨앞과 맨뒤 공백 제거
  uname=uname.trim();
  if(uname.length<2){
    alert("이름 2글자이상 입력해 주세요~");
    document.getElementById("uname").focus();
    return false;
  }//if end


  //2) 아이디 글자갯수가 8~12사이 인지 확인하시오
  let uid=document.getElementById("uid").value;
  uid=uid.trim();
  if(!(uid.length>=8 && uid.length<=12)){
    alert("아이디 글자갯수 8~12사이 입력해 주세요~");
    document.getElementById("uid").focus();
    return false;
  }//if end


  //3) 비밀번호 글자갯수가 5~10사이 인지 확인하시오
  let upw=document.getElementById("upw").value;
  upw=upw.trim();
  if( !(upw.length>=5 && upw.length<=10)){
      alert("비밀번호 5~10글자 이내 입력해주세요~");
      document.getElementById("upw").focus();
      return false;
  }//if end


  //4) 주민번호 앞칸의 글자갯수가 6인지 확인하시오
  let jumin1=document.getElementById("jumin1").value;
  jumin1=jumin1.trim();
  if(jumin1.length!=6){
    alert("주민번호 6글자 입력해주세요~");
    document.getElementById("jumin1").focus();
    return false;
  }//if end


  //5) 주민번호 뒷칸의 글자갯수가 7이면서 숫자형인지 확인하시오
  let jumin2=document.getElementById("jumin2").value;
  jumin2=jumin2.trim();
  if(jumin2.length !=7 || isNaN(jumin2)) {
    alert('주민번호(뒷칸) 7글자 숫자로 입력해주세요~');
     //기존값을 지우기 위해 빈문자열 대입
    document.getElementById("jumin2").value="";
    document.getElementById('jumin2').focus();
    return false;
  }//if end


  //6) 약관동의에 체크했는지 확인하시오
  if(document.getElementById("agree").checked==false){
    alert("약관에 동의해 주세요!!")
    return false;
  }//if end


  alert("회원 가입 폼을 서버로 전송합니다");
  return true; //<form name=memfrm>폼을 서버로 전송

}//validate() end


function validate2(){
  //<form id=memfrm>
  let frm=document.getElementById("memfrm");
  //[object HTMLFormElement]
  //alert(frm);

  //<form action="ok2.jsp"></form> 와 동일한 기능의 자바스크립트 속성
  frm.action="ok2.jsp";

  //<input type=submit>와 동일한 기능의 자바스크립트 함수
  frm.submit();

  //<input type=reset>와 동일한 기능의 자바스크립트 함수
  //폼양식내에 있는 폼컨트롤 요소가 가지고 있던 최초의 상태로 복귀
  //frm.reset();

}//validate2() end