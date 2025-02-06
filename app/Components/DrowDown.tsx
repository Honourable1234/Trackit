import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Image
} from '@chakra-ui/react';

const Dropdown: React.FC = () => {
    return (
        <Menu>
            <MenuButton as={Button} >
                <Image src="./Images/Menu.svg" alt="Menu" w='35px' />
            </MenuButton>

            <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Expense</MenuItem>
                <MenuItem>Report</MenuItem>
                <MenuItem>Settings</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default Dropdown;
