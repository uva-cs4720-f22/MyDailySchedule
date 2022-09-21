import React, {useEffect, useState} from "react";
import { View, Text, TextInput, Button, Alert } from 'react-native'
import styles from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Schedule = ({ navigation, route }) => {
    const currentTitle = route.params.dayToPrint + "'s Schedule";
    const [text, setText] = useState('');
    const [schedule, setSchedule] = useState('');
    const storageKey = '@schedule_' + route.params.dayToPrint;
    
    // useEffect is a React Hook and is called when the screen is mounted
    // It allows us to use dynamic information in key component locations
    useEffect(() => {
        getData();
        navigation.setOptions({ headerTitle: currentTitle });
    }, [route.params.dayToPrint]);

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem(storageKey, schedule)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        
        try {
            const value = await AsyncStorage.getItem(storageKey)
            if(value !== null) {
                setSchedule(schedule => value);
            }
        } catch(e) {
            // error reading value
        }
        
    }

    const handleAddEvent = () => {
        setSchedule(schedule => schedule + '\n' + text);
        setText(text => '')
        console.log(schedule)
        storeData()
    }

    const handleClearEvent = () => {
        setSchedule(schedule => '');
        console.log(schedule)
        storeData()
    }

    return (
        <View style={{padding: 10}}>
            <Text>{schedule}</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Add something to your schedule."
                onChangeText={newText => setText(newText)}
                value={text}
            />
            <View style={styles.sectionContainer}>
                <Button
                title="Add"
                onPress={() => handleAddEvent()}
                />
            </View>
            <View style={styles.sectionContainer}>
                <Button
                title="Clear"
                onPress={() => handleClearEvent()}
                />
            </View>
        </View>
    )

}

export default Schedule;