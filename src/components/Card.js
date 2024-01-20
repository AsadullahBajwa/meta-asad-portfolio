// import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import React from "react";

// const Card = ({ title, description, imageSrc }) => {
//   // Implement the UI for the Card component according to the instructions.
//   // You should be able to implement the component with the elements imported above.
//   // Feel free to import other UI components from Chakra UI if you wish to.
//   return (
//     <VStack 
//        color="black" 
//        backgroundColor="white" 
//        cursor="pointer" 
//        borderRadius="xl" 
//      > 
//        <Image borderRadius="xl" src={imageSrc} alt={title} /> 
//        <VStack spacing={4} p={4} alignItems="flex-start"> 
//          <HStack justifyContent="space-between" alignItems="center"> 
//            <Heading as="h3" size="md"> 
//              {title} 
//            </Heading> 
//          </HStack> 
//          <Text color="#64748b" fontSize="lg"> 
//            {description} 
//          </Text> 
//          <HStack spacing={2} alignItems="center"> 
//            <p>See more</p> 
//            <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
//          </HStack> 
//        </VStack> 
//      </VStack> 
//   )
// };

// export default Card;


import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack 
       color="black" 
       backgroundColor="white" 
       cursor="pointer" 
       borderRadius="xl"
       width="100%" // Set width to 100% for responsiveness
       boxShadow="md" // Add a shadow for a more card-like appearance
     > 
       <Image borderRadius="xl" src={imageSrc} alt={title} width="100%" /> {/* Set image width to 100% for responsiveness */}
       <VStack spacing={4} p={4} alignItems="flex-start" width="100%"> {/* Set width to 100% for responsiveness */}
         <HStack justifyContent="space-between" alignItems="center" width="100%"> {/* Set width to 100% for responsiveness */}
           <Heading as="h3" size="md" width="80%"> {/* Set width to 80% for responsiveness */}
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg"> 
           {description} 
         </Text> 
         <HStack spacing={2} alignItems="center" width="100%"> {/* Set width to 100% for responsiveness */}
           <p>See more</p> 
           <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
         </HStack> 
       </VStack> 
     </VStack> 
  );
};

export default Card;
