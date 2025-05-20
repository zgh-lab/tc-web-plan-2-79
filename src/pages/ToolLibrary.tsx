
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Package } from 'lucide-react';

const ToolLibrary = () => {
  return (
    <PageLayout>
      <SEO 
        title="工具库 - G-bits 技术中心" 
        description="G-bits技术中心提供的游戏开发工具库，包括各类开发工具、插件和资源，帮助开发者提高开发效率。"
        keywords={['工具库', '开发工具', '游戏开发', 'G-bits', '插件']}
      />
      <main className="container mx-auto px-4 py-12 min-h-[80vh]">
        <div className="flex flex-col items-center justify-center space-y-6 mb-12 text-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <Package className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold">工具库</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            这里将展示 G-bits 技术中心开发的各类游戏开发工具、插件和资源，目前页面正在建设中。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">即将上线</h3>
            <p className="text-gray-600">工具库内容正在准备中，敬请期待...</p>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default ToolLibrary;
