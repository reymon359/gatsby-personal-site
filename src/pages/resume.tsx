import React from "react";
import { graphql } from "gatsby";
import Head from "../components/Head";
import Layout from "../components/Layout";
import Stars from "../components/Stars";
import Content from "../components/Content";
import { TitlePageQueryData } from "../types";
import styled from "styled-components";

const ResumeItemTitle = styled.h4`
  font-weight: 600;
`;

const ResumeItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 1.2rem;
  // small screen column, large screen row

  ${(props) => props.theme.media.max.md`
    flex-direction: column;
  `}
`;
const ResumeItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const WorkExperience = () => {
  const workExperiences = [
    {
      position: "Co-Founder and CTO",
      company: "Mapmelon",
      compnanyUrl: "https://www.mapmelon.com/",
      location: "Remote",
      startDate: "11/2022",
      endDate: "Present",
      description:
        `- Make digital nomadism more accessible and enjoyable while connecting the community with the best coliving spaces.
- Develop the whole platform from scratch with Next.js, Typescript, Prisma, and other modern technologies.
- Design the architecture of the platform to be scalable and maintainable.`
    },
    {
      position: "Software Engineer",
      company: "On Target AI",
      compnanyUrl: "https://on-target.ai/",
      location: "Remote",
      startDate: "06/2023",
      endDate: "Present",
      description:
        `- Craft the whole user interface of the platform while develop a maintainable and scalable codebase.`
    },
    {
      position: "Full-Stack Engineer",
      company: "Flick",
      compnanyUrl: "https://www.flick.social/",
      location: "Remote",
      startDate: "11/2021",
      endDate: "06/2022",
      description:
        `- Implement complex React user experiences, delivering intuitive and seamless interfaces.
- Integrate an AI Social Marketing Assistant powered by OpenAI to overcome users' creative blocks and enhance marketing strategies.
- Implement new social channels to open the platform to new audiences.`
    },
    {
      position: "Full-Stack Engineer",
      company: "One Beyond",
      compnanyUrl: "https://www.one-beyond.com/",
      location: "Remote",
      startDate: "03/2020",
      endDate: "11/2021",
      description:
        `- Build rich interfaces with React, Next.js, Jest, Cypress. 
- Design GraphQL & Rest Microservices in NodeJS. 
- Use MongoDB, PostgreSQL, or Redis for persistence.
- Develop CI&CD in Azure and GitHub Actions. 
- Orchestrate K8s clusters with K9s, & Helm.
- Manage the Azure Cloud infrastructure with Terraform.
- Develop a reusable ecommerce platform (same codebase, multiple clients) with a microservice architecture based on both, sync & async communication. https://ramonmorcillo.com/developing-a-reusable-ecommerce-platform/`
    },
    {
      position: "Full-Stack Engineer",
      company: "1millionbot",
      compnanyUrl: "https://www.1millionbot.com/",
      location: "Alicante and Remote",
      startDate: "01/2018",
      endDate: "03/2020",
      description:
        `- Develop the company dashboard to speed up the NLP chatbots training by 50%.
- Design the company's architecture & integrate its infra into GCP
- Implement an Agile workflow with Github for Software Project Management.`
    },
  ];

  return (
    <>
      {workExperiences.map((workExperience) => (
        <ResumeItem key={workExperience.company}>
          <ResumeItemHeader>
            <ResumeItemTitle>
              <>
                {workExperience.position} at{" "}
                <a
                  href={workExperience.compnanyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {workExperience.company}
                </a>
              </>
            </ResumeItemTitle>
            <div>
              <small>
                {workExperience.location} • {workExperience.startDate} -{" "}
                {workExperience.endDate}
              </small>
            </div>
          </ResumeItemHeader>
          <p
            style={{
              whiteSpace: "pre-wrap",
            }}
          >{workExperience.description}</p>
        </ResumeItem>
      ))}
    </>
  );
};

