import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const CertificateCard = ({ title, description, imageSrc }) => {
    return (
        <HStack color={"black"} background={"white"} cursor={"pointer"} boxShadow={"md"} borderRadius="xl">
            <Image borderRadius="xl" src={imageSrc} width="38%" alt={title} p={4} />
            <VStack spacing={4} p={4} alignItems="flex-start" width="100%"> {/* Set width to 100% for responsiveness */}
             <HStack justifyContent="space-between" alignItems="center" width="100%"> {/* Set width to 100% for responsiveness */}
               <Heading as="h3" size="md" width="80%"> {/* Set width to 80% for responsiveness */}
                 {title} 
               </Heading> 
             </HStack> 
             <Text color="#64748b" fontSize="lg"> 
               {description} 
             </Text> 
           </VStack> 
        </HStack>
    );
};

export default CertificateCard;
