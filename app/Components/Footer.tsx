import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { Flex, Box, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Flex borderTop='2px' wrap='wrap' gap='20px' borderTopColor='#2B3544' alignItems='center' bg='#1F2937' px='5%' py='25px' justifyContent='space-between'>
            <Box>
                <Text color='#D1D5DB' fontSize={{base: '13px', md: '16px'}}>© 2025 ExpenseTrack. All rights reserved.</Text>
            </Box>
            <Breadcrumb spacing={{base: '8px', md: '25px'}} separator=' ' justifyContent='space-between' fontSize={{base: '13px', md: '16px'}} fontWeight='600'>
                <BreadcrumbItem>
                    <BreadcrumbLink textDecoration="none" href='#' color='#D1D5DB' _hover={{color:'#60A5FA'}}>Terms</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink textDecoration="none" href='#' color='#D1D5DB' _hover={{color:'#60A5FA'}}>Privacy</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink textDecoration="none" href='#' color='#D1D5DB' _hover={{color:'#60A5FA'}}>Support</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>

  )
}
