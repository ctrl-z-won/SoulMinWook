# ✨ Section 6. Presenter ✨

## section6.0 Presenter structure

Container에 export받은 데이터를 proptype으로 데이터 proptype을 만들어줍니다.  

## section6.1 HomePresenter and Section Components

Data항목별로 section를 만들어줍니다.  

ex)
```javascripts
{topRated && topRated.length > 0 && (
    <Section title="Top Rated Shows">
        {topRated.map(show => show.name)}
    </Section>
)}
```

## section6.2 TVPresenter and Loader Components

aria-label은 screen reader에게 어떤 역할을 하는지 말해주기 위해 사용되는 값입니다.  

stuff(HomePresenter)는 항상 Load되고 있는지 항상 확인해야 합니다.
 
## section6.3 SearchPresenter Component

```javascript
handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if(searchTerm !== ""){
        this.searchByTerm();
    }
};

updateTerm = (event) => {
    const { 
        target: { value } 
    } = event;
    console.log(value);
    this.setState({
        searchTerm: value
    });
};
```

```event.preventDefault();```는 event를 취소할 수 있는 경우, 검색어를 입력후 enter를 누르면 발생하는 event의 전파를 막지 않고 그 이벤트를 취소합니다. 

검색을 하고 난 이후, 다시 검색을 하는 경우도 생각해야 합니다.

## section6.4 Message Component

```javascripts
{error && <Message color="#e74c3c" text={error} />}
{tvResults && 
movieResults && 
tvResults.length===0 && 
movieResults.length===0 && 
<Message color="#8395a7" text="Nothing found" />
}
```

error가 일어날 수 있는 상황을 대비해서 만들 수 있도록 해줍니다.   

Not Found가 나올 수 있는 상황은 결과값이 있지만 길이가 0인 경우일 것입니다. 

* _CSS Unit:_

1. em: 현재의 font-size를 정의(font-family에 의존)
2. rem: 최상위 태그에 지정한 것을 기준으로 삼으며, 보통 최상위 태그는 html태그입니다.(font-family에 의존)
3. rh: 뷰포트의 높이값의 1/100을 의미합니다.
4. rw: 뷰포트의 너비값의 1/100을 의미합니다.
5. vmin: 너비값과 높이값 중 최소값에 대한 1/100을 의미합니다.
6. vmax: 너비값과 높이값 중 최대값에 대한 1/100을 의미합니다.
7. ch: 글꼴 단위라고 부르면서 제로 문자인 0의 너비값의 고급척도
8. ex: 현재 폰트의 x-높이값(=소문자 x의 높이값) 또는 em의 절반값

## section6.5 Poster Component part One

aria-label : 현재 요소에 레이블을 정의하기 위해서 사용합니다.  

텍스트 레이블이 화면에 표시되지 않을 때에 사용합니다.  

```<Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>```와 같이 movie와 show의 링크를 따로 만들어줄 수 있도록 합니다.  

## section6.6 Rendering Poster Component

```javascipt
<Section title="Top Rated Shows">
    {topRated.map(show => 
        <Poster 
            key={show.id} 
            id={show.id} 
            imageUrl={show.poster_path}
            title={show.original_name}
            rating={show.vote_average}
            year={show.first_air_date.substring(0,4)} 
            isMovie={false}
        />
    )}
</Section>
```

Section을 이와 같이 만들어서 Poster를 불러드릴 수 있도록 만들어줍니다.

## section6.7 Poster Component part Two

```transition: opacity 0.1s linear;```은 엘리먼트의 두 가지 상태 사이에 변화를 줄 수 있습니다.  

```background-size: cover;```는 이미지가 찌그러지지 않는 한도 내에서 제일 크게 설정하는 것을 의미합니다.  

```border-radius: 4px;```는 px만큼 요소 테두리 경계의 꼭짓점을 둥글게 만듭니다.  

```background-position: center center;```는 배경이미지을 어디에다가 둘 것인지 설정해주는 값입니다.  

## section6.8 Detail Container part One

api를 통해 데이터를 불러와서 사용하는 경우, 그 페이지에 전달되는 json data를 viewer로 열어 계속 확인할 수 있도록 합니다.

```javascript
{result.genres && 
     result.genres.map(
        (genre, index) => 
            index === result.genres.length-1 ? 
            genre.name : `${genre.name} / `
    )}
```

이 코드에선 array형식인 result.genres를 genre라는 변수와 몇 번째인지 알 수 있는 index 변수를 사용하여, ```index === result.genres.length-1 ```의 조건 , 즉 마지막 변수에만 /를 붙이지 않도록 하는 코드입니다.  

## section6.9 Detail Container part Two

span에는 margin이 존재하지 않습니다.  

```line-height: 1.5;```는 문장 위/아래에 대한 문장 간격을 의미합니다.

## section6.10 React Helmet

yarn add react-helmet : helmet 패키지 설치

```javascript
<Helmet>
    <title>Movies | Nomflix</title>
</Helmet>
```

이와 같이 해당 페이지의 태그 title을 바꿀 수 있습니다.
