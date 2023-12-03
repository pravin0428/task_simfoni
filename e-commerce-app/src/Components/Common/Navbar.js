import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Link,
  Image,
  Input
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { RiSaveLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
 

const Links = ['Catlog', 'BuyDesk', 'History', "Dashboard"]

 

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg="white" boxShadow="lg" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image width="30px" src="logo_simfoni.png"alt="logo" /></Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link fontSize="smaller" fontWeight="bold" key={link}>{link}</Link>
              ))}
            </HStack>
          </HStack>


   {/* second FlexBox  */}

<Flex>
     {/* flex box for the serach bar */}        

 <Box display="flex" gap="5px" > 
 <Flex gap="8px" border="1px solid black" borderRadius="5px" display={{ base: 'none', md: 'flex' }}  >
<Menu>
              <MenuButton
                as={Button}
                
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                padding="2px"
                >
                PO*
                 
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
           <Input placeholder='Search' border="none" borderLeft="1px solid black" borderRadius="none" />

       

</Flex>

<Button display={{ base: 'none', md: 'flex' }} color="teal" border="2px solid teal" variant='outline'>Help</Button>


{/* flex for logos before avatar */}

<Flex gap="8px" margin="auto" justifyContent="center" padding="10px" >
  <Box><RiSaveLine style={{ width: '4vh', height: '4vh' }} /></Box>
  <Box><IoIosHeartEmpty style={{ width: '4vh', height: '4vh' }} /></Box>
  <Box><IoCartOutline style={{ width: '4vh', height: '4vh' }} /></Box>
  <Box><CiBellOn style={{ width: '4vh', height: '4vh' }} /></Box>
</Flex>

 </Box>

 







          <Flex alignItems={'center'}  gap="2px" >
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                
                >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                 
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
            <Text fontSize="smaller" fontWeight="bold" >Sara Green</Text>
          </Flex>
</Flex>


        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link fontSize="smaller" fontWeight="bold" key={link}>{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

     
    </>
  )
}

export default Navbar