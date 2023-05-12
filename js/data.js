const banner = {
    logoName: 'SILSILVONGVONG',
    bannerImg: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAxMDVfMTA2/MDAxNjcyOTA0NjIzODQ3.aCECBi4mRqPOGaOflDYT2ateZajIL3NT-Q63w1zZKWsg.N8NKmxA6TxUtwI1vXMHMOrHyjbGEIrBdG_W9gILv7Tog.PNG.mvuvm/%EB%93%9C%EB%9E%98%EA%B3%A4-%EC%9E%90%EC%BA%90.png?type=w800',
    bannerTitle: '포트폴리오 사이트 OPEN',
    bannerDesc: '포트폴리오 사이트를 새롭게 정비하였습니다.<br>2023년 일정은 아래 스케쥴란을 확인해주세요.',
    bannerLinkTxt: '2023일정보기',
    bannerLink: '#schedule' //페이지 내의 링크: #gallery, #schedule, #contact
}

const category = [
    {
        type: 'commision',
        name: '커미션'
    },
    {
        type: 'personal',
        name: '개인작'
    },
    {
        type: 'fanart',
        name: '팬아트'
    },
    {
        type: 'romencefantasy',
        name: '로맨스 판타지'
    }
]
const portfolio = [
        {
            title: '저녁 호수와 장발 남캐',
            tag: 'personal',
            tagname: '개인작',
            date: '23.05.08',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzA1MDhfMjA5/MDAxNjgzNTQ5NTk5NTM4.CGDsfg6vKvVp3SdO7KRsriHGeUikBILxgJrPtg8U3iYg.4Cfe5cViCvkfj8zljRpldP45AhNQXUAQbgBn57pUzPgg.PNG.mvuvm/%EC%9E%A5%EB%B0%9C-%EC%B4%89%EC%B4%893.png?type=w800',
            alt: '작업물'
        },
        {
            title: '악마 경찰',
            tag: 'personal',
            tagname: '개인작',
            date: '23.05.03',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzA1MDNfMjk1/MDAxNjgzMTA4NTg2MjY4.oieIbMXDwvLXzYNSYR-wja57Ol3DMkrf7tgxGAvUmW8g.92FpQva1pKvni8Vcl-HgtUeqcbucrgxw334V5iCzKtcg.PNG.mvuvm/%EC%95%88%EA%B2%BD%EB%82%A8-%EC%95%85%EB%A7%88%EA%B2%BD%EC%B0%B0-%EC%82%AC%EC%9D%B4%EC%A6%88-%EC%A1%B0%EC%A0%95.png?type=w800',
            alt: '작업물'
        },
        {
            title: '데못죽 유진, 문대',
            tag: 'commision',
            tagname: '커미션',
            date: '23.05.03',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzA1MDNfMjM1/MDAxNjgzMTA5NTIxMzky.mtj7DZCkwot_Kqz3GkGoQGYxkBl1N4z6Z8NgI8VpAD0g.wU6s0NVZTHPc30QJkH_uoKorc8wouRaT_CAYNGxLeQMg.PNG.mvuvm/%EC%8A%9D%EC%8A%9D%EB%8B%98-%EC%BB%A4%EB%AF%B8%EC%85%98-%EC%99%84%EC%84%B1%EB%B3%B8.png?type=w800',
            alt: '작업물'
        },
        {
            title: '사랑받는 사용인의 조건',
            tag: 'romencefantasy',
            tagname: '로맨스 판타지',
            date: '23.04.23',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzA0MjNfMTYw/MDAxNjgyMjYwODgwMDIx.O61aeMxWzYCXdvyG_-50f3IXwPCi-nk7S4tdfuhDBYIg.0Ovv22qS64EGiK1hPDJG9c1F0gIpLLTe1dus6LSkkD4g.PNG.mvuvm/%EA%BC%AC%EC%98%A5-%ED%83%80%EC%9D%B4%ED%8F%AC.png?type=w800',
            alt: '작업물'
        },
        {
            title: '논문 제출 안내',
            tag: 'commision',
            tagname: '커미션',
            date: '23.04.11',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzA0MTFfMjk0/MDAxNjgxMjIwOTEwNDIz.DSQs1Pe6tIe1z_qEx9J9ZtTW_GZbPhBDQLLRMqIHUgog.BM4o7QqqxJ3l97W40TGrHdsdvnmQ6gLlfbXvAXF1dSQg.PNG.mvuvm/%EC%A7%80%EC%98%81%EB%8B%98-%ED%91%9C%EC%A7%80-%EC%BB%A4%EB%AF%B8%EC%85%98-2%EC%9D%B8-%EC%99%84%EC%84%B1%EB%B3%B8123.png?type=w800',
            alt: '작업물'
        },
        {
            title: '에스퍼의 팔은 안으로 굽는다',
            tag: 'commision',
            tagname: '커미션',
            date: '23.04.11',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzA0MTFfNDQg/MDAxNjgxMjIwOTIxMTQx.zv9aW-UhGJYyjBUzQ8hcTT4eILDpWVSYP74tS_ejuLEg.TRAmIGoQx28BFkRkU_XU6yiN8ZPmwsK9IiqUIDYoBiwg.PNG.mvuvm/%EC%A7%80%EC%98%81%EB%8B%98-%EB%82%A8%EC%BA%901%EC%9D%B8_%ED%91%9C%EC%A7%80_%EC%99%84%EC%84%B1%EB%B3%B8.png?type=w800',
            alt: '작업물'
        },
        {
            title: '령',
            tag: 'personal',
            tagname: '개인작',
            date: '23.03.28',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAzMjhfOTQg/MDAxNjgwMDA1Njk5ODM5.bMfvq8_-Oh6_Q4kgHusJNbuVD_rGxi6hXPf1k-fMYFwg.EUyHIlun1ZsPan634TSBfQzntSWxwleM8TvmjVitlHIg.PNG.mvuvm/%EB%A0%B9%EC%9D%B4.png?type=w800',
            alt: '작업물'
        },
        {
            title: 'PASSION 일레이',
            tag: 'personal',
            tagname: '개인작',
            date: '23.05.08',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTRfMjMw/MDAxNjc4ODAyMDkwMjA3.0qs53UirJD9sberd8ykxMNmhetHLOzebQXNdYSb-BvIg.pC6GsjdCZtA6ef77gLM2PGRbhb3ky1egfqyxqP2P_Lsg.PNG.mvuvm/%EC%95%8C%ED%8B%B0-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EA%B7%B8%EB%A6%BC2-4.png?type=w800',
            alt: '작업물'
        },
        {
            title: '비밀의 정원과 흑공자에게 사로잡힌 나',
            tag: 'romencefantasy',
            tagname: '로맨스 판타지',
            date: '23.03.09',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAzMDlfMTMz/MDAxNjc4MzU5NzU3NDMx.RpHGP7W_Oozw3XCYL56QLTA8PnN6CrGk55IzxozcuM0g.hmaOSOIr81A5epnuIKBLo29UoBsjmgYRBpWxE3s-V48g.PNG.mvuvm/%ED%88%AC%EC%83%B7-%EC%9D%BC%EB%9F%AC-%EB%AC%98%EC%82%AC.png?type=w800',
            alt: '작업물'
        },
        {
            title: '리퀘스트 신청자분 자캐',
            tag: 'personal',
            tagname: '개인작',
            date: '23.03.09',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTZfMjM0/MDAxNjc4OTc4MzI1MDIw.hCPGJJ6wyr96PWdRkwk7CrD_535VLdBtGEIK9wy8e4gg.Zcc_rSGqkcuFQzkg2cyutp5oQQAJyFjPITlKiUlFLXcg.PNG.mvuvm/%EC%95%8C%ED%8B%B0-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EA%B7%B8%EB%A6%BC1-%EB%AC%98%EC%82%AC4.png?type=w800',
            alt: '작업물'
        },
        {
            title: '자필소설속에 떨어지 내가 피폐물 남주의 애완동물이라고?',
            tag: 'personal',
            tagname: '개인작',
            date: '23.01.18',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAxMThfMTE4/MDAxNjc0MDMxMzUwNzY2.viJ2OcPyAML05OsVEtAxQumPmj4qw6r3uPU5RNjEETQg.n-S4b__zhUiW7ccMIjTSGJH7y9emRg1Bu_WN0fSdaE0g.PNG.mvuvm/%ED%95%A9%EC%9E%91-%EC%B0%B8%EC%97%AC%ED%95%9C%EB%8B%A4%EB%A9%B4-%ED%9B%84%EB%B3%B4%EC%A0%95.png?type=w800',
            alt: '작업물'
        },
        {
            title: '로드 오브 히어로즈 라샤드',
            tag: 'fanart',
            tagname: '팬아트',
            date: '23.01.21',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAxMjFfMTQ0/MDAxNjc0Mjg1ODExNzkw.HmxZv6fZU7SoXiUJ7Ud3SOTq06wKq3CvBYZ86sIypd4g.bZKIjWJhKN2NK2_4CyzUWDcHQioKHClM1LCSlDmmqQIg.PNG.mvuvm/%EB%B9%9B%EB%9D%BC%EC%83%A4%EB%93%9C2.png?type=w800',
            alt: '작업물'
        },
        {
            title: '포켓몬스터 N',
            tag: 'fanart',
            tagname: '팬아트',
            date: '23.01.18',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAxMThfMTg2/MDAxNjc0MDMxNTk3MjQ1.x0hs9m9FhJwcs9crFQ-o2Akid3TOsVKZXaBDAZz9Cxsg.Ng-Us4_kFDTS7NQk0bEKSGFw-UrDb931-asaCiU7v3Qg.PNG.mvuvm/%EC%97%94-%ED%9B%84%EB%B3%B4%EC%A0%953.png?type=w800',
            alt: '작업물'
        },
        {
            title: '데저트 드래곤',
            tag: 'personal',
            tagname: '개인작',
            date: '23.01.05',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAxMDVfMTA2/MDAxNjcyOTA0NjIzODQ3.aCECBi4mRqPOGaOflDYT2ateZajIL3NT-Q63w1zZKWsg.N8NKmxA6TxUtwI1vXMHMOrHyjbGEIrBdG_W9gILv7Tog.PNG.mvuvm/%EB%93%9C%EB%9E%98%EA%B3%A4-%EC%9E%90%EC%BA%90.png?type=w800',
            alt: '작업물'
        },
        {
            title: '크리스마스의 편지',
            tag: 'romencefantasy',
            tagname: '로맨스 판타지',
            date: '23.01.02',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAxMDJfMTMx/MDAxNjcyNjQxNDI3NzY1.zAIyO0NXUeR5woROGK0Nu3SxGMiqpWnaEFxyUUMCfxcg.6yHQTdU0TE7ipzR_S2OC-91JX0cLibwSok_KVVlPqFAg.PNG.mvuvm/%ED%8E%B8%EC%A7%80%EC%93%B0%EB%8A%94-%EC%97%AC%EC%BA%90-%EB%AC%98%EC%82%AC.png?type=w800',
            alt: '작업물'
        },
        {
            title: '아이돌 마스터 신데렐라 걸즈 와쿠이 루미',
            tag: 'fanart',
            tagname: '팬아트',
            date: '23.01.01',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAxMDFfMjAg/MDAxNjcyNTYzMDkwMzU4.sD_ZrrIsPmarwkLMB5WExubdvyiy3E5TZ0O4HDcAchAg.LV_Qaoy9qBFxLcQ2NLlp3jG6tA_YLRXwuXNRWrGD46Yg.PNG.mvuvm/2022-%EB%89%B4%EB%A3%A9-%EB%A3%A8%EB%AF%B8-%ED%9B%84%EB%B3%B4%EC%A0%952.png?type=w800',
            alt: '작업물'
        },
        {
            title: '무기미도 미스터 폭스',
            tag: 'fanart',
            tagname: '팬아트',
            date: '22.12.30',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMjEyMzBfODcg/MDAxNjcyNDA4MDAxMDIy.ks617QFXV-8fDiySkXbG6oKdD1UB2ye9VP9eehJxsHgg.cF1edL3KJuhvhLi17K2X276ghxcRO96xUd31Be4btS0g.PNG.mvuvm/%EB%AF%B8%EC%8A%A4%ED%84%B0-%ED%8F%AD%EC%8A%A4-%ED%81%AC%EB%A1%AD-%EC%9B%90%EB%B3%B8.png?type=w800',
            alt: '작업물'
        },
        {
            title: '사제',
            tag: 'personal',
            tagname: '개인작',
            date: '22.12.08',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMjEyMDhfMTA1/MDAxNjcwNDc5OTEzOTE5.QVxyc0iRr-0dMzaqD--XMVS5J3LhS2HG4m4QMmCJ3gIg.DQ9AfYE1kfJo5ADje2zdltafbfcrTllS9ynI2r3hWW4g.PNG.mvuvm/%EC%82%AC%EC%A0%9C%EB%8B%98(%EB%AC%BC%EB%A6%AC)4-2.png?type=w800',
            alt: '작업물'
        },
        {
            title: '프로메어 리오',
            tag: 'fanart',
            tagname: '팬아트',
            date: '22.11.14',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAyMjExMTRfMjM3/MDAxNjY4NDEzMTM2MzEy.ITMx0KbxfAzX4PN1M1AQukeftMkOODQPfPsihXdRcXQg.tYirP0gsIBC8kYcz3qpxvHPcZQKlyXesX9atm3CcfH0g.PNG.mvuvm/%ED%94%84%EB%A1%9C%EB%A9%94%EC%96%B4-%EB%A6%AC%EC%98%A42.png?type=w420',
            alt: '작업물'
        }
    ];

