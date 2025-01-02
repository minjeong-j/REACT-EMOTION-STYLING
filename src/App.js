/** @jsxImportSource @emotion/react */
import { css, Global, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

// 1. 고급 기능 스타일링 적용 - 1단계 : 글로벌 스타일 정의
const globalStyle = css`
	body {
		margin: 0;
		font-family: Arial, sans-serif;
		background-color: #f0f0f0;
	}
`;

// 2. 고급 기능 스타일링 적용 - 2단계 : 테마 정의
const theme = { 
	primary: 'blue',
	secondary: 'gray',
};

// 3. Emotion의 동적 스타일링 적용 - 1단계 : props 기반 동적 스타일링
const Button = styled.button`
	background-color: ${(props) => (props.primary ? props.theme.primary : props.theme.secondary)};
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
    
	&:hover {
    	background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
	}
`;

// 4. Emotion의 동적 스타일링 적용 - 2단계 : 객체 스타일링 
const buttonStyle = {
	backgroundColor: 'blue',
	color: 'white',
	padding: '10px 20px',
	border: 'none',
	borderRadius: '5px',
	cursor: 'pointer', 
	'&:hover': {
    	backgroundColor: 'skyblue',
	},
};

// 5. 고급 기능 스타일링 적용 - 3단계 : 애니메이션 적용
const fadeIn = keyframes`
	from {
		opacity: 0;
	} 
	to {
		opacity: 1;
	}
`;

const AnimatedDiv = styled.div`
	animation: ${fadeIn} 2s ease-in-out;
	margin: 20px 0;
`;

function App() {
	return (
    // 테마 기반 스타일 적용
		<ThemeProvider theme={theme}>
			{/* 글로벌 스타일 적용*/}
			<Global styles={globalStyle} />
			<h1 css={{ textAlign: 'center' }}>Emotion Demo</h1>
        	
			{/* 동적 스타일링 적용 - 1단계 : props 기반 스타일링 */}
			<div css={{ textAlign: 'center', marginBottom: '20px' }}>
				<Button primary>Primary Button</Button>
				<Button style={{ marginLeft: '10px' }}>Secondary Button</Button>
			</div>
            
			{/* 동적 스타일링 적용 - 2단계 : 객체 스타일링 */}
			<div css={{ textAlign: 'center' }}>
				<button css={buttonStyle}>Click Me</button>
			</div>
            
			{/* 애니메이션 */}
			<AnimatedDiv css={{ textAlign: 'center' }}>Fading In Animation</AnimatedDiv>
            
		</ThemeProvider>
	);
}

export default App;