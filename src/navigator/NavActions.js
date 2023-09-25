import { CommonActions } from "@react-navigation/native";

export const AuthStack = CommonActions.reset({
    index:0,
    routes:[
        {name:"AuthStack"}
    ]
})

export const AppStack = CommonActions.reset({
    index:0,
    routes:[
        {name:"AppStack"}
    ]
})