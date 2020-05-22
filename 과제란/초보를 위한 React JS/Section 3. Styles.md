# :collision: Section 3. Styles :collision:


#### Section 3.0 CSS in React part One 

1. style.css를 만들어서 적용시킵니다.
2. 각각 폴더를 만들어서 css파일을 적용시킵니다.
단점: className이 겹치지 않도록 만들어야 합니다.
css파일은 global하게 적용이 됩니다.


#### Section 3.1 CSS in React part Two

className에선 -를 쓸 수 없습니다.
1. ./Header.module.css처럼 module.css를 사용합니다.
2. className={styles.navList}처럼 js방식으로 작성합니다.
3. ```<ul class="Header_navList__17kvf">```처럼 임의의 className을 부여받습니다.


#### Section 3.2 CSS in React part Three

href에는 React Router가 존재하지 않습니다.
yarn add styled-components : 패키지 설치
Link는 Router밖에서 쓰일 수 없습니다.
Ex)
```
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
    display: flex;
    &:hover {
        background-color:blue;
    }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (  
    <Header>
        <List>
            <Item>
                <SLink to = "/">Movies</SLink>
            </Item>
            <Item>
                <SLink to = "/tv">TV</SLink>
            </Item>
            <Item>
                <SLink to = "/search">Search</SLink>
            </Item>
        </List>
    </Header>
);
```
참고할 수 있도록 합니다.


#### Section 3.3 GlobalStyles and Header

yarn add styled-reset : 패키지 설치
```
border-bottom: 5px solid 
        ${props => props.current ? "#3498db" : "transparent"};
```
true면 "#3498db"를 false면 "transparent"를 출력합니다.


#### Section 3.4 Location Aware Header
Ex)
```
export default withRouter(({location: { pathname }}) => (  
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to = "/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to = "/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to = "/search">Search</SLink>
            </Item>
        </List>
    </Header>
));
```
withRouter는 router를 하나로 묶어서 사용할 수 있도록 도와줍니다.
pathName을 설정해서 사용할 수 있도록 합니다.