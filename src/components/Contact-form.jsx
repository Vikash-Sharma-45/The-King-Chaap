import { useState } from "react"
import { Send, Loader2 } from "lucide-react"


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const data = new FormData()
      data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY)
      data.append("name", formData.name)
      data.append("email", formData.email)
      data.append("subject", formData.subject)
      data.append("message", formData.message)

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })

      const result = await res.json()

      if (result.success) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData((d) => ({ ...d, name: e.target.value }))
            }
            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData((d) => ({ ...d, email: e.target.value }))
            }
            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-900">
          Subject
        </label>
        <input
          type="text"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData((d) => ({ ...d, subject: e.target.value }))
          }
          className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm"
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-900">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData((d) => ({ ...d, message: e.target.value }))
          }
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white disabled:opacity-70"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="rounded-lg bg-green-50 p-3 text-sm font-medium text-green-700">
          Thank you! Your message has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-700">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  )
}
console.log("KEY:", import.meta.env.VITE_WEB3FORMS_KEY)
