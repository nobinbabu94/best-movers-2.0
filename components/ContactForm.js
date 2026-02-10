"use client";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  //   const [recaptchaReady, setRecaptchaReady] = useState(false);

  //   useEffect(() => {
  //     let attempts = 0;
  //     const maxAttempts = 50; // Try for 5 seconds (50 * 100ms)

  //     const checkRecaptcha = () => {
  //       attempts++;

  //       if (typeof window !== 'undefined' && window.grecaptcha && window.grecaptcha.ready) {
  //         window.grecaptcha.ready(() => {
  //           console.log('✅ reCAPTCHA is ready!');
  //           setRecaptchaReady(true);
  //         });
  //       } else if (attempts < maxAttempts) {
  //         setTimeout(checkRecaptcha, 100);
  //       } else {
  //         console.error('❌ reCAPTCHA failed to load after 5 seconds');
  //         // Still allow form submission without reCAPTCHA as fallback
  //         setRecaptchaReady(true);
  //       }
  //     };

  //     // Start checking after a short delay to let the page load
  //     setTimeout(checkRecaptcha, 500);
  //   }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[6-9]\d{9}$/;
    return re.test(phone.replace(/\s+/g, ""));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      //   let recaptchaToken = null;

      //   // Try to get reCAPTCHA token if available
      //   if (typeof window !== 'undefined' && window.grecaptcha && window.grecaptcha.execute) {
      //     try {
      //       const siteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY;
      //       recaptchaToken = await window.grecaptcha.execute(siteKey, {
      //         action: 'contact_form'
      //       });
      //       console.log('✅ reCAPTCHA token obtained');
      //     } catch (recaptchaError) {
      //       console.warn('⚠️ reCAPTCHA token generation failed:', recaptchaError);
      //       // Continue without token
      //     }
      //   }

      // Prepare email data
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        title: formData.subject,
        message: formData.message,
      };

      // Add reCAPTCHA token if available
      //   if (recaptchaToken) {
      //     emailData['g-recaptcha-response'] = recaptchaToken;
      //   }

      // Send email via EmailJS
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (response?.status === 200) {
        const data = await response.json();
        setNotification(true);
        setIsLoading(false);
        setSuccessMessage(data);
        toast.success(
          "Message Sent Successfully, We will back to you as soon as possible",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          },
        );
        // throw new Error('Failed to submit the data. Please try again.')
      }
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("❌ Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-slate-700 mb-2"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 placeholder-gray-300 text-gray-800 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
            errors.name
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100"
          }`}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <span>⚠️</span> {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-slate-700 mb-2"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 placeholder-gray-300 text-gray-800  rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
            errors.email
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100"
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <span>⚠️</span> {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-slate-700 mb-2"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 placeholder-gray-300 text-gray-800 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
            errors.phone
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100"
          }`}
          placeholder="9876543210"
        />
        {errors.phone && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <span>⚠️</span> {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-slate-700 mb-2"
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 placeholder-gray-300 text-gray-800 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
            errors.subject
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100"
          }`}
          placeholder="What can we help you with?"
        />
        {errors.subject && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <span>⚠️</span> {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-slate-700 mb-2"
        >
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`w-full px-4 placeholder-gray-300 text-gray-800 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 resize-none ${
            errors.message
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100"
          }`}
          placeholder="Tell us about your moving requirements..."
        ></textarea>
        {errors.message && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <span>⚠️</span> {errors.message}
          </p>
        )}
        <p className="mt-2 text-xs text-slate-500">
          {formData.message.length} characters (minimum 10)
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <div>
            <p className="font-semibold text-emerald-800">
              Message sent successfully!
            </p>
            <p className="text-sm text-emerald-700 mt-1">
              {`              We'll get back to you within 24 hours.
`}{" "}
            </p>
          </div>
        </div>
      )}

      {/* {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
          <span className="text-2xl">❌</span>
          <div>
            <p className="font-semibold text-red-800">
              Oops! Something went wrong.
            </p>
            <p className="text-sm text-red-700 mt-1">
              Please try again or call us directly at +91 95627 63030.
            </p>
          </div>
        </div>
      )} */}

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 ${
          isSubmitting
            ? "bg-slate-400 cursor-not-allowed"
            : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transform hover:scale-[1.02] hover:shadow-xl"
        } text-white`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Send Message
            <span>📨</span>
          </span>
        )}
      </button>

      {/* {recaptchaReady && (
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Protected by reCAPTCHA</span>
        </div>
      )} */}

      <p className="text-center text-sm text-slate-600">
        By submitting this form, you agree to our privacy policy and terms of
        service.
      </p>
    </div>
  );
}
