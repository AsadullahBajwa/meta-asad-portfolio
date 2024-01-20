// import * as React from "react";
// import { VStack } from "@chakra-ui/react";

// /**
//  * Illustrates the use of children prop and spread operator
//  */
// const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
//   return (
//     <VStack
//       backgroundColor={boxProps.backgroundColor}
//       color={isDarkBackground ? "#333333" : "black"}
//     >
//       <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
//         {children}
//       </VStack>
//     </VStack>
//   );
// };

// export default FullScreenSection;


import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "#333333" : "black"}
    >
      <VStack
        maxWidth="90%" // Responsive max width
        minHeight="100vh"
        padding={[4, 8, 12]} // Responsive padding
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
