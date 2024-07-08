import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from "react-native";

const CardContainter = () => {
    const [cards, setCards] = useState([
        { title: "GOTH", infos: ['JavaScript', 'CSS', 'HTML'] },
        { title: "First App", infos: ['TypeScript', 'React Native'] },
        { title: "Biblioteca cmd", infos: ['Java'] }
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState('');
    const [newCardInfos, setNewCardInfos] = useState([''])

    const addCard = () => {
        const newCard = { title: newCardTitle, infos: newCardInfos.filter(info => info.trim() !== '') };
        setCards([...cards, newCard]);
        resetState();
    };

    const addInfoInput = () => {
        setNewCardInfos([...newCardInfos, ""]);
    };

    const handleInfoChange = (text, index) => {
        const updatedInfos = [...newCardInfos];
        updatedInfos[index] = text;
        setNewCardInfos(updatedInfos);
    };

    const resetState = () => {
        setModalVisible(false);
        setNewCardInfos(['']);
        setNewCardTitle('');
    }

    return(
        <View style={styles.container} >
            <TouchableOpacity style={styles.TOContaniner} onPress={() => setModalVisible(true)}>
                <Text style={styles.btnNP}>New Project</Text>
            </TouchableOpacity>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} infos={card.infos} />
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>New Card Details</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Title"
                            onChangeText={text => setNewCardTitle(text)}
                            value={newCardTitle}
                        />
                        {newCardInfos.map((info, index) => (
                            <TextInput
                                key={index}
                                style={styles.input}
                                placeholder={`Info ${index + 1}`}
                                onChangeText={text => handleInfoChange(text, index)}
                                value={info}
                            />
                        ))}
                        <TouchableOpacity onPress={addInfoInput}>
                            <Text style={styles.addInfoBtn}>Add More Info</Text>
                        </TouchableOpacity>
                        <Button title="Add Card" onPress={addCard} />
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}



interface CardProps {
    title: string;
    infos: string[];
}

const Card: React.FC<CardProps> = ({title, infos}) => {
    return(
        <View style={styles.box}>
            <Text style={styles.titleBox}>{title}</Text>
            <View style={styles.infoList}>
                {infos.map((info, index) => (
                    <View key={index} style={[styles.infoItem, getBulletColor(info)]}>
                        <Text>{info}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

const getBulletColor = (info: string) => {
    switch (info.toLowerCase()) {
        case 'css':
            return { backgroundColor: '#34B5D2' }; 
        case 'javascript':
            return { backgroundColor: '#FFD700' }; 
        case 'html':
            return { backgroundColor: '#FFA500' }; 
        case 'typescript':
            return { backgroundColor: '#007BFF' };
        case 'java':
            return { backgroundColor: '#E27A00' };
        case 'react native':
            return { backgroundColor: '#00E2E2' };
        default:
            return { backgroundColor: '#FFFFFF' }; 
    }
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        borderWidth: 1,
        borderColor: '#574F4D',
        borderRadius: 10,
        borderStyle: 'solid',
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    box: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#574F4D',
        borderRadius: 10,
        borderStyle: 'solid',
        padding: 10,
        marginTop: 10,
    },
    titleBox: {
        color: '#FAFAFA',
        fontSize: 18,
        marginBottom: 10,
    },
    infoList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    infoItem: {
        backgroundColor: '#E0E0E0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 5,
    },
    TOContaniner: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNP: {
        backgroundColor: '#FAFAFA',
        padding: 5,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: '90%',
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
    },
    addInfoBtn: {
        color: '#007BFF',
        marginBottom: 10,
        width: '100%'
    },
});

export {CardContainter}