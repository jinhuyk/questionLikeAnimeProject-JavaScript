
let score=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

let main = document.querySelector(".main")
let qna = document.querySelector(".test")
let question = document.querySelector(".question")
let answer = document.querySelector(".answer")
let pn = document.querySelectorAll(".prev-next")
let start_btn = document.querySelector(".start-btn")
let result = document.querySelector(".result")

function Scoring(number){
    
    $(document).on("click","#ansbtn",function(){
        
        let lscore = list[number].ans[$(this).index()].score
        for(let i =0;i<lscore.length;i++){
            score[lscore[i]-1] += 1;
        }


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
    if(number+1 == list.length){
        
        Result()
    }
    else{

        let numbar = 100- ((list.length-(number+1) )/list.length *100)
        let pbb= document.querySelector(".pbb")
        pbb.style.width=numbar+"%"
        pbb.setAttribute("aria-valuenow",numbar)
        question.innerText = list[number].qt
        var stbtn=""
        for(let i = 0;i<3;i++){

            var ans_btn = '<button id="ansbtn" class="btn btn-outline-dark " type="button">{}</button>'
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
    var sendText = "같이 테스트해봐요";
    var sendUrl = window.location.href; 
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function shareFacebook() {
    var sendUrl = window.location.href;
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

function shareKakao() {
    Kakao.init('a115a9bb453645c03a291f92a524c7e4');
    Kakao.Link.createDefaultButton({
      container: '#btnKakao',
      objectType: 'feed',
      content: {
        title: "만화캐릭터테스트", 
        description: "내가 만약 만화캐릭터라면?", 
        imageUrl: "https://characterandyou.netlify.app",
        link: {
           mobileWebUrl: "https://characterandyou.netlify.app",
           webUrl: "https://characterandyou.netlify.app"
        }
      }
    });
  }