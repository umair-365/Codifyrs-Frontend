import React from 'react'
import ContactSection from '@/components/ContactSection'
import Navigation from "@/components/Navigation";

 const Contact = () => {
  return (
 
     <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
    </div>
  )
}
export default Contact