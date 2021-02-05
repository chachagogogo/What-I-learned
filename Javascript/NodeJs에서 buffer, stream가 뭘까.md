Node.js에서 서버로 들어오는 request를 처리하다 보면 buffer를 마주치게 된다.

nodejs.org에서 정의한 buffer는 이렇다.

> Where You See Buffers:  
> In the wild, buffers are usually seen in the context of binary data coming from streams, such as fs.createReadStream.  
> [How to Use Buffers in Node.js](https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/#:~:text=What%20Are%20Buffers%3F,methods%20specifically%20for%20binary%20data.)

# 스트림(stream)

우선 스트림이 뭔지부터 알아보자.  
스트림은 파일 읽기쓰기, 네트워크 통신 등의 상황처럼 이쪽에서 저쪽으로 흘러가는 데이터를 처리하는 방법이다.  
전통적으로 데이터를 처리하기 위해서는 메모리에 전체 데이터를 다 저장해놔야 한다. 따라서 노는 메모리 용량보다 데이터가 더 크면 처리를 못한다.  
반면 스트림은 데이터를 한번에 다 저장해놓고 쓰는 게 아니라 chunk 단위로 잘라서 오는 대로 처리하게 된다.  
유튜브에서 동영상을 볼 때 파일을 한번에 다운받아놓고 볼 필요 없이 스트리밍으로 재생할 수 있게 해주는 것이 바로 이러한 방식 덕분이다.

노드.js에는 4가지 종류의 스트림이 있다.

1. Writable: 데이터를 입력할 수 있다. (예: fs.createWriteStream())
2. Readable: 읽기만 가능하다.(예: fs.createReadStream())
3. Duplex: 읽기 쓰기 모두 가능하다.(예: net.Socket)
4. Transform: 읽기 쓰기 속성을 바꿀 수 있게 한다.

# 버퍼(buffer)

동영상을 볼 때 재생되는 속도보다 데이터가 오는 속도가 더 빠르면 데이터는 어딘가에 머물러 있어야 한다. 이 저장공간이 바로 버퍼이다. 일반적으로 RAM을 이용한다.

# 버퍼 간략 소개

[Nodejs.org - How to Use Buffers in Node.js](https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/#:~:text=What%20Are%20Buffers%3F,methods%20specifically%20for%20binary%20data.) 의 일부를 번역해 보았다.

> Why Buffers?
>
> Pure JavaScript, while great with unicode-encoded strings, does not handle straight binary data very well. This is fine on the browser, where most data is in the form of strings. However, Node.js servers have to also deal with TCP streams and reading and writing to the filesystem, both of which make it necessary to deal with purely binary streams of data.
>
> One way to handle this problem is to just use strings anyway, which is exactly what Node.js did at first. However, this approach is extremely problematic to work with; It's slow, makes you work with an API designed for strings and not binary data, and has a tendency to break in strange and mysterious ways.
> Don't use binary strings. Use buffers instead!

왜 버퍼인가?  
순수 자바스크립트는 유니코드로 인코딩된 문자열은 잘 다룹니다만 바이너리 데이터는 잘 다루지 못합니다. 브라우저에서야 데이터의 대부분이 문자열로 이루어져 있으니 괜찮습니다. 하지만 노드js 서버는 TCP 스트림도 다뤄야 하고, 파일시스템 읽기쓰기도 해야 합니다. 이 둘 다 필수적으로 바이너리 스트림으로 이루어진 데이터를 처리해야 합니다.

이를 해결하는 한 가지 방법은 어찌됐든 그냥 문자열을 쓰는 것입니다. 노드js는 처음에 그런 식으로 돌아갔습니다. 하지만 이 방법은 극심한 문제를 야기했습니다. 속도가 느렸기 때문에 바이너리 데이터가 아니라 문자열로 디자인된 API를 가지고 일하게 만들었고, 그 결과 이상한 방식으로 일을 하게 되었습니다.

바이너리 문자열을 쓰지 마세요. 그 대신 버퍼를 쓰세요!

> What Are Buffers?
>
> The Buffer class in Node.js is designed to handle raw binary data. Each buffer corresponds to some raw memory allocated outside V8. Buffers act somewhat like arrays of integers, but aren't resizable and have a whole bunch of methods specifically for binary data. The integers in a buffer each represent a byte and so are limited to values from 0 to 255 inclusive. When using console.log() to print the Buffer instance, you'll get a chain of values in hexadecimal values.

버퍼가 뭔가요?  
노드js의 버퍼 클래스는 로우 바이너리 데이터를 처리하기 위해 설계되었습니다. 각 버퍼는 V8 외부에 할당된 로우 메모리와 상응합니다. 버퍼는 마치 정수로 이루어진 배열처럼 보이지만 크기를 바꿀 수 없고(not resizable), 바이너리 데이터만을 위한 메소드를 갖고 있습니다. 버퍼의 숫자는 각각 바이트를 나타내며 0에서 255 사이의 값을 갖고 있습니다. 버퍼 인스턴스를 출력하기 위해 console.log()를 찍으면 16진수로 이루어진 값을 보실 수 있을 겁니다.

> Where You See Buffers:
>
> In the wild, buffers are usually seen in the context of binary data coming from streams, such as fs.createReadStream.

어디서 버퍼를 볼 수 있나요?  
버퍼는 fs.createReadStream과 같이 스트림의 바이너리 데이터 맥락에 있습니다.

# 더 알아보기

[Nodejs.org - How to Use Buffers in Node.js](https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/#:~:text=What%20Are%20Buffers%3F,methods%20specifically%20for%20binary%20data.)  
[freeCodeCamp - Do you want a better understanding of Buffer in Node.js? Check this out.](https://www.freecodecamp.org/news/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8/)  
[The NodeSource Blog - Understanding Streams in Node.js](https://nodesource.com/blog/understanding-streams-in-nodejs/)
