import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { animate, transform } from "framer-motion";

const Card = ({ title, description, imageSrc,url }) => {
  return (
    <a href={url} target="_blank">
    <VStack 
       color="black" 
       backgroundColor="white" 
       cursor="pointer" 
       borderRadius="xl"
       width="85%" // Set width to 100% for responsiveness
       height="100%"
       boxShadow="md" // Add a shadow for a more card-like appearance
       _hover="transform:translateY(-10px)"
     > 
       <Image borderRadius="xl" src={imageSrc} alt={title} width="100%" height="50%" /> {/* Set image width to 100% for responsiveness */}
       <VStack spacing={4} p={4} alignItems="flex-start" width="100%"> {/* Set width to 100% for responsiveness */}
         <HStack justifyContent="space-between" alignItems="center" width="100%"> {/* Set width to 100% for responsiveness */}
           <Heading as="h3" size="md" width="80%"> {/* Set width to 80% for responsiveness */}
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg" noOfLines={[4, 3, 4]}> 
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
