import CardComponent from "../../components/Card";
import ContentLayout from "../../components/ContentLayout";
import TabLayout from "../../components/TabLayout";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Tabs } from "flowbite-react";
import { webProjects, apiProjects, photoVideoProjects } from "../../response/projects";
import { HiLink, HiCode } from "react-icons/hi";
import { useRef } from "react";

const Projects = () => {
  const videoRefs = useRef([]);
  return (
    <>
      <ContentLayout>
        <div className="flex flex-col gap-3">
          <section className="flex flex-col gap-2 py-4">
            <h2 className="font-bold text-3xl">Portofolio</h2>
          </section>
          <TabLayout>
            <Tabs.Item active title="Web">
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-y-8  gap-x-3 text-base font-medium">
                {webProjects.map((project, id) => (
                  <>
                    <CardComponent
                      key={id}
                      photoCard={project.image}
                      titleCard={project.title}
                      descriptionCard={project.description}
                      linkRepository={
                        <a href={project.repo} target="_blank">
                          <HiCode className="w-7 h-7 p-1 bg-slate-200 text-slate-800 rounded-lg" />
                        </a>
                      }
                      linkDeployment={
                        project.link ? (
                          <a href={project.link} target="_blank">
                            <HiLink className="w-7 h-7 p-1 bg-slate-200 text-slate-800 rounded-lg cursor-pointer" />
                          </a>
                        ) : (
                          ""
                        )
                      }
                      stacks={project.stacks.map((stack, idx) => (
                        <img
                          key={idx}
                          src={stack}
                          className="w-8 bg-slate-200 p-1 rounded-lg"
                        />
                      ))}
                    />
                  </>
                ))}
              </div>
            </Tabs.Item>

            <Tabs.Item title="API">
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-y-8  gap-x-3 text-base font-medium">
                {apiProjects.map((project) => (
                  <>
                    <CardComponent
                      // photoCard={project.image}
                      titleCard={project.title}
                      descriptionCard={project.description}
                      linkRepository={
                        <a href={project.repo} target="_blank">
                          <HiCode className="w-7 h-7 p-1 bg-slate-200 text-slate-800 rounded-lg" />
                        </a>
                      }
                      stacks={project.stacks.map((stack, idx) => (
                        <img
                          key={idx}
                          src={stack}
                          alt={stack}
                          className="w-8 bg-slate-100 p-1 rounded-lg"
                        />
                      ))}
                    />
                  </>
                ))}
              </div>
            </Tabs.Item>

            <Tabs.Item title="Photo & Video Editing">
  <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-y-8 gap-x-3 text-base font-medium">
    {photoVideoProjects.map((project, id) => (
      <div
        key={id}
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden border border-slate-200 dark:border-slate-800"
      >
        {/* IMAGE */}
        {project.type === "image" && (
          <Zoom>
            <img
              src={project.media}
              alt={`${project.title}-image`}
              className="w-full h-60 object-cover rounded-t-2xl cursor-zoom-in"
              loading="lazy"
              onClick={() => {
                // pause semua video ketika buka image
                videoRefs.current.forEach((video) => {
                  if (video && !video.paused) {
                    video.pause();
                  }
                });
              }}
            />
          </Zoom>
        )}

        {/* VIDEO */}
        {project.type === "video" && (
          <video
            ref={(el) => (videoRefs.current[id] = el)}
            controls
            className="w-full h-60 object-cover rounded-t-2xl"
            preload="metadata"
            onPlay={() => {
              // pause video lain saat video diputar
              videoRefs.current.forEach((video, idx) => {
                if (idx !== id && video && !video.paused) {
                  video.pause();
                }
              });
            }}
          >
            <source src={project.media} type="video/mp4" />
          </video>
        )}

        <div className="p-4 flex flex-col gap-3">
          <h2 className="font-semibold text-lg">{project.title}</h2>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stacks.map((stack, idx) => (
              <img
                key={idx}
                src={stack}
                alt={project.title}
                className="w-8 bg-slate-100 p-1 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</Tabs.Item>
          </TabLayout>
        </div>
      </ContentLayout>
    </>
  );
};

export default Projects;
