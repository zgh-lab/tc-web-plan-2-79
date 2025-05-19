import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, BarChart, AlertTriangle, Clock4, Rocket, Zap, Sparkles, ArrowRight, Award, Target, Shield, ChartBar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);
  return <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>;
};

const WhyWrlds = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return <section id="why-wrlds" className="relative py-16 md:py-24 bg-black overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            为什么选择 G-bits 技术中心?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 text-lg max-w-3xl mx-auto">
            我们凭借简洁高效的解决方案，确保您在复杂的技术环境中取得成功
          </motion.p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:bg-white/15 transition-all min-h-[220px] flex flex-col justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
              <BarChart className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={3.8} decimals={1} suffix=" 亿" /> 美元
            </h3>
            <p className="text-gray-300">预计到2030年市场将达到的价值，智能游戏解决方案具有巨大增长潜力</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:bg-white/15 transition-all min-h-[220px] flex flex-col justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={60} suffix="%" /> 
            </h3>
            <p className="text-gray-300">
              的游戏项目因缺乏专业技术与协作而陷入概念验证阶段
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:bg-white/15 transition-all min-h-[220px] flex flex-col justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
              <Clock4 className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={80} suffix="%" />
            </h3>
            <p className="text-gray-300">
              过去四年游戏产品上市时间增加，导致成本高昂的延迟
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              G-bits 技术中心能为您做什么
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              我们将您的想法转化为市场就绪的解决方案，为您的业务带来切实的收益
            </p>
          </motion.div>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4">
                  <BarChart className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">创新收益产品</h4>
                  <p className="text-gray-300">打造高利润、技术驱动的产品，创造全新收入来源。</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">吸引人的创新</h4>
                  <p className="text-gray-300">通过让您脱颖而出的技术，打动理想客户。</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">舒适区开发</h4>
                  <p className="text-gray-300">我们开发前沿技术，让您始终处于舒适区。</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4">
                  <Rocket className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">品牌建设飞跃</h4>
                  <p className="text-gray-300">我们助力软硬件突破，定义您品牌的未来。</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-10">
            <Link 
              to="/development-process" 
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all group"
            >
              了解更多关于我们的开发流程
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};

export default WhyWrlds;
