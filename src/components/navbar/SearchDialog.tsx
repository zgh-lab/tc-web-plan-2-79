
import { Search } from "lucide-react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

// 搜索数据定义
const searchData = [
  // 导航页面
  { title: "首页", content: "G-bits 技术中心 游戏开发 人工智能 云计算", path: "/", type: "页面" },
  { title: "技术方向", content: "游戏开发 人工智能 云计算 技术合作", path: "/tech-cooperation", type: "页面" },
  { title: "项目合作", content: "成果展示 项目案例", path: "/achievements", type: "页面" },
  { title: "工具库", content: "开发工具 实用工具", path: "https://preview--asset-forge-hub.lovable.app/", type: "外部链接" },
  
  // 首页内容
  { title: "技术赋能", content: "我们的使命是用技术为项目赋能", path: "/", type: "内容", anchor: "content-section" },
  { title: "游戏开发技术", content: "Unity 引擎开发 多平台游戏开发", path: "/tech-cooperation", type: "技术", anchor: "game-dev" },
  { title: "人工智能技术", content: "机器学习 深度学习 自然语言处理", path: "/tech-cooperation", type: "技术", anchor: "ai-tech" },
  { title: "云计算技术", content: "云服务 分布式系统 微服务架构", path: "/tech-cooperation", type: "技术", anchor: "cloud-tech" },
  { title: "编译器组", content: "编译技术 代码优化 语言设计", path: "/tech-cooperation", type: "技术", anchor: "compiler" },
  
  // 联系信息
  { title: "联系我们", content: "技术咨询 合作洽谈", path: "/", type: "内容", anchor: "contact" },
  { title: "博客文章", content: "技术博客 最新动态", path: "/", type: "内容", anchor: "blog" },
];

const SearchDialog = ({ isScrolled, isMobile = false }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // 搜索逻辑
  const filteredResults = searchData.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleItemSelect = (item: typeof searchData[0]) => {
    setIsOpen(false);
    setSearchQuery("");
    
    if (item.path.startsWith('http')) {
      // 外部链接
      window.open(item.path, '_blank', 'noopener,noreferrer');
    } else if (item.anchor) {
      // 内部锚点跳转
      if (window.location.pathname === item.path) {
        // 当前页面，直接滚动
        const element = document.getElementById(item.anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // 跳转到其他页面并滚动
        navigate(item.path);
        setTimeout(() => {
          const element = document.getElementById(item.anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // 普通页面跳转
      navigate(item.path);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className={cn("p-2 rounded-full hover:bg-gray-200/20 transition-colors", isScrolled ? "text-gray-700" : "text-white")}>
          <Search size={isMobile ? 18 : 20} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <Command>
          <CommandInput 
            placeholder="搜索页面内容..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            <CommandEmpty>没有找到相关结果</CommandEmpty>
            {filteredResults.length > 0 && (
              <CommandGroup heading="搜索结果">
                {filteredResults.map((item, index) => (
                  <CommandItem
                    key={index}
                    onSelect={() => handleItemSelect(item)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-sm text-muted-foreground">{item.content}</span>
                    </div>
                    <span className="text-xs bg-muted px-2 py-1 rounded">{item.type}</span>
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
