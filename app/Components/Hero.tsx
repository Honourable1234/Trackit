import React from 'react'
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react'
import Card1 from './Card1'
import Card2 from './Card2'
export default function Hero() {
  return (
    <Box bg='#111827' px='5%' py={{base: '30px', sm: '40px', md: '70px'}}>
        <Heading color="#ffff" as='h1' fontSize={{base: '30px', md:'50px'}}>Welcome back, Sarah!</Heading>
        <Text mt={{base: '10px', sm: '15px', md: '20px'}} color="#ffff" fontSize={{base: '16px', md:'22px'}}>Track your business expenses effortlessly</Text>
        <Flex gap='15px' pt={{base: '20px', sm: '30px'}}>
         <Button bg='#3B82F6 ' color="#ffff" p='20px' _hover={{bg:'#0c60c7'}}>Add New Expense</Button>
         <Button color="#ffff" bg='#111827' border='2px' p='20px' _hover={{bg:'#485267'}}>View Reports</Button>
        </Flex>
        <Flex wrap='wrap' gap='15px' mt='50px'>
            <Card1
            imageUrl="./images/Graph.svg"
            imageAlt="Graph"
            title="Monthly Expenses"
            description="+12.5% from last month"
            amount= "$12,458" />
            <Card1
            imageUrl="./images/Wallet.svg"
            imageAlt="Graph"
            title="Total Budget"
            description="Budget remaining: $12,542"
            amount= "$25,000" />
            <Card1
            imageUrl="./images/Scroll.svg"
            imageAlt="Graph"
            title="Pending Bills"
            description="Due this week"
            amount= "05" />
        </Flex>
        <Heading color="#ffff" as='h2' fontSize={{base: '20px', md:'35px'}} mt='50px'>Quick Actions</Heading>
        <Flex wrap='wrap' gap='25px' mt='50px'>
            <Card2 
             imageUrl="./images/Receipt.svg"
             imageAlt="Receipt"
             title="Add Receipt"/>
             <Card2 
             imageUrl="./images/Export.svg"
             imageAlt="Export"
             title="Export Receipt"/>
             <Card2 
             imageUrl="./images/Team.svg"
             imageAlt="Team"
             title="Team Access"/>
             <Card2 
             imageUrl="./images/Setting.svg"
             imageAlt="Setting"
             title="Settings"/>
        </Flex>
    </Box>
  )
}
