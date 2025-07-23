import React from 'react'
import Navigation from "@/components/Navigation";
import HiringForm from '@/components/HiringForm';
import Footer from "@/components/Footer";

const Career = () => {
  return (
    
      <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <HiringForm />
        <Footer/>
      </div>
    </div>
  )
}

export default Career 