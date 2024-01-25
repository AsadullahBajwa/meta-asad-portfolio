// // import React, {useEffect} from "react";
// // import { useFormik } from "formik";
// // import {
// //   Box,
// //   Button,
// //   FormControl,
// //   FormErrorMessage,
// //   FormLabel,
// //   Heading,
// //   Input,
// //   Select,
// //   Textarea,
// //   VStack,
// // } from "@chakra-ui/react";
// // import * as Yup from 'yup';
// // import FullScreenSection from "./FullScreenSection";
// // import useSubmit from "../hooks/useSubmit";
// // import {useAlertContext} from "../context/alertContext";

// // const LandingSection = () => {
// //   const {isLoading, response, submit} = useSubmit();
// //   const { onOpen } = useAlertContext();

// //   const formik = useFormik({
// //     initialValues: {
// //       firstName:"",
// //       email:"",
// //       type:"",
// //       comment:""
// //     },
// //     onSubmit: (values) => {
// //       submit("https://example.com/contect-me",values);
// //       // if(response.type==="success"){
// //       //   onOpen(response.type,response.message);
// //       // }else if(response.type==="error"){
// //       //   onOpen(response.type,response.message);
// //       // }
// //     },
// //     validationSchema: Yup.object({
// //       firstName:Yup.string().required('Required'),
// //       email:Yup.string().email('Invalid email address').required('Required'),
// //       type:Yup.string().optional(),
// //       comment:Yup.string().min(25,'Must be at least 25 characters').required('Required'),
// //     }),
// //   });
  
// //   useEffect(()=>{
// //     if(response){
// //       onOpen(response.type,response.message);
// //       if (response.type==='success') {
// //         formik.resetForm();
// //       }
// //     }
// //   },[response])

// //   return (
// //     <FullScreenSection
// //       isDarkBackground
// //       backgroundColor="#c1f7e3"
// //       py={16}
// //       spacing={8}
// //     >
// //       <VStack w="1024px" p={32} alignItems="flex-start">
// //         <Heading as="h1" id="contactme-section">
// //           Contact me
// //         </Heading>
// //         <Box p={6} rounded="md" w="100%" backgroundColor={"white"}>
// //           <form onSubmit={formik.handleSubmit}>
// //             <VStack spacing={4}>
// //               <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
// //                 <FormLabel htmlFor="firstName">Name</FormLabel>
// //                 <Input
// //                   id="firstName"
// //                   name="firstName"
// //                   {...formik.getFieldProps('firstName')}
// //                 />
// //                 <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
// //               </FormControl>
// //               <FormControl isInvalid={formik.touched.email && formik.errors.email}>
// //                 <FormLabel htmlFor="email">Email Address</FormLabel>
// //                 <Input
// //                   id="email"
// //                   name="email"
// //                   type="email"
// //                   {...formik.getFieldProps('email')}
// //                 />
// //                 <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
// //               </FormControl>
// //               <FormControl>
// //                 <FormLabel htmlFor="type">Type of enquiry</FormLabel>
// //                 <Select color={"black"} id="type" name="type" {...formik.getFieldProps('type')}>
// //                   <option value="hireMe">Freelance project proposal</option>
// //                   <option value="openSource">
// //                     Open source consultancy session
// //                   </option>
// //                   <option value="other">Other</option>
// //                 </Select>
// //               </FormControl>
// //               <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
// //                 <FormLabel htmlFor="comment">Your message</FormLabel>
// //                 <Textarea
// //                   id="comment"
// //                   name="comment"
// //                   height={250}
// //                   {...formik.getFieldProps('comment')}
// //                 />
// //                 <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
// //               </FormControl>
// //               <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
// //                 Submit
// //               </Button>
// //             </VStack>
// //           </form>
// //         </Box>
// //       </VStack>
// //     </FullScreenSection>
// //   );
// // };

// // export default LandingSection;


