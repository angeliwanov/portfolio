import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    key: 1,
    icon: faEnvelope,
    url: "mailto: angel.iwanov@gmail.com",
  },
  {
    key: 2,
    icon: faGithub,
    url: "https://github.com/angeliwanov",
  },
  {
    key: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/angel-ivanov-fcca-cfa-pmp-63562883",
  },
  {
    key: 4,
    icon: faMedium,
    url: "https://medium.com/@angel.iwanov",
  },
  {
    key: 5,
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/22143932/angel-ivanov?tab=profile",
  },
];

const Header = () => {
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

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social) => (
                <a key={social.key} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
