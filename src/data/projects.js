export const projects = [
	{
		id: "spotify-clone",
		title: "Spotify 클론 프로젝트",
		description:
			"Spotify Web API를 활용해 인증 기반 음악 검색과 플레이리스트 기능을 구현한 개인 프로젝트.",
		period: "2025.06 (1개월)",
		role: "Frontend 개발 / API 연동 / 인증 구조 설계",
		tech: ["React", "TypeScript", "React Query", "Spotify API", "MUI"],
		image: "/spotify-clone.png",
		imageList: ["/spotify-clone.png", "/spotify-search.png"],
		github: "https://github.com/seon022/Koalnu-spotify-demo",
		demo: "https://ksy-spotify-demo.netlify.app/",
		tags: ["React 19", "TypeScript", "React Query", "Zustand", "MUI"],

		detail: {
			overview:
				"Spotify API 기반으로 음악 검색, 재생 목록 구현까지 포함한 기능 중심 클론 프로젝트입니다.",
			members: 1,

			contributions: [
				"React Query 기반 API 상태 관리 및 캐싱 전략 구성",
				"메인 검색 화면 및 재생 목록 UI 개발",
			],

			extras: {
				techDecisions: [
					"서버 상태는 React Query로 관리하여 요청 중복 최소화 및 캐싱 최적화",
					"UI 전역 상태는 단순성을 고려해 Zustand로 관리",
				],
				problemSolving: [
					{
						problem: "OAuth 토큰이 짧은 주기로 만료되어 API 요청이 자주 실패함",
						solution:
							"요청 전 토큰 만료 여부를 확인하고 자동 refresh하는 intercept 로직 구현",
						result: "API 호출 실패율 감소 및 안정적인 음악 검색 경험 확보",
					},
					{
						problem: "동일 검색어 입력 시 API가 중복 호출되어 성능 저하 발생",
						solution:
							"React Query staleTime 조절로 최근 검색값 캐싱하여 불필요한 re-fetch 제거",
					},
				],
			},
		},
	},

	{
		id: "miru-gotchi",
		title: "Miru-Gotchi 습관 형성 TODO 앱",
		description:
			"사용자의 체크 기록에 따라 캐릭터가 성장하는 Firebase 기반 목표 관리 서비스.",
		period: "2025.06 (1주)",
		role: "Frontend 개발 / Firebase 연동 / 팀 협업",
		tech: [
			"React",
			"TypeScript",
			"Firebase",
			"Vite",
			"Styled Components",
			"MUI",
		],
		image: "/miru-gotchi.png",
		imageList: ["/miru-gotchi-logo.png", "/miru-gotchi-list.png"],
		github: "https://github.com/seon022/MIRU-GOTCHI",
		demo: "https://miru-gotchi.netlify.app/",
		tags: [
			"React 18",
			"Vite",
			"TypeScript",
			"Styled Components",
			"MUI",
			"Firebase",
		],

		detail: {
			overview:
				"하루 목표 체크에 따라 캐릭터의 성장 단계가 변하는 습관 관리 웹앱입니다.",
			members: 4,

			contributions: [
				"Firebase Auth 기반 Google 로그인 기능 구현",
				"Firestore 기반 목표 CRUD 및 실시간 데이터 연동",
				"팀 협업을 위한 Vite + TS 개발 환경 설정",
			],

			extras: {
				techDecisions: [
					"반복되는 데이터 처리 로직을 custom hook으로 분리해 재사용성 강화",
					"Styled Components로 팀 협업 시 스타일 모듈화 및 유지보수성 확보",
				],
				problemSolving: [
					{
						problem: "실시간 스트림(onSnapshot)으로 인해 불필요한 리렌더 발생",
						solution:
							"리스너 구조 재정립 및 메모이제이션을 적용해 특정 상태만 업데이트되도록 제한",
					},
					{
						problem: "다중 사용자 업데이트 시 캐릭터 경험치 충돌 발생",
						solution: "Firestore transaction 기능을 적용해 데이터 무결성 보장",
					},
				],
			},
		},
	},

	{
		id: "korea-museum",
		title: "국립중앙박물관 클론 프로젝트",
		description:
			"국립중앙박물관 기존 홈페이지를 UI 개선 및 반응형 기반으로 재구성한 퍼블리싱 중심 프로젝트.",
		period: "2023.12 (1개월)",
		role: "퍼블리싱 / 반응형 레이아웃 설계 / UI 구조 개선",
		tech: ["HTML", "CSS", "JavaScript", "Responsive Web"],
		image: "/museum-pc.png",
		imageList: ["/museum-mobile.png", "/museum-mobile2.png"],
		github: "https://github.com/seon022/project02-museum",
		demo: "https://ksy-project-koreamuseum.netlify.app/",
		tags: ["HTML", "CSS", "JavaScript", "Responsive Web", "UI Redesign"],

		detail: {
			overview:
				"기존 국립중앙박물관 홈페이지를 콘텐츠 중심 UI로 재구성하고 반응형 레이아웃으로 개선한 프로젝트입니다.",
			members: 1,

			contributions: [
				"홈페이지 전체 퍼블리싱 및 반응형 레이아웃 설계",
				"메뉴, 전시 콘텐츠, 이미지 섹션 UI 재구성",
				"이미지 비율 유지 및 해상도별 크기 최적화 처리",
			],

			extras: {
				techDecisions: [
					"여러 해상도에서 가독성을 확보하기 위해 모바일 퍼스트 전략 도입",
					"이미지 성능 개선을 위해 lazy-loading 적용",
				],
			},
		},
	},
];
