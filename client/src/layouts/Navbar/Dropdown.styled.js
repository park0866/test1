import styled from 'styled-components';
import { FaRegMap } from 'react-icons/fa';

export const MapButtonContainer = styled.div`
  display: flex;
  min-width: 200px;
  padding: 0px;
  align-self: center;
  position: relative;
`
export const SimpleDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const MainDropDown = styled.div`
  /* background-color: #333333; */
  background: #EECCAA;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: none;
  position: absolute;  // MapIconContainer위치 기준으로 absolute하다.
  left: 0; // 지도 Icon 왼쪽에서부터 위치
  top: calc(100% + .25rem); // 세로 위치 : MapContainer 아래 바로 밑이 100%, 거기서 조금더 밑으로(.25rem)
  padding: .95rem;
  border-radius: .25rem;  // 모서리 둥글게
  width: 200px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);   // 옆 아래 shadow크기 shadow색
`
export const MapButtonLink = styled.a.attrs({
  href: '#',
  onClick: e => {
    e.preventDefault();
  }
})`
  display: flex;
  height: 100%;
  margin: auto;
  margin-left: 3.3em;
  position: relative;
  color: #000;
  :hover ${MainDropDown} {   // 이것때문에 함수 놓는 순서가 중요. MainDropDown이 위에 있어야 함.
    display: block;
  }
  > div {
    margin: auto; 
  }
`


export const DropDownDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropDownSpan = styled.span`
  font-size: 1rem;
  text-align:center;
  font-weight: 480;
  color: #aaaaaa;
 
`;

export const InputText = styled.input`
  width: 140px;
  text-decoration: none;
  text-align: center;
  outline: none;
  margin: 4px 0px 0px 0px;
  padding: 0px 0px;
  border: 3px solid ${ ({theme}) => theme.colors.cardBackground };
  font-size: 17px;
  border-radius: 20px;
  height: 40px;
`;

export const MenuGrid = styled.div`
  display: flex;
  /* grid-template-columns: repeat()(max-content, 1);
  gap: 1rem; */
  flex-direction: column;
  gap: .5rem;
`

export const MenuHeadings = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const MenuLinks = styled.div`
  font-size: 1em;
  margin-left: 1.4em;
  &:hover {
    color: orangered;
  }
`

// export const DropDownMenu = styled.div`
//   position: absolute;  // MapIconContainer위치 기준으로 absolute하다.
//   left: 0; // 지도 Icon 왼쪽에서부터 위치
//   top: calc(100% + .25rem); // 세로 위치 : MapContainer 아래 바로 밑이 100%, 거기서 조금더 밑으로(.25rem)
//   background: #E7BC97;
//   padding: .75rem;
//   border-radius: .25rem;  // 모서리 둥글게
//   box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);   // 옆 아래 shadow크기 shadow색
//   opacity: 0;   // default는 invisible
//   /* pointer-events: none; */
//   transform : translateY(-10px);  // 밑으로 가는 animation에서 10px 정도 위에서부터 시작
//   transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;   // opacity에만 animation을 준다.
//   &:hover {
//     opacity: 1;
//     transform: translateY(0);
//   }
//   &:active {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `

