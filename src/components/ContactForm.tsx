import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Mail, User, MessageSquare, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      console.log('Form submitted:', data);

      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
        variant: "default"
      });

      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="bg-blue-500 relative py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Contact Us Today
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-600 rounded-xl shadow-xl p-8 border border-blue-400">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-blue-200" />
                        <FormControl>
                          <Input placeholder="Your name" className="pl-10 bg-blue-700 border-blue-400 text-white placeholder:text-blue-200" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage className="text-blue-100" />
                    </FormItem>} />
                
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-blue-200" />
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" className="pl-10 bg-blue-700 border-blue-400 text-white placeholder:text-blue-200" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage className="text-blue-100" />
                    </FormItem>} />
                
                <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-blue-200" />
                        <FormControl>
                          <Textarea placeholder="Tell us about your project or inquiry..." className="min-h-[120px] pl-10 resize-none bg-blue-700 border-blue-400 text-white placeholder:text-blue-200" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage className="text-blue-100" />
                    </FormItem>} />
                
                <button type="submit" disabled={isSubmitting} className="w-full bg-white hover:bg-blue-50 text-blue-500 py-3 px-6 rounded-md transition-colors flex items-center justify-center disabled:opacity-70">
                  {isSubmitting ? "Sending..." : <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>}
                </button>
              </form>
            </Form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-blue-600 p-6 rounded-lg shadow-md border border-blue-400">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
              <p className="text-white mb-2">For general inquiries:</p>
              <a href="mailto:info@wrlds.com" className="text-blue-200 hover:underline">hello@wrlds.com</a>
              <p className="text-white mt-2 mb-2">
            </p>
              
            </div>
            
            
          </div>
        </div>
      </div>
    </section>;
};

export default ContactForm;
