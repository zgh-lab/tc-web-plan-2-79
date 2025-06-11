
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

  // 定义可搜索的内容 - 包括网站内所有文字
  const searchableContent: SearchResult[] = [
    // 页面
    {
      title: "首页",
      path: "/",
      excerpt: "G-bits 技术中心 用技术为项目赋能 成为行业技术标杆 技术方向 合作方式 特定需求合作 驻组合作",
      type: 'page'
    },
    {
      title: "技术合作",
      path: "/tech-cooperation",
      excerpt: "技术方向 合作模式 技术栈介绍 编译器 服务器 引擎 技术AI AIGC 技术合作",
      type: 'page'
    },
    {
      title: "成果展示",
      path: "/achievements",
      excerpt: "项目合作 技术成果 案例展示 项目展示 合作案例 成果展示",
      type: 'page'
    },
    {
      title: "工具库",
      path: "https://preview--asset-forge-hub.lovable.app/",
      excerpt: "开发工具 技术工具 实用工具集合 资源库 开发资源 工具库",
      type: 'page'
    },
    
    // 技术方向内容
    {
      title: "编译器组",
      path: "/tech-cooperation",
      excerpt: "编译器组 自主研发高性能游戏脚本编译器 支持多平台编译与优化 提升游戏性能与开发效率 GS语言 编译器 词法分析 语法分析 中间代码生成 代码优化 目标代码生成 游戏脚本",
      type: 'content'
    },
    {
      title: "服务器与工具链组", 
      path: "/tech-cooperation",
      excerpt: "服务器与工具链组 设计高可用 可扩展的游戏服务器架构 支持全球范围的低延迟接入和稳定体验 分布式系统 高并发处理 网络协议优化 CI/CD 云服务架构 服务器 工具链",
      type: 'content'
    },
    {
      title: "引擎组",
      path: "/tech-cooperation", 
      excerpt: "引擎组 开发完整的游戏开发工具链 包括资源管理 自动化测试与部署 提高团队协作效率 图形渲染 物理模拟 动画系统 场景管理 资源优化 游戏引擎",
      type: 'content'
    },
    {
      title: "技术AI组",
      path: "/tech-cooperation",
      excerpt: "技术AI组 提供专业的游戏引擎开发与优化 包括渲染系统 物理引擎和跨平台框架设计 机器学习 数据分析 行为决策树 自然语言处理 计算机视觉 人工智能 AI技术",
      type: 'content'
    },
    {
      title: "AIGC组", 
      path: "/tech-cooperation",
      excerpt: "AIGC组 人工智能生成内容技术 为游戏提供智能NPC行为 程序化内容生成与个性化游戏体验 生成对抗网络 深度学习 自然语言生成 计算机图形学 程序化生成 AIGC",
      type: 'content'
    },
    
    // 合作方式内容
    {
      title: "特定需求合作",
      path: "/",
      excerpt: "特定需求合作 技术中心指派具备相应专长的技术同学完成具体需求 负责特定需求的技术研究 方案设计及落地实施 适用于解决短期 单一的技术难点 本部合作",
      type: 'content'
    },
    {
      title: "驻组合作",
      path: "/",
      excerpt: "驻组合作 技术中心选派技术同学常驻项目组进行开发支持 与项目团队深度协同 提供全流程技术支持与解决方案 适用于需要长期 深度技术支撑的项目 驻场合作",
      type: 'content'
    },
    
    // 技术关键词
    {
      title: "GS语言",
      path: "/tech-cooperation",
      excerpt: "GS语言 游戏脚本语言 编程语言 脚本开发 GS插件 GS框架 前后端框架 游戏开发语言",
      type: 'content'
    },
    {
      title: "Unity引擎",
      path: "/tech-cooperation",
      excerpt: "Unity引擎 游戏引擎 3D游戏开发 2D游戏开发 跨平台游戏开发 Unity开发 游戏制作",
      type: 'content'
    },
    {
      title: "服务器框架",
      path: "/tech-cooperation",
      excerpt: "服务器框架 后端框架 分布式架构 微服务架构 云原生 容器化 服务端开发 高并发",
      type: 'content'
    },
    {
      title: "游戏开发工具链",
      path: "/tech-cooperation",
      excerpt: "游戏开发工具链 开发工具 构建工具 自动化工具 测试工具 部署工具 CI/CD 版本控制 资源管理",
      type: 'content'
    },
    {
      title: "AI技术应用",
      path: "/tech-cooperation",
      excerpt: "AI技术应用 人工智能 机器学习 深度学习 神经网络 算法优化 智能算法 数据挖掘 模式识别",
      type: 'content'
    },
    
    // 技术概念
    {
      title: "前后端框架",
      path: "/tech-cooperation", 
      excerpt: "前后端框架 全栈开发 前端技术 后端技术 web开发 移动端开发 响应式设计 用户界面",
      type: 'content'
    },
    {
      title: "图形渲染",
      path: "/tech-cooperation",
      excerpt: "图形渲染 3D渲染 2D渲染 实时渲染 光线追踪 着色器 材质系统 视觉效果 渲染引擎 GPU计算",
      type: 'content'
    },
    {
      title: "性能优化",
      path: "/tech-cooperation",
      excerpt: "性能优化 代码优化 算法优化 内存优化 CPU优化 GPU优化 网络优化 数据库优化 系统调优",
      type: 'content'
    },
    {
      title: "技术研发",
      path: "/",
      excerpt: "技术研发 创新技术 前沿技术 技术解决方案 研发中心 技术创新 技术积累 技术沉淀",
      type: 'content'
    },
    {
      title: "项目赋能",
      path: "/",
      excerpt: "项目赋能 技术支持 项目优化 效率提升 技术服务 项目合作 技术咨询 解决方案",
      type: 'content'
    },
    {
      title: "技术标杆",
      path: "/",
      excerpt: "技术标杆 行业领先 技术创新 标准制定 技术领导者 行业标准 技术先进性 技术实力",
      type: 'content'
    },
    
    // 其他关键概念
    {
      title: "游戏开发",
      path: "/tech-cooperation",
      excerpt: "游戏开发 游戏设计 游戏制作 游戏引擎开发 互动娱乐 数字娱乐 游戏技术 游戏产业",
      type: 'content'
    },
    {
      title: "云计算",
      path: "/tech-cooperation",
      excerpt: "云计算 云服务 云原生 容器技术 Kubernetes Docker 微服务 分布式系统 弹性扩容",
      type: 'content'
    },
    {
      title: "数据分析",
      path: "/tech-cooperation",
      excerpt: "数据分析 大数据 数据挖掘 商业智能 数据可视化 统计分析 预测分析 数据科学",
      type: 'content'
    },
    {
      title: "自动化测试",
      path: "/tech-cooperation",
      excerpt: "自动化测试 单元测试 集成测试 性能测试 压力测试 回归测试 测试框架 质量保证",
      type: 'content'
    },
    {
      title: "资源管理",
      path: "/tech-cooperation",
      excerpt: "资源管理 资产管理 内存管理 文件管理 版本管理 配置管理 依赖管理 包管理",
      type: 'content'
    },
    
    // 公司信息
    {
      title: "G-bits技术中心",
      path: "/",
      excerpt: "G-bits技术中心 技术中心 深圳 南山区 方大城 17楼 联系地址 公司地址",
      type: 'content'
    },
    {
      title: "使命愿景",
      path: "/",
      excerpt: "我们的使命是用技术为项目赋能 我们的愿景是成为行业技术标杆 技术使命 企业愿景 技术理念",
      type: 'content'
    },
    
    // 组织架构
    {
      title: "技术组织",
      path: "/",
      excerpt: "编译器组 服务器与工具链组 引擎组 技术AI组 AIGC组 技术团队 组织架构 技术部门",
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

    // 按相关性排序：标题匹配优先，然后是内容匹配
    results.sort((a, b) => {
      const aInTitle = a.title.toLowerCase().includes(query);
      const bInTitle = b.title.toLowerCase().includes(query);
      
      if (aInTitle && !bInTitle) return -1;
      if (!aInTitle && bInTitle) return 1;
      return 0;
    });

    setSearchResults(results.slice(0, 10)); // 增加搜索结果数量
  }, [searchQuery]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={cn("p-2 rounded-full hover:bg-gray-200/20 transition-colors", isScrolled ? "text-gray-700" : "text-white")}>
          <Search size={isMobile ? 18 : 20} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
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
                        <div className="text-sm text-gray-500 truncate max-w-full">{result.excerpt.slice(0, 100)}...</div>
                      </a>
                    ) : (
                      <Link to={result.path} className="flex flex-col items-start w-full">
                        <div className="font-medium">{result.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-full">{result.excerpt.slice(0, 100)}...</div>
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
