import React, {useState} from "react";
import { Text, View, TouchableOpacity, Modal, TextInput, ScrollView, Alert } from "react-native";
import styles from '../styles/styles';


interface CardData {
    title: string;
    infos: string[];
    description: string;
}

const CardContainter = () => {
    const [cards, setCards] = useState([
        { title: "GOTH", infos: ['JavaScript', 'CSS', 'HTML'], description: 'Site de rankeamento de jogos' },
        { title: "First App", infos: ['TypeScript', 'React Native'], description: 'Teste criação de app' },
        { title: "Biblioteca cmd", infos: ['Java'], description: 'Biblioteca basica via cmd para conferir livros' }
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleCard, setModalVisibleCard] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState('');
    const [newCardInfos, setNewCardInfos] = useState(['']);
    const [newCardDescribe, setnewCardDescribe] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);


    const confirmTitle = () => {
        if (newCardTitle !== '') {
            addCard()
        } else {
            Alert.alert("Tente Novamente", "Por favor, insira um título para o card.")
        }
    };

    const addCard = () => {
        const newCard = { title: newCardTitle, infos: newCardInfos.filter(info => info.trim() !== ''), description: newCardDescribe };
        setCards([...cards, newCard]);
        resetState();
    };

    const addInfoInput = () => {
        setNewCardInfos([...newCardInfos, ""]);
    };

    const handleInfoChange = (text: string, index: number) => {
        const updatedInfos = [...newCardInfos];
        updatedInfos[index] = text;
        setNewCardInfos(updatedInfos);
    };

    const resetState = () => {
        setModalVisible(false);
        setNewCardInfos(['']);
        setNewCardTitle('');
        setnewCardDescribe('');
    };

    const handleDeleteCard = (index: Number) => {
        Alert.alert(
          "Confirmação",
          "Você tem certeza que deseja excluir este card?",
          [
            {
              text: "Cancelar",
              style: "cancel",
            },
            {
              text: "Excluir",
              onPress: () => {
                const updatedCards = cards.filter((_, i) => i !== index);
                setCards(updatedCards);
              },
              style: "destructive",
            },
          ],
          { cancelable: false }
        );
    };

    const handleOpenCardModal = (card) => {
        setSelectedCard(card);
        setModalVisibleCard(true);
    };
    



    return(
        <View style={styles.container} >
            <TouchableOpacity style={styles.TOContaniner} onPress={() => setModalVisible(true)}>
                <Text style={styles.btnNP}>Novo Projeto</Text>
            </TouchableOpacity>
            {cards.map((card, index) => (
                <TouchableOpacity style={styles.MaxWidth} onPress={() => handleOpenCardModal(card)} key={index}>
                    <Card 
                        key={index} 
                        title={card.title} 
                        infos={card.infos} 
                        onDelete={() => handleDeleteCard(index)}
                    />
                </TouchableOpacity>
                
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <ScrollView>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Novo Projeto</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Título"
                                onChangeText={text => setNewCardTitle(text)}
                                value={newCardTitle}
                            />
                            <TextInput
                                style={styles.inputDescribe}
                                placeholder="Descrição"
                                onChangeText={text => setnewCardDescribe(text)}
                                value={newCardDescribe}
                                multiline={true}
                                maxLength={200}
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
                                <Text style={styles.addInfoBtn}>Add nova info +</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.addCard} onPress={confirmTitle}>
                                <Text style={styles.addCardText} >Adicionar Card</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
                                <Text >Fechar</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </ScrollView>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleCard}
                onRequestClose={() => setModalVisibleCard(false)}
            >
                <ScrollView>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {selectedCard && (
                                <>
                                    <Text style={styles.modalText}>{selectedCard.title}</Text>
                                    <Text style={styles.modalText}>{selectedCard.description}</Text>
                                    {selectedCard.infos.map((info, index) => (
                                        <Text key={index} style={styles.modalText}>{info}</Text>
                                    ))}
                                    <TouchableOpacity>
                                        <Text>Editar</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                            <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisibleCard(false)}>
                                <Text>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Modal>

        </View>
    )
}

interface CardProps {
    title: string;
    infos: string[];
    onDelete: () => void;
}

const Card: React.FC<CardProps> = ({title, infos, onDelete}) => {
    return(
        <View style={styles.box}>
            <View style={styles.topo}>
                <Text style={styles.titleBox}>{title}</Text>
                <TouchableOpacity style={styles.excluirBtn} onPress={onDelete}>
                    <Text style={styles.excluirBtnText}>X</Text>
                </TouchableOpacity>
            </View>
            
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

export {CardContainter}