const schedule = {
    year: 2023,
    firstHalf : [
                    '마감', //1월
                    '마감', //2월
                    '마감', //3월
                    '마감', //4월
                    '마감', //5월
                    '모집중' //6월
                ],
    secondHalf : [
                    '모집중', //7월
                    '모집중', //8월
                    '모집중', //9월
                    '모집중', //10월
                    '모집중', //11월
                    '모집중' //12월
                ],
    desc: '2024년도 예약문의는 받지 않습니다. <br> 특수 슬롯(긴급건 등) 문의는 따로 부탁드립니다.'
}

const profile = {
    name: '작가명', //작가명
    subdesc: '프리랜서 일러스트레이터', //상태 텍스트
    image: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTRfMjMw/MDAxNjc4ODAyMDkwMjA3.0qs53UirJD9sberd8ykxMNmhetHLOzebQXNdYSb-BvIg.pC6GsjdCZtA6ef77gLM2PGRbhb3ky1egfqyxqP2P_Lsg.PNG.mvuvm/%EC%95%8C%ED%8B%B0-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EA%B7%B8%EB%A6%BC2-4.png?type=w800', // 프로필 이미지
    email: 'test@example.com',
    emaildesc: '장르, 희망 단가, 마감일을 포함하여 문의 주시면 빠른 답변이 가능합니다.<br>아래의 폼을 이용하실 경우 보내시는 분의 이메일을 필수로 남겨주셔야 답변이 가능합니다.',
    carrer: [
        {
            title: '경력사항1',
            date: '23.05.12',
        },
        {
            title: '경력사항2',
            date: '23.05.12',
        },
        {
            title: '무료연재 표지작업',
            date: '23.04.11',
        },
        {
            title: '포토샵 오토액션 판매',
            date: '22.08.01',
        },
        {
            title: '폼림픽 커미셔너의 꿈을 꾸다',
            date: '22.07.27',
        },
        {
            title: '콜리로 처음 커미션을 받다',
            date: '22.06.10',
        }
    ]
}