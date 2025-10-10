import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
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
        },
        "oHYZ_whnmJjrTqReE"
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-purple font-medium tracking-wide uppercase text-sm mb-4">- Get In Touch</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-navy mb-6">Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-card p-6 rounded-2xl shadow-card animate-slide-in-left">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center">
                  <Phone className="text-purple" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Phone</p>
                  <p className="text-lg font-semibold text-navy">+91 887 054 8048</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-card animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center">
                  <Mail className="text-purple" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                  <p className="text-lg font-semibold text-navy">sabarishkannanp2004@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-card animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center">
                  <MapPin className="text-purple" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Location</p>
                  <p className="text-lg font-semibold text-navy">India</p>
                </div>
              </div>
            </div>

            {/* Let's Work Together Card */}
            <div className="bg-gradient-to-br from-purple to-light-purple p-8 rounded-3xl text-white animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-lg opacity-90">
                I'm passionate about creating exceptional digital experiences. Whether you have a project in mind or just want to chat, I'd love to hear from you!
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-card p-8 rounded-3xl shadow-card animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Write something..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
