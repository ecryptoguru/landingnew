'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Lock, Cpu, Headphones } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center">
        <motion.h1
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          FusionChat by FusionwaveAI
        </motion.h1>
        <div className="h-8"></div>
        <p className="max-w-2xl text-lg mb-8 text-gray-600">
          A cutting-edge, AI-powered customer support platform that unifies and streamlines business communication across multiple channels.
        </p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl shadow">
            Get Started
          </Button>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose FusionChat?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="rounded-2xl shadow hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg mb-2">Unified Communication</h3>
                <p className="text-gray-600">Seamlessly integrate chat, voice, and AI-powered conversations in one platform.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <Lock className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-lg mb-2">Enterprise-Grade Security</h3>
                <p className="text-gray-600">Robust data protection and compliance standards for businesses of all sizes.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <Cpu className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="font-semibold text-lg mb-2">Scalable Architecture</h3>
                <p className="text-gray-600">Multi-tenant design and developer extensibility to grow with your needs.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <Headphones className="w-12 h-12 mx-auto mb-4 text-pink-600" />
                <h3 className="font-semibold text-lg mb-2">Exceptional Support</h3>
                <p className="text-gray-600">Deliver outstanding customer service experiences across every touchpoint.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Experience FusionChat in Action</h2>
          <p className="text-gray-600 mb-8">See how conversational AI, voice integration, and a robust architecture combine to redefine customer support.</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-2xl shadow">
            Launch Interactive Demo
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Customer Support?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">Join businesses worldwide using FusionChat to deliver seamless, intelligent customer experiences.</p>
        
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} FusionwaveAI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
