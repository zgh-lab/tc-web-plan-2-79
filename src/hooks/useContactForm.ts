
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID = "service_i3h66xg";
const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Your message must be at least 10 characters." }),
  honeypot: z.string().max(0, { message: "This field should be empty." })
});

export type FormValues = z.infer<typeof formSchema>;

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitTime, setSubmitTime] = useState<number | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: ""
    },
  });

  const onSubmit = async (data: FormValues) => {
    const timeSinceLoad = Date.now() - (submitTime || Date.now());
    const minSubmitTime = 3000;
    
    if (timeSinceLoad < minSubmitTime) {
      console.log("Form submitted too quickly, likely a bot");
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll be in touch soon.",
      });
      return;
    }
    
    if (data.honeypot) {
      console.log("Honeypot field filled, likely a bot");
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll be in touch soon.",
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'WRLDS Team',
        reply_to: data.email
      };
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll be in touch soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit,
    setSubmitTime
  };
};

