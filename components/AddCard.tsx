import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { useModal } from "@/scripts/ModalContext";
import styles from "@/styles/styles";

const AddCard = () => {
    const { handleOpenModal } = useModal();

    const handlePressLink = () => {
        Linking.openURL('https://github.com/VitorSAlb')
    }

    return (
        <View style={styles.NavBottom}>
            <TouchableOpacity onPress={handlePressLink}>
                <View>
                    <Text style={styles.btnNav}>@VitorSAlb</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleOpenModal}> 
                <View>
                    <Text style={styles.btnNav}>Novo Projeto</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export { AddCard }
