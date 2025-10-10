import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_jhwjfrf",
        "template_mqh015q",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Sabarish Kannan P",
        },
        "oHYZ_whnmJjrTqReE"
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium mb-2">LET'S CONNECT</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm currently available to take on new projects, so feel free to send me a message about anything you'd like to discuss.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="bg-mint rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Call</h3>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                    (+91) 987 654 3210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Email</h3>
                  <a href="mailto:sabarish@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    sabarish@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Location</h3>
                  <p className="text-muted-foreground">Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="relative h-64 rounded-2xl bg-gradient-to-br from-purple to-light-purple overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-2">
                  <h3 className="text-3xl font-bold">Let's Work Together</h3>
                  <p className="text-white/90">Creating amazing digital experiences</p>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full" />
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-navy">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 transition-all focus:shadow-card"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-navy">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 transition-all focus:shadow-card"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-navy">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Write something..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="transition-all focus:shadow-card resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? "Sending..." : "Submit Now"}
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
