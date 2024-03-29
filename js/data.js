let list = [
    {
        qt:"#1 어떤일을 시작하면 나는?",
        ans: [
            {
                ans:'1. 최고의 집중력을 발휘한다', score:[1,9,13,15,18,19]
            },
            {
                ans:'2. 어느 정도 최선을 다 하려고 한다', score:[4,16,7,3,6,11,14,15,2,7,8,10,17,20]
            },
            {
                ans:'3. 나중에 하면 되겠지~ 라고 생각한다', score:[5]
            }
        ]
    },
    {
        qt:"#2 다른 사람들이 말하길 나는?",
        ans: [
            {
                ans:'1. 에너지가 넘친다', score:[3,4,6,8,9,11,13,7,11,19]
            },
            {
                ans:'2. 조용하고 차분하다', score:[15,1,14,2,10,12,16,18]
            },
            {
                ans:'3. 산만하고 주의성이 부족하다', score:[3,4,5,20]
            }
        ]
    },
    {
        qt:"#3 만약 전쟁이 난다면 나는?",
        ans: [
            {
                ans:'1. 누구보다 먼저 적진 앞에서 싸울것이다', score:[2,3,9,13,6,8,19,20]
            },
            {
                ans:'2. 전쟁에 도움될만한 정보들을 찾아준다', score:[16,15,7,5,1,17,18]
            },
            {
                ans:'3. 튄다', score:[10,4,11,12]
            }
        ]
    },
    {
        qt:"#4 마을에 축제가 일어났습니다 나는?",
        ans: [
            {
                ans:'1. 사람들 앞에서 춤을 출것이다', score:[6,8,9,11,13,19]
            },
            {
                ans:'2. 축제의 다양한 즐길거리를 즐긴다', score:[1,2,4,5,16,15,3,7,20]
            },
            {
                ans:'3. 사람들이 즐기는 것을 구경한다', score:[14,10,12,17,18]
            }
        ]
    },
    {
        qt:"#5 새학기가 되었을때 나는?",
        ans: [
            {
                ans:'1. 친구에게 다가가 말을 건다', score:[13,3,4,8,6,9,19]
            },
            {
                ans:'2. 친구가 말걸어 줄 수 있게 관심을 끈다', score:[1,2,5,7,11,16,20]
            },
            {
                ans:'3. 조용히 지낸다', score:[15,14,10,12,17,18]
            }
        ]
    },
    {
        qt:"#6 다른사람들에게 나는?",
        ans: [
            {
                ans:'1. 사이코패스라는 소리를 들어본적이 있다', score:[18,2,12,11]
            },
            {
                ans:'2. 편한 상대라고 느껴질때가 많다', score:[1,3,4,6,7,8,9,13,14,16,17,19,20]
            },
            {
                ans:'3. 같이 있으면 좀 불편해지는 느낌을 받는다', score:[10,5,15]
            }
        ]
    },
    {
        qt:"#7 상대방이 잘못을 했을때 나는?",
        ans: [
            {
                ans:'1. 바로 화를 내며 혼을 낸다', score:[1,9,13,12,11,6,3,7,18]
            },
            {
                ans:'2. 잘못에 대해 생각한다', score:[15,16,2,19,20]
            },
            {
                ans:'3. 아무말 못하고 지나간다', score:[10,14,5,4,17]
            }
        ]
    },
    {
        qt:"#8 점심을 먹어야한다 나는?",
        ans: [
            {
                ans:'1. 친구들을 불러서 점심을 먹는다', score:[3,4,6,8,9,11,12,13,17,20]
            },
            {
                ans:'2. 편의점에가서 점심을 먹는다', score:[5,10,14]
            },
            {
                ans:'3. 집밥을 먹는다', score:[2,7,15,16,18,19]
            }
        ]
    },
    {
        qt:"#9 스피드게임을 하고있다 나는?",
        ans: [
            {
                ans:'1. 표현하는 부분을 담당한다', score:[3,4,11,16,19,20,8]
            },
            {
                ans:'2. 문제를 맞추는 부분을 담당한다', score:[1,2,6,7,9,12,13,15,18]
            },
            {
                ans:'3. 팀정할때 아무것도 못하다가 결국 구경한다', score:[10,17,5,14]
            }
        ]
    },
    {
        qt:"#10 슬픈 영화를 봤습니다 나는?",
        ans: [
            {
                ans:'1. 눈물을 흘린다', score:[2,3,4,5,7,8,10,14,15,16,17,19]
            },
            {
                ans:'2. 영화 내용에 대해서 생각한다', score:[1,18,20]
            },
            {
                ans:'3. 영화를 본 후 무엇을 할지 생각한다', score:[12,11,6,9]
            }
        ]
    },
    {
        qt:"#11 재난상황입니다 나는?",
        ans: [
            {
                ans:'1. 앞장서서 이 상황을 극복한다', score:[1,2,3,5,7,13,6,9]
            },
            {
                ans:'2. 최대한 많은 사람들을 도와준다', score:[1,4,5,8,14,15,16,17,19,20]
            },
            {
                ans:'3. 내 살길을 찾아본다', score:[12,11,10,18]
            }
        ]
    },
    {
        qt:"#12 내가 생각하기에 나는?",
        ans: [
            {
                ans:'1. 천재이다', score:[1,7,11,12,18,20]
            },
            {
                ans:'2. 엄마같은 존재이다', score:[2,14,15,16,17,19]
            },
            {
                ans:'3. 아직도 애같다', score:[3,4,5,6,8,9,10,13]
            }
        ]
    },
    {
        qt:"#13 집에 혼자있으면 나는?",
        ans: [
            {
                ans:'1. 가만히 있는다', score:[10,14,15,17]
            },
            {
                ans:'2. 뭐라도 해본다', score:[1,3,4,6,8,9,11,13,20]
            },
            {
                ans:'3. 자유를 즐긴다', score:[2,5,12,7,16,18,19]
            }
        ]
    }
    ,
    {
        qt:"#14 컴퓨터가 고장이 났습니다 나는?",
        ans: [
            {
                ans:'1. 그냥 버린다', score:[3,4,6,9]
            },
            {
                ans:'2. 고쳐본다', score:[2,7,11,12,14,15,16,18]
            },
            {
                ans:'3. 도움을 요청한다', score:[1,5,8,10,13,17,19,20]
            }
        ]
    }
    ,
    {
        qt:"#15 친구가 울고있습니다 나는?",
        ans: [
            {
                ans:'1. 왜우는지 물어봐준다', score:[1,4,5,10,14,15,16,17,20]
            },
            {
                ans:'2. 울지 말라고 한다', score:[2,3,7,8,11,13,19]
            },
            {
                ans:'3. 냅두고, 그 자리를 나온다', score:[6,9,12,18]
            }
        ]
    }
    ,
    {
        qt:"#16 친구가 나를 칭찬한다면 나는?",
        ans: [
            {
                ans:'1. 으쓱하며 내가 짱이라고 한다', score:[1,2,7,9,11,12,18]
            },
            {
                ans:'2. 쑥스러워한다', score:[3,4,6,10,13,5,17,19,20]
            },
            {
                ans:'3. 나도 상대를 칭찬해준다', score:[15,16,8]
            }
        ]
    }

]

