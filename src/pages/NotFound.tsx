
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-black/70 to-black/60 backdrop-blur-sm">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl mb-4" style={{ color: '#85BDFE' }}>页面不存在</p>
          <a href="/" className="hover:opacity-80 underline" style={{ color: '#85BDFE' }}>
            返回首页
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
