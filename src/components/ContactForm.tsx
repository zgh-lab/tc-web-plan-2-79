
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
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

  // Record the time when the form is first loaded
  React.useEffect(() => {
    setSubmitTime(Date.now());
  }, []);

  const onSubmit = async (data: FormValues) => {
    // Check if form was submitted too quickly (likely a bot)
    const timeSinceLoad = Date.now() - (submitTime || Date.now());
    const minSubmitTime = 3000; // 3 seconds
    
    if (timeSinceLoad < minSubmitTime) {
      console.log("Form submitted too quickly, likely a bot");
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll be in touch soon.",
      });
      return; // Silently reject but show success to the bot
    }
    
    // If honeypot field is filled, it's likely a bot
    if (data.honeypot) {
      console.log("Honeypot field filled, likely a bot");
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll be in touch soon.",
      });
      return; // Silently reject but show success to the bot
    }
    
    setIsSubmitting(true);
    try {
      console.log("Form submitted with data:", data);
      
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'WRLDS Team',
        reply_to: data.email
      };
      
      console.log('Sending email via EmailJS with params:', templateParams);
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log("Email sent successfully:", response);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll be in touch soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      if (error && typeof error === 'object' && 'text' in error) {
        console.error('Error details:', (error as any).text);
      }
      
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Get In Touch</h2>
          <p className="text-gray-600 text-center mb-8">
            Have questions about our technology or interested in collaborating? Contact us!
          </p>
          
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-6 bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        className="min-h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                
              <FormField 
                control={form.control} 
                name="honeypot" 
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormControl>
                      <Input 
                        {...field} 
                        tabIndex={-1} 
                        autoComplete="off"
                        className="hidden"
                      />
                    </FormControl>
                  </FormItem>
                )} 
              />
              
              <Button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
