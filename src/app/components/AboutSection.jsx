"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Front-End",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
      </ul>
    ),
  },
  {
    title: "Back-End",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>C#</li>
        <li>ASP.NET</li>
        <li>Microsoft SQL Server</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Titre Professionnel FullStack - DWWM</li>
        <li>Licence AES - Toulouse</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("frontend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-m-10" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about me"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              {" "}
              Front-End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Back-End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
