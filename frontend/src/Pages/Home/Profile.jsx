import React, { use, useEffect, useState } from 'react'

import Service from '../../utils/http';
//import Service from '../utils/http'
import { Avatar, Center, Stack, Text } from '@mantine/core';
const obj = new Service();


export default function Profile() {


   const [user, setUser] = useState({})


   const getProfileData = async () => {
       try {
           let data = await obj.get("user/me")
           setUser(data)
           console.log(data);
       } catch (error) {
           console.log(error);
       }
   }
   useEffect(() => {


       getProfileData();
   }, [])

/*
{
    "_id": "68c2879e97c7754d3fd196fa",
    "name": "D MANIKANTH YADAV .",
    "email": "2210030346@klh.edu.in",
    "avatar": "https://lh3.googleusercontent.com/a/ACg8ocL_aC45lyU5TJ73Ho96NHYI2u6mdf2JK4u9V_SNaTb7enNYRQ=s96-c",
    "role": "user",
    "createdAt": "2025-09-11T08:26:06.503Z",
    "updatedAt": "2025-09-11T08:26:06.503Z",
    "__v": 0
}*/ 
   return (
       <div>
           
               <Center>
                <Stack  h={300}
                bg="var(--mantine-color-body)"
                align="center"
                justify="flex-start"
                gap="xs">
                    <Avatar variant="filled" radius="lg" size="xl" color="rgba(12, 121, 125, 1)" src="" />;

                    <Text color='red' size={"lg"}> {user?.name} </Text>
                    <Text color='blue' size={"lg"}> {user?.email} </Text>
                    <Text color='green' size={"lg"}> {user?.createdAt} </Text>
                    <Text color='yellow' size={"lg"}> {user?.updatedAt} </Text>
                </Stack>
                    
               </Center>


           
       </div>
   )
}