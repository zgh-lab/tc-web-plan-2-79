
import { Search } from "lucide-react";
import { Link } from 'react-router-dom';
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

const SearchDialog = ({ isScrolled, isMobile = false }: SearchDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={cn("p-2 rounded-full hover:bg-gray-200/20 transition-colors", isScrolled ? "text-gray-700" : "text-white")}>
          <Search size={isMobile ? 18 : 20} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Command>
          <CommandInput placeholder="搜索..." />
          <CommandList>
            <CommandEmpty>没有找到相关结果</CommandEmpty>
            <CommandGroup heading="建议">
              <CommandItem>
                <Link to="/tech-cooperation" className="flex items-center w-full">
                  技术合作
                </Link>
              </CommandItem>
              <CommandItem>
                <Link to="/knowledge-base" className="flex items-center w-full">
                  知识库
                </Link>
              </CommandItem>
              <CommandItem>
                <Link to="/achievements" className="flex items-center w-full">
                  成果展示
                </Link>
              </CommandItem>
              <CommandItem>
                <Link to="/tool-library" className="flex items-center w-full">
                  工具库
                </Link>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
