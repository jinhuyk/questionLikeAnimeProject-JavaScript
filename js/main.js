
let score=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

let main = document.querySelector(".main")
let qna = document.querySelector(".test")
let question = document.querySelector(".question")
let answer = document.querySelector(".answer")
let pn = document.querySelectorAll(".prev-next")
let start_btn = document.querySelector(".start-btn")
let result = document.querySelector(".result")
let mm = 0;
function Scoring(number){
    
    $(document).on("click","#ansbtn",function(e){
        
        if($(this).index() != -1){
            mm = $(this).index()
        }
        let lscore = list[number].ans[mm].score
        for(let i =0;i<lscore.length;i++){
            score[lscore[i]-1] += 1;
        }

        let numbar = (number/list.length )*100

        let pbb= document.querySelector(".pbb")
        pbb.style.width=number*10+"%"
        pbb.setAttribute("aria-valuenow",number)
        Qna(number+1) 
       
    })
}
function Result(){
    qna.style.display = "none"
    result.style.display = "block"
    let max = -1
    let maxnum = 0;
    for(let i = 0; i<score.length;i++){
        if(score[i] > max ){
            max = score[i]
            maxnum = i
        }
        else if(score[i] == max){
            let rand = Math.floor(Math.random()*2)
            if(rand == 0) {
                maxnum = i;
            }
        }
    }
    imgT = document.querySelector(".result-img")
    charname = document.querySelector(".charname")
    chardsc = document.querySelector(".chardsc")
    imgT.setAttribute("src","resources/"+(maxnum+1)+".jpg")
    charname.innerText = info[maxnum].name
    chardsc.innerText = info[maxnum].dsc
    


}

function Qna(number){
    if(number == list.length){
        
        Result()
    }
    else{
        question.innerText = list[number].qt
        var stbtn=""
        for(let i = 0;i<3;i++){

            var ans_btn = '<button id="ansbtn" class="btn btn-primary " type="button">{}</button>'
            ans_btn = ans_btn.replace('{}',list[number].ans[i].ans)
            stbtn = stbtn + ans_btn+'\n'
        }
        $(".answer").html(stbtn)
        mm=0
        $(document).off("click")
        Scoring(number)
        
    }

}

function Start_qna(){
    qna.style.display = "block"
    start_btn.style.display="none"
    let number = 0
    Qna(number)
}

function shareTwitter() {
    var sendText = "같이 테스트해봐요"; // 전달할 텍스트
    var sendUrl = window.location.href; // 전달할 URL
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function shareFacebook() {
    var sendUrl = window.location.href; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

function shareKakao() {
 
    // 사용할 앱의 JavaScript 키 설정
    Kakao.init('a115a9bb453645c03a291f92a524c7e4');
   
    // 카카오링크 버튼 생성
    Kakao.Link.createDefaultButton({
      container: '#btnKakao', // 카카오공유버튼ID
      objectType: 'feed',
      content: {
        title: "만화캐릭터테스트", // 보여질 제목
        description: "내가 만약 만화캐릭터라면?", // 보여질 설명
        imageUrl: "https://characterandyou.netlify.app", // 콘텐츠 URL
        link: {
           mobileWebUrl: "https://characterandyou.netlify.app",
           webUrl: "https://characterandyou.netlify.app"
        }
      }
    });
  }