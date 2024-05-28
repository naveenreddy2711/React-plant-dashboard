import { Flex } from 'antd'
import React from 'react'
import Banner from './Banner'
import ProductLists from './ProductLists'
import SellList from './SellList'



const MainContent = () => {
  return (
    <div style={{ flex:1 }}>
        <Flex vertical gap="2.3rem">
            <Banner/>
            <ProductLists/>
            <SellList/>
        </Flex>
    </div>
  )
}

export default MainContent