import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/project-section";
import Sidebar from "@/components/sidebar";
import ExperiencesCard from "@/components/experiences";

import {
  aboutYou,
  educations,
  workExperiences,
} from "@/lib/data";
import Hero from "@/components/hero";
import ProjectsSection from "@/components/project-section";
import Contact from "@/components/contact";


export default function Main() {
  return (
    <main className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <Home />
    </main>
  )
}

function Home() {
  return (
    <div className="md:max-w-3xl mx-auto md:mt-8 ">

      {/* Navigations */}
      <Navbar />

      <div className="flex flex-col md:flex-row my-10 mx-10 md:mx-0 space-x-0 md:space-x-10 space-y-10 md:space-y-0 ">

        {/* Sidebar */}
        <Sidebar />

        <div className="min-w-full !mt-3 md:min-w-[auto] space-y-10 md:!mt-0">

          {/* Hero */}
          <section id="home" key="home" className="space-y-5">
            <Hero />
          </section>

          {/* Work */}
          <section id="work" key="work">
            <ExperiencesCard experiences={workExperiences} type="Work" />
          </section>

          {/* Education */}
          <section id="education" key="education">
            <ExperiencesCard experiences={educations} type="Education" />
          </section>

          {/* Projects */}
          <section id="projects" key="projects">
            <ProjectsSection/>
          </section>

          {/* Contact */}
          <section id="contact" key="contact">
            <Contact/>
          </section>

        </div>
      </div>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