const ProjectHighlights = () => {
  const projects = [
    {
      name: "Mapmelon",
      year: "2022 - Present",
      url: "https://www.mapmelon.com/",
      description:
        "The all-in-one app for nomad colivers. Discover, Connect, and Share with the Coliving Community.",
    },
    {
      name: "BuildPublic",
      year: "2023",
      url: "https://www.youtube.com/watch?v=KDDX1hn4x44",
      description:
        "Manage your social presence as a maker, with AI-powered build updates.",
    },
    {
      name: "How to Live",
      year: "2021",
      url: "https://reymon359.github.io/how-to-live/",
      description: "A collection of life advices learned along the way.",
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <ResumeItem key={project.name}>
          <ResumeItemHeader>
            <ResumeItemTitle>
              <>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </>
            </ResumeItemTitle>
            <div>
              <small>{project.year}</small>
            </div>
          </ResumeItemHeader>
          <p>{project.description}</p>
        </ResumeItem>
      ))}
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 700;
    margin-top: 3rem;
  }

  p {
    line-height: 1.4;
    font-size: 1.1rem;
  }

  .print {
    display: none;
  }

  @page {
    margin: 0;
}
  @media print {
    color: black!important;
   
    a {
      color: black!important;
      border-bottom: 1px solid black;
    }

    .print {
      display: block;
    }

    .no-print {
      display: none;
    }
  }
`;

const Resume: React.FC = () => {
  return (
    <Wrapper>
      <h2>
        Ramón Morcillo - Resume&nbsp;
        <a className="no-print" onClick={() => window.print()}>
          (PDF)
        </a>
      </h2>

      <div>
        <p>
          As a Full-stack JavaScript / TS engineer, I possess the skills to
          bootstrap, architecture, or improve your project.
          <br /> Additionally, I provide services such as consulting, code
          analysis, and guidance to elevate your codebase while adhering to the
          latest standards in modern web development.
          <br /> Get in touch with me at{" "}
          <a
            href="mailto:hey@ramonmorcillo.com?subject=Hi%20there!"
            rel="noopener"
          >
            hey@ramonmorcillo.com
          </a>
        </p>
        <p className="print">
          You can find an updated live version of this resume at{" "}
          <a
            href="https://www.ramonmorcillo.com/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.ramonmorcillo.com/resume
          </a>
        </p>
      </div>


      <h3>Stack</h3>

      <p>
        <strong>Front-End:</strong> React, Next, Tailwind, CSS-in-JS, Chakra
        <br />
        <strong>Back-End:</strong> GraphQL, tRPC, serverless, Prisma,
        PostgreSQL, Mongo, AWS, Azure <br />
        <strong>Skills:</strong> Strong communication, Transparency, Complex problem solving, Open minded <br />
        <strong>Tooling:</strong> TypeScript, ESLint, Prettier,
        Storybook, Cypress, Jest, Docker, Zod
      </p>

      <h3>Work Experience</h3>

      <WorkExperience />

      <h3>
        Project Highlights{" "}
        <small>
          <a
            href="https://www.ramonmorcillo.com/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            (see more)
          </a>
        </small>
      </h3>

      <ProjectHighlights />

      <h3> Education and languages </h3>
      <p>
        Degree in Software Engineering - Alicante University, 2014 <br />
        Master in Web Engineering - Madrid Polytechnic University, 2019
        <br />
        <br />I speak and write 🇪🇸 Spanish (native), 🇬🇧 English (fluent)
      </p>
    </Wrapper>
  );
};

interface ResumePageProps {
  readonly data: TitlePageQueryData;
}

const ResumePage: React.FC<ResumePageProps> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <Head
        title="Resume"
        image="/images/ramon_morcillo_meta_image.jpg"
        keywords={[
          `blog`,
          `resume`,
          `typescript`,
          `javascript`,
          `portfolio`,
          `react`,
        ]}
      />
      <Stars
        normalVelocity={0.0001}
        containerOpacity={0.3}
        addEventListeners={false}
      />

      <Content>
        <Resume />
      </Content>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      ...SiteTitle
    }
  }
`;

export default ResumePage;
