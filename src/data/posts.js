const typeLabels = {
  announcement: '공지',
  general: '일반',
  YB: 'YB',
  OB: 'OB',
  game: '경기',
  meeting: '모임'
};

const typeColors = {
  general: '#A4A4A4',
  announcement: '#FFBF00',
  YB: '#cc6654',
  OB: '#e3ce86',
  game: '#A9BCF5',
  meeting: '#E2A9F3'
};

const posts = [
  { id: 1, title: '커뮤니티에 오신 것을 환영합2니다!', content: '커뮤니티의 첫 번째 게시물입니다.', type: 'general' },
  { id: 2, title: '커뮤니티 가이드라인', content: '커뮤니티 가이드라인을 읽고 따라주세요.', type: 'announcement' },
  { id: 3, title: '자기 소개', content: '자신을 커뮤니티에 소개해주세요.', type: 'general' },
  { id: 4, title: 'YB 소개', content: 'YB 멤버들을 소개2합니다.', type: 'YB' },
  { id: 5, title: 'OB 소22개', content: 'OB 멤버들을 소개합니다.', type: 'OB' },
  { id: 6, title: '다음 경기 일정', content: '다음 경기는 이번 주 일요일에 있습니다.', type: 'game' },
  { id: 7, title: '경기 내용', content: '지난 경기의 결과를 공유합니다.', type: 'game' },
  { id: 8, title: '다음 222모임', content: '다음 모임은 다음 주 금요일에 있습니다.', type: 'meeting' },
  { id: 9, title: '공지사항', content: '중요한 공지사항이 있습니다.', type: 'announcement' },
  { id: 10, title: '커뮤니티 이벤트', content: '다음 커뮤니티 이벤트에 대한 정보를 공유합니다.', type: 'general' },
];

for (let i = 11; i <= 100; i++) {
  const randomType = Object.keys(typeLabels)[Math.floor(Math.random() * Object.keys(typeLabels).length)];
  posts.push({
    id: i,
    title: `게시물 제목`,
    content: `${typeLabels[randomType]} 유형의 게시물입니다.`,
    type: randomType
  });
}

export { posts, typeLabels, typeColors };

