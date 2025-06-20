import { motion } from 'framer-motion';
import { Code, Server, Wrench, Terminal, Cpu, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhyWrlds = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            variants={childVariants}
          >
            技术方向
          </motion.h2>
          <motion.p 
            className="text-xl text-white max-w-3xl mx-auto"
            variants={childVariants}
          >
            我们为各项目提供基于GS语言的前后端框架、GS插件、公共服务器、工具链、图形渲染方案、前后端性能优化等解决方案。
          </motion.p>
        </motion.div>

        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 编译器组 */}
          <motion.div 
            variants={childVariants}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-300/30 transition-all cursor-pointer group"
            onClick={() => handleCardClick('/tech-cooperation/compiler')}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <Code className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              编译器组
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              负责GS编译器底层相关开发工作，包括底层功能开发、问题修复、性能优化，并持续完善相关模块。
            </p>
            <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
              了解更多
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* 服务器与工具链组 */}
          <motion.div 
            variants={childVariants}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-300/30 transition-all cursor-pointer group"
            onClick={() => handleCardClick('/tech-cooperation/server')}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <Server className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              服务器与工具链组
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              提供游戏项目组覆盖从开发、测试、部署、运维全生命周期的GS解决方案及全方位的技术支持。
            </p>
            <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
              了解更多
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* 引擎组 */}
          <motion.div 
            variants={childVariants}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-300/30 transition-all cursor-pointer group"
            onClick={() => handleCardClick('/tech-cooperation/engine')}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <Wrench className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              引擎组
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              为游戏项目组设计、开发和维护引擎的核心功能与工具链，提供高效、稳定且易用的技术解决方案。
            </p>
            <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
              了解更多
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* 技术AI组 */}
          <motion.div 
            variants={childVariants}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-300/30 transition-all cursor-pointer group"
            onClick={() => handleCardClick('/tech-cooperation/tech-ai')}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <Terminal className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              技术AI组
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。
            </p>
            <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
              了解更多
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* AIGC组 */}
          <motion.div 
            variants={childVariants}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-300/30 transition-all cursor-pointer group"
            onClick={() => handleCardClick('/tech-cooperation/aigc')}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <Cpu className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              AIGC组
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AIGC应用端口落地并赋能项目，探索落地前沿AIGC应用技术。
            </p>
            <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
              了解更多
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </motion.div>

        
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            variants={childVariants}
          >
            项目合作
          </motion.h2>
          <motion.p 
            className="text-xl text-white max-w-3xl mx-auto mb-12"
            variants={childVariants}
          >
            展示 G-bits 技术中心的游戏研发技术支持及创新成果
          </motion.p>
        </motion.div>

        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={childVariants}
            className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:shadow-lg hover:shadow-cyan-300/20 transition-all cursor-pointer"
            onClick={() => handleCardClick('/achievements')}
          >
            <div className="h-48 relative">
              <img 
                src="/lovable-uploads/dbe2f670-341e-45a6-852d-4b6a49e5381e.png" 
                alt="一念逍遥"
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white">一念逍遥</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">多次获得各大商店推荐，App Store游戏畅销榜最高至榜单第4名 累计总注册用户超2600万 由吉比特自研的《一念逍遥》是一款水墨国风放置仙侠手游，随时随地踏入仙途，轻松体验从无名小卒一步步成长，最终问鼎乾坤的过程。</p>
              
              <div className="flex items-center text-cyan-300 hover:text-cyan-300 transition-all group">
                查看更多项目
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={childVariants}
            className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:shadow-lg hover:shadow-cyan-300/20 transition-all cursor-pointer"
            onClick={() => handleCardClick('/achievements')}
          >
            <div className="h-48 relative">
              <img 
                src="/lovable-uploads/e7b5a53f-f4f9-45bc-828a-a909896c792a.png" 
                alt="问剑长生"
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white">问剑长生</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">《问剑长生》是雷霆全新3D御剑飞行修仙手游。在一方荒败的世界中，你将成为一位志在修行的证道者，捡到了寄居着星官真魂的至宝碎片，踏上了一条御剑寻道，叩问长生的修行之路……</p>
              
              <div className="flex items-center text-cyan-300 hover:text-cyan-300 transition-all group">
                查看更多项目
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;
