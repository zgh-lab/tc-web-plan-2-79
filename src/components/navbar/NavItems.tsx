
import { Link, useNavigate } from 'react-router-dom';

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
  // 检查当前是否在首页
  const isHomePage = window.location.pathname === "/";
  
  // 如果在首页，直接滚动到对应区域
  if (isHomePage) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  } 
  // 如果不在首页，先跳转到首页，然后滚动到对应区域
  else {
    window.location.href = `/#${id}`;
  }
};
