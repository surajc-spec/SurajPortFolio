import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Copy } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('surajchougule378@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setToast({ type: 'error', message: 'All fields are required.' });
      setTimeout(() => setToast(null), 4000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setToast({ type: 'error', message: 'Please enter a valid email address.' });
      setTimeout(() => setToast(null), 4000);
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      }
    )
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setToast({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
        setTimeout(() => setToast(null), 4000);
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsSubmitting(false);
        setToast({ type: 'error', message: 'Failed to send message. Please try again.' });
        setTimeout(() => setToast(null), 4000);
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/10">
      {/* Background glow orbs */}
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] bottom-[-10%] right-[-10%]" />
      <div className="glow-orb glow-orb-blue w-[400px] h-[400px] top-[10%] left-[-15%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Let's build something together.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am currently open to full-stack, frontend, and backend internship roles. Send me a message and I will reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="p-8 rounded-3xl glass-card border-white/5 text-left h-full flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-white tracking-wide mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  Reach out directly via email, message me on LinkedIn, or check out my repositories on GitHub.
                </p>

                <div className="space-y-6">
                  {/* Location Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/5 flex items-center justify-center text-violet-400">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Location</h4>
                      <p className="text-sm text-slate-200 font-medium">Pune, Maharashtra, India</p>
                    </div>
                  </div>

                  {/* Email Info */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/30 border border-white/5 hover:border-violet-500/20 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/5 flex items-center justify-center text-blue-400">
                        <Mail size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-heading">Email</h4>
                        <p className="text-sm text-slate-200 font-medium font-mono">surajchougule378@gmail.com</p>
                      </div>
                    </div>
                    <button 
                      onClick={handleCopyEmail}
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-950 transition-colors duration-200"
                      title="Copy Email"
                    >
                      {copied ? <CheckCircle size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Channels Link Icons */}
              <div className="pt-8 border-t border-white/5 flex items-center space-x-4">
                <a
                  href="https://linkedin.com/in/suraj-chougule"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/surajc-spec"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <Github size={20} />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-card border border-white/5 text-left h-full"
            >
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-md shadow-emerald-500/5">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                    Thank you for reaching out. Your message has been received, and Suraj will respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-slate-500">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-500">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-slate-500">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      placeholder="Collaboration inquiry / Internship role"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-slate-500">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Hi Suraj, I'd love to chat about a vacancy..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                 <button
  type="submit"
  disabled={isSubmitting}
  className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-[#4F6EF7] hover:bg-[#5B7CFA] text-white font-semibold shadow-[0_4px_25px_rgba(79,110,247,0.25)] hover:shadow-[0_4px_35px_rgba(79,110,247,0.4)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
>
  {isSubmitting ? (
    <span>Sending Message...</span>
  ) : (
    <>
      <span>Send Message</span>
      <Send size={16} />
    </>
  )}
</button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl ${
              toast.type === 'success'
                ? 'bg-emerald-950/90 border-emerald-500/30 text-emerald-200'
                : 'bg-rose-950/90 border-rose-500/30 text-rose-200'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle size={18} className="text-emerald-400 shrink-0" />
            ) : (
              <div className="w-5 h-5 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-rose-400">!</span>
              </div>
            )}
            <p className="text-sm font-medium tracking-wide">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
