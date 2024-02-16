import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React,{useEffect} from "react";
import { animate, transform } from "framer-motion";
import Aos from "aos";
import 'aos/dist/aos.css';

const Card = ({ title, description, imageSrc,url }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <a href={url} target="_blank">
    <VStack 
       color="black" 
       backgroundColor="white" 
       cursor="pointer" 
       borderRadius="xl"
       width="90%" // Set width to 100% for responsiveness
       height="90%"
       boxShadow="md" // Add a shadow for a more card-like appearance
      //  _hover={transform:"translateY(-10px)"}
       justifyContent="space-evenly"
       pb={2}
       data-aos="flip-left"
     > 
       <Image borderRadius="xl" src={imageSrc} alt={title} width="100%" height="70%" /> {/* Set image width to 100% for responsiveness */}
       <VStack spacing={4} p={4} alignItems="flex-start" width="100%"> {/* Set width to 100% for responsiveness */}
         <HStack justifyContent="space-between" alignItems="center" width="100%"> {/* Set width to 100% for responsiveness */}
           <Heading as="h3" size="md" width="80%"> {/* Set width to 80% for responsiveness */}
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg" noOfLines={[4, 3, 2]}> 
           {description} 
         </Text> 
         <HStack spacing={2} alignItems="center" width="100%"> {/* Set width to 100% for responsiveness */}
           <p><a href={url} target="_blank">See More</a></p>
           <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
         </HStack> 
       </VStack> 
     </VStack> 
     </a>
  );
};

export default Card;
