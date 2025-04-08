import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Check } from "lucide-react";
const processes = [{
  id: 1,
  title: "Textile Sensor Design",
  description: "We begin by designing custom textile sensors specifically for your industry and use case, selecting appropriate conductive materials and sensor types.",
  steps: ["Industry-specific requirement analysis", "Sensor type and material selection", "Prototype sensor development", "Initial testing and calibration"]
}, {
  id: 2,
  title: "Garment Integration",
  description: "Our engineering team seamlessly integrates sensors into clothing and footwear while maintaining comfort, durability, and washability.",
  steps: ["Ergonomic placement optimization", "Non-intrusive integration techniques", "Durability and washability testing", "Comfort and user experience validation"]
}, {
  id: 3,
  title: "AI & Data Analytics",
  description: "We develop specialized algorithms that transform textile sensor data into actionable insights unique to your industry requirements.",
  steps: ["Industry-specific algorithm development", "ML model training with domain data", "Real-time analytics implementation", "Insight delivery optimization"]
}, {
  id: 4,
  title: "Production & Certification",
  description: "We handle manufacturing, quality control, and ensure all textile sensor products meet relevant industry standards and certifications.",
  steps: ["Textile manufacturing partner selection", "Quality assurance processes", "Industry-specific certification procurement", "Initial production supervision"]
}, {
  id: 5,
  title: "Deployment & Support",
  description: "We provide comprehensive training, implementation assistance, and ongoing support to ensure successful adoption and continuous improvement.",
  steps: ["User training and onboarding", "Data interpretation guidance", "Performance monitoring", "Continuous improvement iterations"]
}];
const Process = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target as HTMLElement).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let closestSection = null;
      let closestDistance = Infinity;
      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });
      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return;
};
export default Process;