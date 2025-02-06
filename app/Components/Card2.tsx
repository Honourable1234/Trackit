import React from 'react';
import { Container, Image, Text, Flex } from '@chakra-ui/react';

interface CardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
  }
const Card2: React.FC<CardProps> = ({ imageUrl, imageAlt, title }) => {
  return (
    <Container maxW="300px" borderRadius="lg" overflow="hidden" p="20px" bg='#1F2937' _hover={{bg:'#2B3544'}}>
      <Image src={imageUrl} alt={imageAlt} m='auto' boxSize='40px'/>
      <Text fontWeight="bold" fontSize="20px" mb="2" color="#ffff" textAlign='center' mt='10px'>{title}</Text>
    </Container>
  );
};

export default Card2;