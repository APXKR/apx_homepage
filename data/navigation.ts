export interface MegaMenuLink {
  name: string;
  href: string;
  description?: string;
}

export interface MegaMenuColumn {
  heading: string;
  links: MegaMenuLink[];
}

export interface NavigationLink {
  name: string;
  href: string;
  megaMenu?: {
    columns: MegaMenuColumn[];
    featured: MegaMenuLink[];
  };
}

export const navLinks: NavigationLink[] = [
  {
    name: '솔루션',
    href: '#',
    megaMenu: {
      featured: [],
      columns: [
        {
          heading: 'APPROACH',
          links: [
            { name: '인사이트 퍼널', href: '#' },
          ]
        },
        {
          heading: 'PEOPLE & ORGANIZATION',
          links: [
            { name: '리더십 역량', href: '#' },
            { name: '인재경영', href: '#' },
            { name: '조직운영', href: '#' },
            { name: '문화혁신', href: '#' },
            { name: '성과관리', href: '#' },
            { name: '인사분석', href: '#' },
          ]
        },
        {
          heading: 'STARTUP',
          links: [
            { name: '경영관리', href: '#' },
          ]
        },
      ]
    }
  },
  {
    name: '아카데미',
    href: '#',
    megaMenu: {
        featured: [],
        columns: [
          {
            heading: '리더십',
            links: [
              { name: '신임 리더 과정', href: '#' },
              { name: '성과관리 리더십 과정', href: '#' },
              { name: '변화관리 리더십 과정', href: '#' },
              { name: '(세부 과정 준비 중)', href: '#' },
            ]
          },
          {
            heading: '공통역량',
            links: [
              { name: '문제해결 과정', href: '#' },
              { name: '전략적 사고 과정', href: '#' },
              { name: '소통 및 협업 과정', href: '#' },
              { name: '(세부 과정 준비 중)', href: '#' },
            ]
          },
          {
            heading: '직무역량',
            links: [
              { name: 'HR 전문가 과정', href: '#' },
              { name: '영업 전문가 과정', href: '#' },
              { name: 'PM 전문가 과정', href: '#' },
              { name: '(세부 과정 준비 중)', href: '#' },
            ]
          },
          {
            heading: '조직문화',
            links: [
                { name: '가치 내재화 과정', href: '#' },
                { name: '조직소통 활성화 과정', href: '#' },
                { name: '혁신 촉진 과정', href: '#' },
                { name: '(세부 과정 준비 중)', href: '#' },
            ]
          }
        ]
      }
  },
  { name: '인사이트', href: '#' },
  { name: '성공사례', href: '#' },
  { name: '회사소개', href: '#' },
];