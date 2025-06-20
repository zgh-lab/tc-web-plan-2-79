
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Terminal, Cpu, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechCooperation = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
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
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="技术合作 - G-bits 技术中心" 
        description="G-bits 技术中心提供全方位的技术合作服务，涵盖编译器、服务器、引擎、AI等多个技术领域。"
        keywords={['技术合作', '编译器', '服务器', '游戏引擎', 'AI技术']}
      />

      <main className="container mx-auto px-4 py-12 pt-28 min-h-[80vh] relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* 头部 */}
          <motion.div variants={childVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
              技术方向
            </h1>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              我们为各项目提供基于GS语言的前后端框架、GS插件、公共服务器、工具链、图形渲染方案、前后端性能优化等解决方案。
            </p>
          </motion.div>

          {/* 技术组列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 服务器与工具链组 */}
            <motion.div variants={childVariants}>
              <Card 
                className="bg-gray-900/50 border border-orange-500/30 backdrop-blur-sm cursor-pointer hover:border-orange-400/50 transition-all duration-300 h-full group"
                onClick={() => handleCardClick('/tech-cooperation/server')}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center border border-orange-500/20">
                      <Server className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="w-3 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      服务器与工具链组
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    提供游戏项目组覆盖从开发、测试、部署、运维全生命周期的GS解决方案及全方位的技术支持。
                  </p>

                  {/* 联系信息 */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                    <div className="flex items-center">
                      <span className="text-gray-300 mr-3">联系人:</span>
                      <span className="text-orange-400 font-semibold">吴荣钦</span>
                    </div>
                  </div>

                  {/* 核心能力 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">核心能力</h3>
                    <div className="space-y-3">
                      {[
                        { title: "开发工具", hasLink: true },
                        { title: "游戏框架", hasLink: true },
                        { title: "DevOps", hasLink: false },
                        { title: "技术支持", hasLink: false }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          {item.hasLink ? (
                            <ChevronRight className="w-4 h-4 text-orange-400 mr-2 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 mr-2 shrink-0" />
                          )}
                          <span className={item.hasLink ? 'text-orange-400' : 'text-gray-400'}>
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 核心技术 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">核心技术</h3>
                    <div className="flex flex-wrap gap-2">
                      {['GS开发生态', '服务器架构设计', '客户端引擎插件', 'DevOps'].map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline"
                          className="bg-orange-500/10 border-gray-400 text-white hover:bg-orange-500/20 transition-colors px-3 py-1 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                    了解更多
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 引擎组 */}
            <motion.div variants={childVariants}>
              <Card 
                className="bg-gray-900/50 border border-orange-500/30 backdrop-blur-sm cursor-pointer hover:border-orange-400/50 transition-all duration-300 h-full group"
                onClick={() => handleCardClick('/tech-cooperation/engine')}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center border border-orange-500/20">
                      <Wrench className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="w-3 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      引擎组
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    为游戏项目组设计、开发和维护引擎的核心功能与工具链，提供高效、稳定且易用的技术解决方案。
                  </p>

                  {/* 联系信息 */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                    <div className="flex items-center">
                      <span className="text-gray-300 mr-3">联系人:</span>
                      <span className="text-orange-400 font-semibold">张兴捷</span>
                    </div>
                  </div>

                  {/* 核心能力 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">核心能力</h3>
                    <div className="space-y-3">
                      {[
                        { title: "渲染管线", hasLink: true },
                        { title: "性能优化", hasLink: true },
                        { title: "开发编辑器工具", hasLink: false },
                        { title: "通用游戏开发模块", hasLink: false }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          {item.hasLink ? (
                            <ChevronRight className="w-4 h-4 text-orange-400 mr-2 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 mr-2 shrink-0" />
                          )}
                          <span className={item.hasLink ? 'text-orange-400' : 'text-gray-400'}>
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 核心技术 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">核心技术</h3>
                    <div className="flex flex-wrap gap-2">
                      {['图形渲染', '物理模拟', '动画系统', '场景管理', '资源优化'].map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline"
                          className="bg-orange-500/10 border-gray-400 text-white hover:bg-orange-500/20 transition-colors px-3 py-1 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                    了解更多
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 技术AI组 */}
            <motion.div variants={childVariants}>
              <Card 
                className="bg-gray-900/50 border border-orange-500/30 backdrop-blur-sm cursor-pointer hover:border-orange-400/50 transition-all duration-300 h-full group"
                onClick={() => handleCardClick('/tech-cooperation/tech-ai')}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center border border-orange-500/20">
                      <Terminal className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="w-3 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      技术AI组
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。
                  </p>

                  {/* 联系信息 */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                    <div className="flex items-center">
                      <span className="text-gray-300 mr-3">联系人:</span>
                      <span className="text-orange-400 font-semibold">梁钰彬 张文豪</span>
                    </div>
                  </div>

                  {/* 核心能力 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">核心能力</h3>
                    <div className="space-y-3">
                      {[
                        { title: "AI流程研发与场景化落地", hasLink: true },
                        { title: "AI工具与平台开发", hasLink: true }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          {item.hasLink ? (
                            <ChevronRight className="w-4 h-4 text-orange-400 mr-2 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 mr-2 shrink-0" />
                          )}
                          <span className={item.hasLink ? 'text-orange-400' : 'text-gray-400'}>
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 核心技术 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">核心技术</h3>
                    <div className="flex flex-wrap gap-2">
                      {['机器学习', '数据分析', '行为决策树', '自然语言处理', '计算机视觉'].map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline"
                          className="bg-orange-500/10 border-gray-400 text-white hover:bg-orange-500/20 transition-colors px-3 py-1 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                    了解更多
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AIGC组 */}
            <motion.div variants={childVariants}>
              <Card 
                className="bg-gray-900/50 border border-orange-500/30 backdrop-blur-sm cursor-pointer hover:border-orange-400/50 transition-all duration-300 h-full group"
                onClick={() => handleCardClick('/tech-cooperation/aigc')}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center border border-orange-500/20">
                      <Cpu className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="w-3 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      AIGC组
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    AIGC应用端口落地并赋能项目，探索落地前沿AIGC应用技术。
                  </p>

                  {/* 联系信息 */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                    <div className="flex items-center">
                      <span className="text-gray-300 mr-3">联系人:</span>
                      <span className="text-orange-400 font-semibold">李智宇</span>
                    </div>
                  </div>

                  {/* 核心能力 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">核心能力</h3>
                    <div className="space-y-3">
                      {[
                        { title: "2D AIGC-SD/FLUX/视频", hasLink: true },
                        { title: "2D AIGC-ComfyUI工作流定制", hasLink: true },
                        { title: "3D AIGC-方案整合和落地项目", hasLink: false },
                        { title: "AIGC智能NPC/AIGC智能体应用", hasLink: false }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          {item.hasLink ? (
                            <ChevronRight className="w-4 h-4 text-orange-400 mr-2 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 mr-2 shrink-0" />
                          )}
                          <span className={item.hasLink ? 'text-orange-400' : 'text-gray-400'}>
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 核心技术 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">核心技术</h3>
                    <div className="flex flex-wrap gap-2">
                      {['2D AIGC', '3D AIGC', 'AIGC智能体', 'AIGC教学推广'].map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline"
                          className="bg-orange-500/10 border-gray-400 text-white hover:bg-orange-500/20 transition-colors px-3 py-1 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                    了解更多
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 编译器组 - 移到最后 */}
            <motion.div variants={childVariants}>
              <Card 
                className="bg-gray-900/50 border border-orange-500/30 backdrop-blur-sm cursor-pointer hover:border-orange-400/50 transition-all duration-300 h-full group"
                onClick={() => handleCardClick('/tech-cooperation/compiler')}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center border border-orange-500/20">
                      <Code className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="w-3 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      编译器组
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    负责GS编译器底层相关开发工作，包括底层功能开发、问题修复、性能优化，并持续完善相关模块。
                  </p>

                  {/* 联系信息 */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                    <div className="flex items-center">
                      <span className="text-gray-300 mr-3">联系人:</span>
                      <span className="text-orange-400 font-semibold">楚耀翔 徐鑫荣</span>
                    </div>
                  </div>

                  {/* 核心能力 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">核心能力</h3>
                    <div className="space-y-3">
                      {[
                        { title: "GS编译器底层功能开发", hasLink: true },
                        { title: "GS编译器底层性能优化", hasLink: true },
                        { title: "为上层工具提供底层功能支持", hasLink: false },
                        { title: "调整GS语言特性和功能", hasLink: false }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          {item.hasLink ? (
                            <ChevronRight className="w-4 h-4 text-orange-400 mr-2 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 mr-2 shrink-0" />
                          )}
                          <span className={item.hasLink ? 'text-orange-400' : 'text-gray-400'}>
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 核心技术 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">核心技术</h3>
                    <div className="flex flex-wrap gap-2">
                      {['词法分析', '语法分析', '中间代码生成', '代码优化', '目标代码生成'].map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline"
                          className="bg-orange-500/10 border-gray-400 text-white hover:bg-orange-500/20 transition-colors px-3 py-1 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                    了解更多
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </PageLayout>
  );
};

export default TechCooperation;
