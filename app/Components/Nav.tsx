import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { Flex, Box, Heading, Image } from '@chakra-ui/react'
import Dropdown from './DrowDown'

export default function Nav() {
    return (
        <Flex borderBottom='2px' borderBottomColor='#2B3544' alignItems='center' bg='#1F2937' px='5%' py='25px' justifyContent='space-between'>
            <Box>
                <Heading color="#60A5FA" as='h2' fontSize={{base: '20px', md:'25px'}}>ExpenseTrack</Heading>
            </Box>
            <Breadcrumb display={{base: 'none', sm: 'block'}} spacing={{base: '8px', md: '25px'}} separator=' ' justifyContent='space-between' fontSize={{base: '13px', md: '16px'}} fontWeight='600'>
                <BreadcrumbItem>
                    <BreadcrumbLink textDecoration="none" href='#' color='#D1D5DB' _hover={{color:'#60A5FA'}}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink textDecoration="none" href='#' color='#D1D5DB' _hover={{color:'#60A5FA'}}>Expense</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink textDecoration="none" href='#' color='#D1D5DB' _hover={{color:'#60A5FA'}}>Report</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink textDecoration="none" href='#' color='#D1D5DB' _hover={{color:'#60A5FA'}}>Settings</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex display={{base: 'none', sm: 'flex'}}>
               <Image src="./Images/Bell.svg" alt="Bell" w='35px' />
               <Image src="./Images/User.svg" alt="User" w='35px' />
            </Flex>
            <Box display={{base: 'block', sm: 'none'}}>
            {/* <Image src="./Images/Menu.svg" alt="Menu" w='35px' /> */}
              <Dropdown />
            </Box>
        </Flex>

    )
}
