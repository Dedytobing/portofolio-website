import ContentLayout from "../../components/ContentLayout";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const contacts = [
  {
    icon: <MdOutlineMail size="24" />,
    name: "dedylumbantobing3@gmail.com",
    link: "mailto:dedylumbantobing3@gmail.com",
  },
  {
    icon: <FaLinkedin size="24" />,
    name: "Dedy Kristianto Lumbantobing",
    link: "https://www.linkedin.com/in/dedy-lumbantobing/",
  },
  {
    icon: <FaGithub size="24" />,
    name: "Dedy Tobing",
    link: "https://github.com/Dedytobing",
  },
  {
    icon: <FaInstagram size="24" />,
    name: "Dedytbng",
    link: "https://www.instagram.com/dedytbng",
  },
  {
    icon: <FaFacebook size="24" />,
    name: "Dedy Kristianto Lumbantobing",
    link: "https://www.facebook.com/dedy.lumbantobing.7",
  },
];

const Contact = () => {
  return (
    <>
      <ContentLayout>
        <section className="flex flex-col gap-2 py-4">
          <h2 className="font-bold text-3xl">Contact</h2>
          <div className="flex flex-col items-center justify-center text-center mt-4">
            <img
              src="https://raw.githubusercontent.com/Dedytobing/personalWebsite/main/img/logo.png"
              className="rounded-full w-40 border-4 border-gray-700 mb-1"
              loading="lazy"
            />
            <h4 className="text-2xl font-bold text-blue-500">Let's Connect</h4>
            <p className="my-4">
              Connection Is the Key to Personal and Career Success. Sometimes,
              Reaching Out and Taking Someone's Hand Is the Beginning of A
              Journey
            </p>
            <div className="flex flex-wrap gap-3 items-center justify-center">
              {contacts.map((contact, idx) => (
                <a href={contact.link} key={idx} target="_blank">
                  <div className="flex items-center gap-2 dark:text-slate-800 bg-blue-200 py-2 px-3 rounded-lg">
                    {contact.icon}
                    <p className="lg:text-sm text-xs font-semibold">
                      {contact.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </ContentLayout>
    </>
  );
};

export default Contact;
