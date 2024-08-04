import { Avatar, Flex, Typography} from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { LogoIcon } from '../../assets/LogoIcon.jsx'
import SearchInput from '../../components/SearchInput.tsx'

const {Text} = Typography

const Navbar = () => {
  return (
    <Flex vertical className='w-full border-b-2 h-14 border-gray-100'  justify='center' >
        <Flex justify='space-between' className='ml-5'>
            <Flex justify='center' align='center' gap={10} className='ml-10'>
                <LogoIcon/>
                <h2 className='font-bold font-sans w-42' >
                    Price Tracker
                </h2>
                <SearchInput/>
                <Flex justify='center'>
                <Text strong className='cursor-pointer' >
                    Tracked products
                </Text>
            </Flex>
                
            </Flex>
            

            <Flex className='mr-10'>
              <Avatar size={40} icon={<UserOutlined />} />
            </Flex>

        </Flex>
    </Flex>
  )
}

export default Navbar