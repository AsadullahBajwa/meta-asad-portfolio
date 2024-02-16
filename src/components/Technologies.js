import React,{useEffect} from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3, faJs, faNodeJs, faPhp, faPython, faWordpress, faWix, faElementor, faJava } from "@fortawesome/free-brands-svg-icons";
import { faTeletype } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import 'aos/dist/aos.css';

const technologies = [
  {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: faReact,
  },
  {
    title: "HTML5",
    description: "The standard markup language for documents designed to be displayed in a web browser.",
    icon: faHtml5,
  },
  {
    title: "CSS3",
    description: "The style sheet language used for describing the look and formatting of a document written in HTML.",
    icon: faCss3,
  },
  {
    title: "JavaScript",
    description: "A programming language that enables interactive web pages.",
    icon: faJs,
  },
  {
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    icon: faNodeJs,
  },
  {
    title: "PHP",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    icon: faPhp,
  },
  {
    title: "Python",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    icon: faPython,
  },
  {
    title: "Wordpress",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    icon: faWordpress,
  },
  {
    title: "Wix",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    icon: faWix,
  },
  {
    title: "Elementor",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    icon: faElementor,
  },
  {
    title: "Java",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    icon: faJava,
  },
  // Add more technologies as needed
];

// TechnologyCard.js
const TechnologyCard = ({ title, icon }) => (
    <Box data-aos="flip-right" p={6} borderRadius="lg" borderWidth="1px" textAlign="center" width={{ base: '100%', md: '48%', lg: '30%' }} maxWidth="200px" m={2}>
      <FontAwesomeIcon icon={icon} size="4x" />
      <Heading as="h3" fontSize="xl" mt={3} mb={2}>
        {title}
      </Heading>
    </Box>
  );
    
  

const TechnologySection = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <FullScreenSection
      backgroundColor="#d896ff"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      // justifyContent="center"
      // spacing={16}
    >
      <Heading as="h1" id="technologies-section">
        Expertise
      </Heading>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
      >
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.title}
            title={tech.title}
            // description={tech.description}
            icon={tech.icon}
          />
        ))}
      </Flex>
    </FullScreenSection>
  );
};

export default TechnologySection;
