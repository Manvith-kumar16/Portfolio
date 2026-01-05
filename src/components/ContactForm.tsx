"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import { ChevronRight, Loader2 } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          fullName,
          email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "Message Sent ✅",
        description: "Thanks for reaching out! I'll get back to you soon.",
        className: cn("top-0 mx-auto fixed md:top-4 md:right-4"),
      });

      setFullName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Error ❌",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        className: cn("top-0 mx-auto fixed md:top-4 md:right-4"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="min-w-7xl mx-auto sm:mt-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="fullname">Full name</Label>
          <Input
            id="fullname"
            placeholder="Your Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          placeholder="Write your message here…"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button disabled={loading} className="w-full" type="submit">
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            Send Message <ChevronRight className="ml-2 h-4 w-4" />
          </div>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
