// import { Heading, HStack, Image, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
// import React, { useEffect } from "react";
// import Aos from "aos";
// import 'aos/dist/aos.css'

// const CertificateCard = ({ title, description, imageSrc }) => {

//   useEffect(()=>{
//     Aos.init({duration:2000})
//   },[])

//   const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });
//     return (
//         <HStack color={"black"} background={"white"} boxShadow={"md"} borderRadius="xl" direction={stackDirection} data-aos='fade-up'>
//             <Image borderRadius="xl" src={imageSrc} width="38%"  height="50%" alt={title} p={4} />
//             <VStack spacing={4} p={4} alignItems="flex-start" width="100%"> {/* Set width to 100% for responsiveness */}
//              <HStack justifyContent="space-between" alignItems="center" width="100%"> {/* Set width to 100% for responsiveness */}
//                <Heading as="h3" size="md" width="80%"> {/* Set width to 80% for responsiveness */}
//                  {title} 
//                </Heading> 
//              </HStack> 
//              <Text color="#64748b" fontSize="lg" noOfLines={[4, 3, 4]}> 
//                {description} 
//              </Text> 
//            </VStack> 
//         </HStack>
//     );
// };

// export default CertificateCard;

import { Heading, HStack, Image, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const CertificateCard = ({ title, description, imageSrc }) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const imageWidth = useBreakpointValue({ base: '100%', md: '30%', lg: '25%' }); // Adjusted width for mobile

  // Hide title and description on mobile screens
  const showContent = useBreakpointValue({ base: false, md: true });

  return (
    <HStack color={"black"} background={"white"} boxShadow={"md"} borderRadius="xl" direction={stackDirection} data-aos='fade-up'>
      <Image borderRadius="xl" src={imageSrc} width={imageWidth} height="auto" alt={title} p={4} />
      {showContent && (
        <VStack spacing={4} p={4} alignItems="flex-start" width="100%"> {/* Set width to 100% for responsiveness */}
          <HStack justifyContent="space-between" alignItems="center" width="100%"> {/* Set width to 100% for responsiveness */}
            <Heading as="h3" size="md" width="80%"> {/* Set width to 80% for responsiveness */}
              {title}
            </Heading>
          </HStack>
          <Text color="#64748b" fontSize="lg" noOfLines={[4, 3, 4]}>
            {description}
          </Text>
        </VStack>
      )}
    </HStack>
  );
};

export default CertificateCard;
