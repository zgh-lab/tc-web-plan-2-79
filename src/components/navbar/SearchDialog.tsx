
import { Search } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { 
  Command, 
  CommandInput, 
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from "@/components/ui/command";
import { cn } from '@/lib/utils';

interface SearchDialogProps {
  isScrolled: boolean;
  isMobile?: boolean;
}

interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
  type: 'page' | 'section' | 'content';
}

const SearchDialog = ({ isScrolled, isMobile = false }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // 定义可搜索的内容
  const searchableContent: SearchResult[] = [
    {
      title: "首页",
      path: "/",
      excerpt: "G-bits 技术中心 - 用技术为项目赋能，成为行业技术标杆，我们的使命是用技术为项目赋能，我们的愿景是成为行业技术标杆",
      type: 'page'
    },
    {
      title: "技术合作",
      path: "/tech-cooperation",
      excerpt: "技术方向、合作模式、技术栈介绍、编译器、服务器、引擎、技术AI、AIGC",
      type: 'page'
    },
    {
      title: "成果展示",
      path: "/achievements",
      excerpt: "项目合作、技术成果、案例展示、项目展示、合作案例",
      type: 'page'
    },
    {
      title: "工具库",
      path: "https://preview--asset-forge-hub.lovable.app/",
      excerpt: "开发工具、技术工具、实用工具集合、资源库、开发资源",
      type: 'page'
    },
    {
      title: "编译器组",
      path: "/tech-cooperation",
      excerpt: "编译器 自主研发高性能游戏脚本编译器，支持多平台编译与优化，提升游戏性能与开发效率 GS语言编译器 词法分析 语法分析 中间代码生成 代码优化 目标代码生成",
      type: 'content'
    },
    {
      title: "服务器与工具链组", 
      path: "/tech-cooperation",
      excerpt: "服务器 工具链 设计高可用、可扩展的游戏服务器架构，支持全球范围的低延迟接入和稳定体验 分布式系统 高并发处理 网络协议优化 CI/CD 云服务架构",
      type: 'content'
    },
    {
      title: "引擎组",
      path: "/tech-cooperation", 
      excerpt: "引擎 游戏引擎 开发完整的游戏开发工具链，包括资源管理、自动化测试与部署，提高团队协作效率 图形渲染 物理模拟 动画系统 场景管理 资源优化",
      type: 'content'
    },
    {
      title: "技术AI组",
      path: "/tech-cooperation",
      excerpt: "技术AI 人工智能 提供专业的游戏引擎开发与优化，包括渲染系统、物理引擎和跨平台框架设计 机器学习 数据分析 行为决策树 自然语言处理 计算机视觉",
      type: 'content'
    },
    {
      title: "AIGC组", 
      path: "/tech-cooperation",
      excerpt: "AIGC 人工智能生成内容技术，为游戏提供智能NPC行为、程序化内容生成与个性化游戏体验 生成对抗网络 深度学习 自然语言生成 计算机图形学 程序化生成",
      type: 'content'
    },
    {
      title: "游戏开发",
      path: "/tech-cooperation",
      excerpt: "游戏开发 游戏引擎 游戏技术 互动体验开发 游戏脚本 游戏性能优化",
      type: 'content'
    },
    {
      title: "人工智能",
      path: "/tech-cooperation", 
      excerpt: "人工智能 AI技术 机器学习 深度学习应用 智能算法 神经网络",
      type: 'content'
    },
    {
      title: "云计算",
      path: "/tech-cooperation",
      excerpt: "云计算 云服务 分布式系统 技术架构 云原生 微服务",
      type: 'content'
    },
    {
      title: "技术研发",
      path: "/",
      excerpt: "技术研发 创新技术 前沿技术 技术解决方案 研发中心 技术创新",
      type: 'content'
    },
    {
      title: "项目赋能",
      path: "/",
      excerpt: "项目赋能 技术支持 项目优化 效率提升 技术服务 项目合作",
      type: 'content'
    },
    {
      title: "技术标杆",
      path: "/",
      excerpt: "技术标杆 行业领先 技术创新 标准制定 技术领导者 行业标准",
      type: 'content'
    },
    {
      title: "GS语言",
      path: "/tech-cooperation",
      excerpt: "GS语言 游戏脚本语言 编程语言 脚本开发 GS插件 GS框架",
      type: 'content'
    },
    {
      title: "前后端框架",
      path: "/tech-cooperation", 
      excerpt: "前后端框架 技术框架 开发框架 全栈开发 前端技术 后端技术",
      type: 'content'
    },
    {
      title: "图形渲染",
      path: "/tech-cooperation",
      excerpt: "图形渲染 渲染技术 3D渲染 图形处理 视觉效果 渲染引擎",
      type: 'content'
    },
    {
      title: "性能优化",
      path: "/tech-cooperation",
      excerpt: "性能优化 系统优化 代码优化 运行效率 性能提升 优化方案",
      type: 'content'
    }
  ];

  // 搜索功能
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = searchableContent.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.excerpt.toLowerCase().includes(query)
    );

    setSearchResults(results.slice(0, 8)); // 限制搜索结果数量
  }, [searchQuery]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={cn("p-2 rounded-full hover:bg-gray-200/20 transition-colors", isScrolled ? "text-gray-700" : "text-white")}>
          <Search size={isMobile ? 18 : 20} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Command>
          <CommandInput 
            placeholder="搜索网站内容..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            <CommandEmpty>没有找到相关结果</CommandEmpty>
            
            {searchQuery.trim() === '' ? (
              <CommandGroup heading="建议">
                <CommandItem>
                  <Link to="/tech-cooperation" className="flex items-center w-full">
                    技术合作
                  </Link>
                </CommandItem>
                <CommandItem>
                  <Link to="/achievements" className="flex items-center w-full">
                    成果展示
                  </Link>
                </CommandItem>
                <CommandItem>
                  <a 
                    href="https://preview--asset-forge-hub.lovable.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center w-full"
                  >
                    工具库
                  </a>
                </CommandItem>
              </CommandGroup>
            ) : (
              <CommandGroup heading="搜索结果">
                {searchResults.map((result, index) => (
                  <CommandItem key={index}>
                    {result.path.startsWith('http') ? (
                      <a 
                        href={result.path} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-start w-full"
                      >
                        <div className="font-medium">{result.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-full">{result.excerpt.slice(0, 80)}...</div>
                      </a>
                    ) : (
                      <Link to={result.path} className="flex flex-col items-start w-full">
                        <div className="font-medium">{result.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-full">{result.excerpt.slice(0, 80)}...</div>
                      </Link>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
