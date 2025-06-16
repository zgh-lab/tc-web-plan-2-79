import { Link, useNavigate } from 'react-router-dom';

export interface NavItem {
  title: string;
  path: string;
  isAction?: boolean;
  actionId?: string;
  isExternal?: boolean;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    title: "首页",
    path: "/"
  },
  {
    title: "技术方向",
    path: "#", // 设置为占位符，不实际跳转
    children: [
      {
        title: "编译器组",
        path: "/tech-cooperation/compiler"
      },
      {
        title: "服务器与工具链组",
        path: "/tech-cooperation/server"
      },
      {
        title: "引擎组",
        path: "/tech-cooperation/engine"
      },
      {
        title: "技术AI组",
        path: "/tech-cooperation/tech-ai"
      },
      {
        title: "AIGC组",
        path: "/tech-cooperation/aigc"
      }
    ]
  },
  {
    title: "项目合作",
    path: "/achievements"
  },
  {
    title: "工具库",
    path: "http://10.5.1.106:8080/",
    isExternal: true
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
  // 如果不在首页，强制跳转到首页并附加锚点
  else {
    // 使用绝对URL确保从任何页面跳转到首页的指定部分
    window.location.href = `${window.location.origin}/#${id}`;
  }
};
