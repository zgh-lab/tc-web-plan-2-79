
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface CaseStudy {
  image: string;
  title: string;
  description: string;
}

const CaseStudiesCarousel = () => {
  const sensorCaseStudies: CaseStudy[] = [
    {
      image: "/lovable-uploads/a1ef45a0-dde4-4b30-856f-8032dd58247e.png",
      title: "Firefighter Safety",
      description: "Advanced protective gear with gas, temperature, positioning, and motion sensors for safer emergency response.",
    },
    {
      image: "/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png",
      title: "Sports Performance",
      description: "Smart athletic wear with temperature and pressure sensors that track hydration, foot strike patterns, and performance metrics.",
    },
    {
      image: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      title: "Industrial Worker Protection",
      description: "Safety workwear with temperature, pressure, and vibration sensors to prevent injuries and monitor environmental hazards.",
    }
  ];

  return (
    <div className="rounded-xl overflow-hidden bg-white p-4 feature-item">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {sensorCaseStudies.map((study, index) => (
            <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
              <Card className="border border-gray-100 shadow-md">
                <CardContent className="p-0">
                  <div className="w-full h-full">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-lg">{study.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{study.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-2">
          <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-gray-100" />
          <CarouselNext className="relative static right-auto translate-y-0 hover:bg-gray-100" />
        </div>
      </Carousel>
      <div className="text-center mt-6 text-sm text-gray-600">
        <p className="font-medium">These examples showcase just a few ways our textile sensors can enhance safety and performance</p>
      </div>
    </div>
  );
};

export default CaseStudiesCarousel;
