
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(100),
  message: z.string().min(10).max(1000)
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  darkMode?: boolean;
}

const ContactForm = ({ darkMode = false }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Partial<FormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "表单验证失败",
        description: "请检查您的输入并重试。",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "消息已发送",
        description: "感谢您的留言，我们会尽快回复您。",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "发送失败",
        description: "请稍后重试或通过其他方式联系我们。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="您的姓名"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className={cn(
            "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all",
            darkMode 
              ? "bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-blue-500" 
              : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-blue-600",
            errors.name ? "border-red-500" : ""
          )}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="您的邮箱"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className={cn(
            "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all",
            darkMode 
              ? "bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-blue-500" 
              : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-blue-600",
            errors.email ? "border-red-500" : ""
          )}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="subject"
          placeholder="主题"
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
          className={cn(
            "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all",
            darkMode 
              ? "bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-blue-500" 
              : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-blue-600",
            errors.subject ? "border-red-500" : ""
          )}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="您的消息"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          rows={5}
          className={cn(
            "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all",
            darkMode 
              ? "bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-blue-500" 
              : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-blue-600",
            errors.message ? "border-red-500" : ""
          )}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              正在发送...
            </>
          ) : (
            <>
              发送消息 <Send className="ml-2 w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
