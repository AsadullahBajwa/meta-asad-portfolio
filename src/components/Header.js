import React, { useEffect, useRef,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: asadullahbajwa76@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/AsadullahBajwa",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/asadullahbajwa/",
  },
  // {
  //   icon: faWhatsapp,
  //   url:"https://api.whatsapp.com/send?phone=03065186680"
  // },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const headerRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = headerRef.current;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        header.style.transform = "translateY(-200px)";
      } else {
        // Scrolling up
        header.style.transform = "translateY(0)";
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup: remove the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".5s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={999}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {
                socials.map((link,index)=>(
                  <a href={link.url} target="_blank" key={index}>
                    <FontAwesomeIcon icon={link.icon} size="2x"></FontAwesomeIcon>
                  </a>
                ))
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects" id="projects" onClick={handleClick('projects')}>Projects</a>
              <a href="/#contact-me" id="contactme" onClick={handleClick('contactme')}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
