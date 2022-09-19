import React, {useEffect} from "react";
import { View, Text } from 'react-native'

const Schedule = ({ navigation, route }) => {
    const currentTitle = route.params.dayToPrint + "'s Schedule";
    
    // useEffect is a React Hook and is called when the screen is mounted
    // It allows us to use dynamic information in key component locations
    useEffect(() => {
        navigation.setOptions({ headerTitle: currentTitle });
    }, [route.params.dayToPrint]);
    return (
        <Text>Here is where the schedule goes!</Text>
    )

}

export default Schedule;