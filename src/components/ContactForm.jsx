import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form validation logic
  const validateForm = () => {
    let formErrors = {};
    if (formData.fullName.length < 3) {
      formErrors.fullName = "Full name must be at least 3 characters";
    }
    if (formData.subject.length < 3) {
      formErrors.subject = "Subject must be at least 3 characters";
    }
    if (!emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (formData.body.length < 3) {
      formErrors.body = "Message body must be at least 3 characters";
    }
    return formErrors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Show errors if validation fails
    } else {
      console.log("Form submitted", formData);
      alert("Form submitted successfully!");
      // Clear form
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
      setErrors({});
    }
  };

  // Change handler for form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your full name"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter the subject"
        />
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
          Message
        </label>
        <textarea
          name="body"
          id="body"
          value={formData.body}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your message"
        />
        {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="bg-orange-500 text-white w-full py-2 rounded mt-4 font-semibold text-xl"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
