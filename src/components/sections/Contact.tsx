import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, User } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { z } from "zod";
import "./Contact.css";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      // Validate form data
      const validated = contactSchema.parse(formData);
      setIsSubmitting(true);

      await emailjs.send(
        "service_jhwjfrf",
        "template_mqh015q",
        {
          from_name: validated.name,
          from_email: validated.email,
          message: validated.message,
        },
        "oHYZ_whnmJjrTqReE"
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-subtitle">Get In Touch</p>
          <h2 className="contact-title">Let's Create Something Amazing</h2>
          <p className="contact-description">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User className="form-icon" />
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  maxLength={100}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <Mail className="form-icon" />
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  maxLength={255}
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <Send className="form-icon" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  maxLength={1000}
                />
                {errors.message && <p className="form-error">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="form-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="button-icon" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon-wrapper">
                <Phone className="info-icon" />
              </div>
              <div className="info-content">
                <p className="info-label">Phone</p>
                <p className="info-value">+91 887 054 8048</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <Mail className="info-icon" />
              </div>
              <div className="info-content">
                <p className="info-label">Email</p>
                <p className="info-value">sabarishkannanp2004@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <MapPin className="info-icon" />
              </div>
              <div className="info-content">
                <p className="info-label">Location</p>
                <p className="info-value">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
