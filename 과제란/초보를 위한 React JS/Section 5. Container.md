# :collision: Section 5. Container :collision:

## section5.0 Container Presenter Pattern part One

컨테이너 프리젠터 패턴 : 컨테이너는 data를 가지고 state(상태값)를 가지고, api를 불러온 다음, 모든 로직을 처리합니다. 그 다음에 프리젠터(=함수형 컴포넌트, 상태값을 가지지 않습니다.)는 그 데이터들을 보여주는 역할을 합니다.

## section5.1 Container Presenter Pattern part Two

기능별로 폴더를 만들어서 index.js, HomeContainer.js, HomePresenter.js과 같이 세 개의 js파일을 만든 후, 기능별로 필요한 데이터는 container에 처리할 수 있도록 만들어줍니다.

## section5.2 Home Container

작은 데이터를 처리하는 경우에는 componentDidMount로 처리하면 되지만, 데이터 처리량이 많을 경우, 다른 함수들로 분리해서 만든 후, this를 사용해서 함수를 불러들이면 됩니다.

async & await는 자바스크립트한테 이거 끝날 때까지 다음 것을 진행하지 말라는 뜻을 의미합니다. async & await는 비동기 처리 패턴은 사용할 수 있도록 만들어줍니다.

특정로직의 실행이 끝날 때까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것이 비동기 처리라고 합니다.

비동기 처리를 해결하기 위해 callback 함수가 존재합니다.

비동기 처리 관련 글 : <https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/>

Promise란? 자바스크립트 비동기 처리에 사용되는 객체입니다. 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용합니다.

A promise is an object that may produce a single value some time in the future.

api를 통해 정보를 가지고 올 때, 비동기처리(async-await 사용)을 하지 않는다면, console창에 Promise로 출력될 것이고 비동기 처리로 api를 통해 모든 정도를 받은 후, console창에 출력을 하게 되면 data를 확인할 수 있습니다.

Object deconstruction(객체 비구조화 할당):

```javascipts
const {
    data: { results: nowPlaying }
    } = await moviesApi.nowPlaying();
    const {
        data: { results: upcoming }
    } = await moviesApi.upcoming();
    const {
        data: { results: popular }
    } = await moviesApi.popular();
    this.setState({
        nowPlaying,
        upcoming,
        popular
    })
}
```

위 코드와 같이 작성하는 방식을 의미합니다.

## section5.3 TV Container

```async componentDidMount(){}```와```componentDidMount = async() => {}```는 같은 코드입니다.

## section5.4 Search Container

누군가가 폼에서 text를 입력하고, 엔터를 누르면, 그게 handleSubmit이 됩니다.

## section5.5 Detail Container part One

Route에게는 default로 모든 정보를 제공해줍니다.

```javascript
async componentDidMount(){
        const {
            match : {
                params: { id }
            },
            history: { push }
        } = this.props;
        const parseId = parseInt(id);
        if(isNaN(parseId)){
            return push("/");
        }
    }
```

props에는 match라는 속성이 존재하는데 params값 안에 url로 사용하는 함수를 확인할 수 있습니다.

history에는 다양한 함수가 존재하고 그 중 push는 해당 url로 전해주는 기능을 가지고 있습니다.

javascipt는 함수를 이용한 후, 함수를 종료시키기 위해서, ```return push("/")```와 같이 return를 이용해 함수 실행 후, 종료를 시킬 수 있습니다.

## section5.6 Detail Container part Two

```javascript
super(props);
```

super는 부모 오브젝트의 함수를 호출할 떄 사용됩니다.
즉, props를 부모 오브젝트로 삼아서 클래스를 생성하는 생성자의 역할을 합니다.

## section5.7 Destructuring assignment with let

```javascript
({
    data: result
} = await moviesApi.movieDetail(parseId));
```

```javascript
const request = await tvApi.showDetail(parseId);
result = request.data;
```

위 두 코드는 같은 코드입니다.

()와 const는 같은 역할을 해줍니다. request.data는 result랑 같습니다.
