
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
      excerpt: "G-bits 技术中心 - 用技术为项目赋能，成为行业技术标杆",
      type: 'page'
    },
    {
      title: "技术合作",
      path: "/tech-cooperation",
      excerpt: "技术方向、合作模式、技术栈介绍",
      type: 'page'
    },
    {
      title: "成果展示",
      path: "/achievements",
      excerpt: "项目合作、技术成果、案例展示",
      type: 'page'
    },
    {
      title: "工具库",
      path: "https://preview--asset-forge-hub.lovable.app/",
      excerpt: "开发工具、技术工具、实用工具集合",
      type: 'page'
    },
    {
      title: "游戏开发",
      path: "/tech-cooperation",
      excerpt: "游戏引擎、游戏技术、互动体验开发",
      type: 'content'
    },
    {
      title: "人工智能",
      path: "/tech-cooperation",
      excerpt: "AI技术、机器学习、深度学习应用",
      type: 'content'
    },
    {
      title: "云计算",
      path: "/tech-cooperation",
      excerpt: "云服务、分布式系统、技术架构",
      type: 'content'
    },
    {
      title: "技术研发",
      path: "/",
      excerpt: "创新技术、前沿技术、技术解决方案",
      type: 'content'
    },
    {
      title: "项目赋能",
      path: "/",
      excerpt: "技术支持、项目优化、效率提升",
      type: 'content'
    },
    {
      title: "技术标杆",
      path: "/",
      excerpt: "行业领先、技术创新、标准制定",
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

    setSearchResults(results);
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
                        <div className="text-sm text-gray-500">{result.excerpt}</div>
                      </a>
                    ) : (
                      <Link to={result.path} className="flex flex-col items-start w-full">
                        <div className="font-medium">{result.title}</div>
                        <div className="text-sm text-gray-500">{result.excerpt}</div>
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
