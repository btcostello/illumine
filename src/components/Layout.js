import React from 'react'
import { View } from '@aws-amplify/ui-react'
import { Nav } from './Navbar/NavbarElements'

export default function Layout({children, handleClick, authText, email}){
return (
    <View width="1200px" marginLeft="auto" marginRight="auto">
        <Nav marginTop="20px"
        authText ={authText}
        email={email}
        handleAuth={handleClick}
        avatar={email.split('')[0].toUpperCase()}
        />
        {children}

    </View>
)


}
