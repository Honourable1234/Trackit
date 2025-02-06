import React from 'react';
import { Container, Image, Text, Flex } from '@chakra-ui/react';

interface CardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    amount: string
  }
const Card: React.FC<CardProps> = ({ imageUrl, imageAlt, title, description, amount }) => {
  return (
    <Container maxW="400px" borderRadius="lg" overflow="hidden" p="5" bg='#1F2937'>
      <Flex  justifyContent='space-between'>
      <Text fontWeight="bold" fontSize="20px" mb="2" color="#ffff">{title}</Text>
      <Image src={imageUrl} alt={imageAlt} />
      </Flex>
        <Text fontWeight='bold' fontSize='35px' color='#60A5FA' mt="10px">{amount}</Text>
        <Text fontSize="md" color='#909FAF' mt='6px'>{description}</Text>
    </Container>
  );
};

export default Card;