let info = [
    {
        name:"코난",
        dsc:"냉철한 성격의 소유자\n관찰력이 엄청나게 뛰어나고, 한가지에 잘 집중하는 성격입니다. 하지만 너무 일에 집중하는 나머지 다른 일에 대해서는 소홀히 할수 있습니다"
    },
    {
        name:"고길동",
        dsc:"정의로운 성격의 소유자\n참을성이 굉장히 강하고, 정의감이 남들보다 뛰어납니다, 하지만 다른사람은 자신이 얼마나 착한지를 잘 모를 수 있습니다"
    },
    {
        name:"짱구",
        dsc:"4차원 성격의 소유자\n언제 어디서나 주목받는 분위기메이커이자 트러블메이커입니다. 종종 사람들에게 4차원 소리를 듣곤 합니다"
    },
    {
        name:"스폰지밥",
        dsc:"긍정적인 성격의 소유자\n순진하고 마음이 여리지만, 자신에게 주어진 일은 열심히 하는 편입니다, 하지만 분위기를 잘 파악못할때도 있습니다"
    },
    {
        name:"노진구",
        dsc:"소심하고 착한성격의 소유자\n착하고 배려심이 많지만, 때로는 게으르고, 어리광이 심할 때가 있습니다"
    },
    {
        name:"이누야샤",
        dsc:"직진하는 성격의 소유자\n직설적이고, 사람들에대한 정이 많지만, 단순하고 복잡한 걸 싫어합니다"
    },
    {
        name:"이기철",
        dsc:"든든하고 정의로운 성격의 소유자\n 동생한테는 가장 든든한 사람이지만, 허세가 심하고 이성에 대한 로망이 큽니다"
    },
    {
        name:"뽀로로",
        dsc:"쾌활한 성격의 소유자\n친구들과 어울리는 것을 좋아하며, 활발하고 낙천적인 성격을 가졌습니다"
    },
    
    {
        name:"나루토",
        dsc:"화이팅 넘치는 성격의 소유자\n밝고 긍정적이며 맡은 일에 전력을 다하지만, 단순하며 가끔은 화를 잘 내기도 합니다"
    },
    {
        name:"훈이",
        dsc:"소심하고 여린 성격의 소유자\n소심하고 여린 마음을 가졌습니다. 정도 많고 눈물도 많습니다.  "
    },
    {
        name:"롱키",
        dsc:"장난스러운 성격의 소유자\n장난스럽지만 전략적입니다. 승리를 위해서라면 인간관계는 도구일 뿐, 배신은 어렵지 않습니다."
    },
    {
        name:"로키",
        dsc:"내가 곧 왕이다\n개성이 넘치며 자신이 똑똑하다고 믿는 편입니다. 모든 일에 자신이 원하는 결과를 이끌어냅니다. "
    },
    {
        name:"루피",
        dsc:"미래지향적인 성격의 소유자\n낙천적이고 리더쉽이 매우 뛰어나며, 용감합니다만 단순하게 돌진하기도 합니다"
    },
    {
        name:"보노보노",
        dsc:"따뜻하고 포근한 성격의 소유자\n온순하고 따뜻한 마음을 가졌으며, 순진하고 화를 잘 안내는 대인배입니다"
    }, 
    {
        name:"엘사",
        dsc:"이성적인 성격의 소유자\n차분한 성격으로 어른스럽다는 말을 많이 듣습니다. 이성적인 만큼 겁도 많아서 조심스러운 성격입니다. "
    },
    {
        name:"도라에몽",
        dsc:"정이 많고 필요하면 나타나는 성격의 소유자\n사람을 잘 챙겨주고 정이 많습니다, 도움이 필요하면 못지나가는 성격입니다"
    },
    {
        name:"루피",
        dsc:"부끄러운 성격의 소유자\n소심하고, 겁이 많으며 부끄러움을 잘 탑니다, 하지만 따뜻하고 친절하며 모범적입니다"
    },
    {
        name:"징징이",
        dsc:"지적인 성격의 소유자\n남들에게 까칠하다고 소리를 듣지만, 내면은 소심하고 지식인처럼 행동하며 온순합니다"
    },
    {
        name:"잎싹",
        dsc:"모성애의 대명사\n발랄하고, 에너지가 매우 넘치는 캐릭터이지만 그만큼 자신과 가장 친한사람들을 잘 챙깁니다, 희생도 거스르지 않습니다"
    },
    {
        name:"흰둥이",
        dsc:"표현력 갑의 주인공\n표현력이 매우 풍부하고, 지적이며, 정의롭지만 약간은 산만하기도 합니다"
    }


]