
export interface NavLink {
  name: string;
  href: string;
}

export interface Solution {
  id: string;
  name: string;
  description: string;
  area: '리더십 역량' | '인재경영' | '조직운영' | '문화혁신' | '성과관리' | '인사분석';
}
