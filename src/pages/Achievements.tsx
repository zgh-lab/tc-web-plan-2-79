
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <PageLayout>
      <SEO 
        title="成果展示 - G-bits 技术中心" 
        description="G-bits技术中心的成果展示，包括技术创新、项目成果和研发成果。"
        keywords={['成果展示', '技术创新', '项目成果', '研发成果']}
      />

      <main className="container mx-auto px-4 py-12 min-h-[80vh]">
        <div className="flex flex-col items-center justify-center space-y-6 mb-12 text-center">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center">
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold">成果展示</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            这里将展示 G-bits 技术中心的各项成果和技术创新，目前页面正在建设中。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">即将上线</h3>
            <p className="text-gray-600">成果展示内容正在准备中，敬请期待...</p>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Achievements;
