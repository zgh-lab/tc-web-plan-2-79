
import { Link } from 'react-router-dom';

export interface NavItem {
  title: string;
  path: string;
  isAction?: boolean;
  actionId?: string;
  isExternal?: boolean;
}

export const navItems: NavItem[] = [
  {
    title: "首页",
    path: "/"
  },
  {
    title: "技术合作",
    path: "/tech-cooperation"
  },
  {
    title: "知识库",
    path: "/knowledge-base"
  },
  {
    title: "成果展示",
    path: "/achievements"
  },
  {
    title: "工具库",
    path: "https://preview--asset-forge-hub.lovable.app/",
    isExternal: true
  },
  {
    title: "联系我们",
    path: "#",
    isAction: true,
    actionId: "contact"
  }
];

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