// import React, { useEffect } from "react";
// import { useFormik } from "formik";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Textarea,
//   VStack,
// } from "@chakra-ui/react";
// import * as Yup from 'yup';
// import FullScreenSection from "./FullScreenSection";
// import useSubmit from "../hooks/useSubmit";
// import {useAlertContext} from "../context/alertContext";

// const LandingSection = () => {
//   const { isLoading, response, submit } = useSubmit();
//   const { onOpen } = useAlertContext();

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       email: "",
//       type: "",
//       comment: ""
//     },
//     onSubmit: (values) => {
//       submit("https://example.com/contect-me", values);
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string().required('Required'),
//       email: Yup.string().email('Invalid email address').required('Required'),
//       type: Yup.string().optional(),
//       comment: Yup.string().min(25, 'Must be at least 25 characters').required('Required'),
//     }),
//   });
  
//   useEffect(() => {
//     if (response) {
//       onOpen(response.type, response.message);
//       if (response.type === 'success') {
//         formik.resetForm();
//       }
//     }
//   }, [response])

//   return (
//     <FullScreenSection
//       isDarkBackground
//       backgroundColor="#c1f7e3"
//       py={[8, 12, 16]} // Responsive padding
//       spacing={[4, 6, 8]} // Responsive spacing
//     >
//       <VStack w={["100%", "90%", "80%"]} p={[4, 8, 12]} alignItems="flex-start"> {/* Responsive width */}
//         <Heading as="h1" id="contactme-section" fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold"> {/* Responsive font size */}
//           Contact me
//         </Heading>
//         <Box p={6} rounded="md" w="full" backgroundColor="white">
//           <form onSubmit={formik.handleSubmit}>
//             <VStack spacing={4}>
//               <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
//                 <FormLabel htmlFor="firstName">Name</FormLabel>
//                 <Input
//                   id="firstName"
//                   name="firstName"
//                   {...formik.getFieldProps('firstName')}
//                 />
//                 <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
//               </FormControl>
//               <FormControl isInvalid={formik.touched.email && formik.errors.email}>
//                 <FormLabel htmlFor="email">Email Address</FormLabel>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   {...formik.getFieldProps('email')}
//                 />
//                 <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
//               </FormControl>
//               <FormControl>
//                 <FormLabel htmlFor="type">Type of enquiry</FormLabel>
//                 <Select color="black" id="type" name="type" {...formik.getFieldProps('type')}>
//                   <option value="hireMe">Freelance project proposal</option>
//                   <option value="openSource">Open source consultancy session</option>
//                   <option value="other">Other</option>
//                 </Select>
//               </FormControl>
//               <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
//                 <FormLabel htmlFor="comment">Your message</FormLabel>
//                 <Textarea
//                   id="comment"
//                   name="comment"
//                   height={250}
//                   {...formik.getFieldProps('comment')}
//                 />
//                 <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
//               </FormControl>
//               <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
//                 Submit
//               </Button>
//             </VStack>
//           </form>
//         </Box>
//       </VStack>
//     </FullScreenSection>
//   );
// };

// export default LandingSection;


import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: ""
    },
    onSubmit: (values) => {
      submit("https://example.com/contect-me", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string().optional(),
      comment: Yup.string().min(25, 'Must be at least 25 characters').required('Required'),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#d896ff"
      py={[8, 12, 16]} // Responsive padding
      spacing={[4, 6, 8]} // Responsive spacing
    >
      <VStack w="100%" p={[4, 8, 12]} alignItems="flex-start"> {/* Responsive padding */}
        <Heading as="h1" id="contactme-section" fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold"> {/* Responsive font size */}
          Contact me
        </Heading>
        <Box p={6} rounded="md" w={[300, 400,600]} backgroundColor="white"> {/* Responsive width */}
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  color="black"
                  id="type"
                  name="type"
                  {...formik.getFieldProps('type')}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
