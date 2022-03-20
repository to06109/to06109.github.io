const quotes = [
  {
    quote: '난 오늘 너의 세계로 간다',
    author: '나희도',
  },
  {
    quote: '여름의 한가운데에 우리가 있었다.',
    author: '백이진',
  },
  {
    quote:
      '영원할 것 같았던 여름, 청춘의 한가운데서 만난 뜨거웠던 우리, 그 여름은 우리의 것이었다.',
    author: '백이진',
  },
  {
    quote:
      '누구에게나 처음은 있잖아요. 그 처음이 오늘이니까 오늘까지만 서툴겠습니다.',
    author: '백이진',
  },
  {
    quote: '도움 청할 데가 있다는 건 네 나이만 가진 특혜니까 누려.',
    author: '백이진',
  },
  {
    quote: '널 좋아하는 내 마음에 대해서 뭘 알아.',
    author: '나희도',
  },
  {
    quote:
      '달려서인지 들떠서인지 아리송한 숨이 찼다. 바람이 불어와 초록의 잎사귀들이 몸을 비볐다. 여름의 한가운데였다.',
    author: '나희도',
  },
  {
    quote:
      '한 달 전엔 시대가 내 꿈을 뺏었다는 얘길 들었는데, 얼마 전엔 시대가 날 살렸다는 말을 들었어.',
    author: '나희도',
  },
  {
    quote: '사랑. 사랑이야. 난 널 사랑하고 있어, 나희도. 무지개는, 필요 없어',
    author: '백이진',
  },
  {
    quote:
      '우리가 이 여름의 주인이 되는 거야. 그럼 적어도 이 여름은, 우리 거잖아.',
    author: '나희도',
  },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
