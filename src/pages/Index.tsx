import React from 'react';
import { Check, Mail, Globe, Key, Code, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const timelineSteps = [
    {
      id: 1,
      title: "The Problem: You Need to Send Emails",
      description: "Your application needs to send emails - welcome messages, notifications, password resets, or newsletters. But how do you make this happen reliably?",
      icon: Mail,
      color: "bg-red-100 text-red-600",
      details: [
        "Manual email sending doesn't scale",
        "Built-in solutions are often unreliable",
        "You need a professional email service"
      ]
    },
    {
      id: 2,
      title: "Step 1: Sign Up for Resend.com",
      description: "Resend is a modern email API that makes sending emails simple and reliable. It's designed for developers but easy enough for everyone.",
      icon: Globe,
      color: "bg-blue-100 text-blue-600",
      details: [
        "Visit resend.com and create an account",
        "Choose a plan (they have a generous free tier)",
        "Verify your email address to get started"
      ]
    },
    {
      id: 3,
      title: "Step 2: Configure DNS Settings",
      description: "To send emails from your domain, you need to prove you own it. This involves adding special DNS records.",
      icon: Settings,
      color: "bg-yellow-100 text-yellow-600",
      details: [
        "Add your domain in the Resend dashboard",
        "Copy the provided DNS records",
        "Add these records to your domain provider",
        "Wait for verification (usually takes a few minutes)"
      ]
    },
    {
      id: 4,
      title: "Step 3: Create Your API Key",
      description: "An API key is like a password that allows your application to send emails through Resend on your behalf.",
      icon: Key,
      color: "bg-green-100 text-green-600",
      details: [
        "Go to the API Keys section in Resend",
        "Click 'Create API Key'",
        "Give it a descriptive name",
        "Copy the key immediately (you won't see it again!)"
      ]
    },
    {
      id: 5,
      title: "Step 4: Add API Key to Supabase",
      description: "Store your Resend API key securely in Supabase so your functions can use it without exposing it in your code.",
      icon: Code,
      color: "bg-purple-100 text-purple-600",
      details: [
        "Open your Supabase project dashboard",
        "Go to Settings → Environment Variables",
        "Add a new variable named 'RESEND_API_KEY'",
        "Paste your Resend API key as the value"
      ]
    },
    {
      id: 6,
      title: "Step 5: Create the Email Function",
      description: "Now we'll create a Supabase Edge Function that uses your Resend API key to send emails from your application.",
      icon: Check,
      color: "bg-emerald-100 text-emerald-600",
      details: [
        "Create a new Edge Function in Supabase",
        "Import the Resend library",
        "Write code to send emails using your API key",
        "Test the function to make sure it works"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Send Emails Like a Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete guide to setting up professional email sending with Supabase and Resend.com. 
            No technical experience required!
          </p>
          <Badge variant="secondary" className="mt-4">
            ⏱️ Takes about 15 minutes to complete
          </Badge>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {timelineSteps.map((step, index) => (
              <div key={step.id} className="relative flex items-start mb-12">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center relative z-10 shadow-lg`}>
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                        <Badge variant="outline">Step {step.id}</Badge>
                      </div>
                      <CardDescription className="text-lg">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
