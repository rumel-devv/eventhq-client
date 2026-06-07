import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";

export default async function HomePage() {

const stats ={
  totalAttendees: 30,
  totalEvents:4,
  totalOrgs:2
}

  return (
    <div>
      <Hero/>
      <WhyChoose/>
       <Statistics stats={stats}/>
       <Testimonials/>  
    </div>
  );
}

