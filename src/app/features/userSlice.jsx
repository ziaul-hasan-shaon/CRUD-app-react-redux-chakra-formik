import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    users: [
         {
            id: 1,
            photo: 'https://ibb.co/b2b1Sbq',
            name: "John Doe",
            email: "john.doe@example.com",
            password: "securePwd123",
            confirm: "securePwd123",
            address: "123 Oak Street, Anytown, USA",
            tagline: "Living life to the fullest."
          },
          
         {
            id: 2,
            phtoto: 'https://ibb.co/j9Yt2DV',
            name: "Jane Smith",
            email: "jane.smith@example.com",
            password: "p@ssw0rd321",
            confirm: "p@ssw0rd321",
            address: "789 Maple Avenue, Springfield, USA",
            tagline: "Embrace every moment with a smile."
          },
          
          {
            id: 3,
            photo: 'https://ibb.co/b2b1Sbq',
            name: "Michael Johnson",
            email: "michael.johnson@example.com",
            password: "M1k3P@ss",
            confirm: "M1k3P@ss",
            address: "456 Pine Street, Smalltown, USA",
            tagline: "Determined to make a difference."
          },
          
          {
            id: 4,
            photo:"https://ibb.co/j9Yt2DV",
            name: "Emily Brown",
            email: "emily.brown@example.com",
            password: "brownie123!",
            confirm: "brownie123!",
            address: "1010 Cedar Lane, Cityville, USA",
            tagline: "Chasing dreams and spreading kindness."
          }
          
    ]
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        displayUser: state => state,
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        updatUser: (state, action) => {
            const { id, name, email, password, confirm, address, tagline} = action.payload
          const  isUserExist = state.users.find(user => user.id === id)
            if(isUserExist){
                isUserExist.name = name;
                isUserExist.email = email;
                isUserExist.password = password;
                isUserExist.confirm = confirm;
                isUserExist.address = address;
                isUserExist.tagline = tagline;
            }
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    }
})

export const {displayUser, addUser, deleteUser, updatUser} = userSlice.actions;

export default userSlice.reducer