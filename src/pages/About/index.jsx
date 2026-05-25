import ContentLayout from "../../components/ContentLayout";
import TimelineSection from "../../components/Timeline";
import { Timeline } from "flowbite-react";
import { HiBriefcase, HiAcademicCap, HiPuzzle } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import {
  educationExperience,
  trainingExperience,
  workExperience,
} from "../../response/about";
import { useEffect, useState } from "react";

const About = () => {

  return (
    <ContentLayout>
      <div className="flex flex-col gap-3 ">
        <div className="flex gap-1 text-[13px] items-center justify-center border border-gray-200 dark:border-none rounded-full bg-gray-50 dark:bg-cyan-700 p-2 w-[148px]">
          <FaEye className="w-4 h-4" />
          <p className="font-bold">0</p>
          <p className="font-normal">Times Seen</p>
        </div>
        <section className="flex flex-col gap-4 py-4">
          <div className="flex flex-col items-center text-center gap-2 mb-4">
            <img
              src="https://cdn.discordapp.com/attachments/1372849557955809352/1508334637431259256/asdasd.png?ex=6a152999&is=6a13d819&hm=25e11c956aab5bc40a01e95d352c6f42124606775e547da4a60d654614529ab2&"
              alt="foto-profil"
              className="rounded-full w-40 border-4 border-gray-100 "
              loading="lazy"
            />
            <div className="flex items-center gap-2">
              <h4 className="lg:text-3xl text-2xl font-bold">
                Dedy Kristianto Lumbantobing
              </h4>
              <img
                src="https://res.cloudinary.com/daxz4cuqx/image/upload/v1711888855/assets/icons/checklist_gwfcub.png"
                alt="verified"
                className="w-6 h-6"
              />
            </div>
            <p className="lg:text-sm text-xs font-medium">
              IT Support | Frontend Engineer | Data Analyst
            </p>
          </div>
          <h2 className="font-bold lg:text-3xl text-2xl">About</h2>
          <p className="text-justify lg:text-sm text-[13px] antialiased leading-relaxed tracking-wider">
          Graduated from STIKOM Tunas Bangsa with a major in
          S1 Informatics Engineering in 2020-2024. Has experience in
          web development, IT support, and digital project management through
          freelance work, academic activities, and internship programs.
          Experienced in developing interactive websites using HTML, CSS,
          JavaScript, React.js, and backend integration with REST API services.
          Also has experience in data processing and visualization during an
          internship at PT Telkom Indonesia as a Data Analyst. <br /> I
          have a strong understanding of troubleshooting hardware and software,
          system maintenance, and web-based application development. Able to
          work collaboratively in teams, adapt quickly to new technologies,
          and apply problem-solving skills to support effective and efficient
          technology solutions.
        </p>
        </section>

        <section className="flex flex-col gap-4 pt-4 ">
          <h2 className="font-bold lg:text-3xl text-2xl">Experience</h2>
          <div className="ml-3">
            <Timeline>
              {workExperience.map((work, idx) => (
                <TimelineSection
                  key={idx}
                  iconTimeline={HiBriefcase}
                  titleText={work.institution}
                  subTitleText={work.position}
                  dateText={work.date}
                  descriptionText={work.description}
                  url={work.url_institution}
                />
              ))}
            </Timeline>
          </div>
        </section>

        <section className="flex flex-col gap-4 pt-4 ">
          <h2 className="font-bold lg:text-3xl text-2xl">
            Training & Organization
          </h2>
          <div className="ml-3">
            <Timeline>
              {trainingExperience.map((training, idx) => (
                <TimelineSection
                  key={idx}
                  iconTimeline={HiPuzzle}
                  titleText={training.institution}
                  subTitleText={training.position}
                  dateText={training.date}
                  descriptionText={training.description}
                  url={training.url_institution}
                />
              ))}
            </Timeline>
          </div>
        </section>

        <section className="flex flex-col gap-4 pt-4">
          <h2 className="font-bold lg:text-3xl text-2xl">Education</h2>
          <div className="ml-3">
            <Timeline>
              {educationExperience.map((education, idx) => (
                <TimelineSection
                  key={idx}
                  iconTimeline={HiAcademicCap}
                  titleText={education.institution}
                  subTitleText={education.position}
                  dateText={education.date}
                  descriptionText={education.description}
                  url={education.url_institution}
                />
              ))}
            </Timeline>
          </div>
        </section>
      </div>
    </ContentLayout>
  );
};

export default About;
