
import { Form } from "@/components/ui/form";
import { useEffect } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactFormFields } from "./contact/ContactFormFields";
import { SubmitButton } from "./contact/SubmitButton";

export const ContactForm = () => {
  const { form, isSubmitting, onSubmit, setSubmitTime } = useContactForm();

  useEffect(() => {
    setSubmitTime(Date.now());
  }, [setSubmitTime]);

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
              <ContactFormFields form={form} />
              <SubmitButton isSubmitting={isSubmitting} />
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

