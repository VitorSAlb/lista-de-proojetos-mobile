import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal, TextInput, ScrollView, Alert } from "react-native";
import styles from "@/styles/styles";
import { useModal } from "@/scripts/ModalContext"; // Ajuste o caminho conforme necessário

interface CardData {
  title: string;
  infos: string[];
  description: string;
  status: 'ideai' | 'em processo' | 'feito';
}

const CardContainter = () => {
  const [cards, setCards] = useState([
    { title: "GOTH", infos: ['JavaScript', 'CSS', 'HTML'], description: 'Site de rankeamento de jogos', status: 'feito' },
    { title: "First App", infos: ['TypeScript', 'React Native'], description: 'Teste criação de app', status: 'em progresso' },
    { title: "Biblioteca cmd", infos: ['Java'], description: 'Biblioteca basica via cmd para conferir livros', status: 'ideia' }
  ]);

  const { modalVisible, handleOpenModal, setModalVisible } = useModal();
  const [modalVisibleCard, setModalVisibleCard] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardInfos, setNewCardInfos] = useState(['']);
  const [newCardDescribe, setnewCardDescribe] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const confirmTitle = () => {
    if (newCardTitle !== '') {
      addCard();
    } else {
      Alert.alert("Tente Novamente", "Por favor, insira um título para o card.");
    }
  };

  const addCard = () => {
    const newCard = { title: newCardTitle, infos: newCardInfos.filter(info => info.trim() !== ''), description: newCardDescribe, status: 'ideia' };
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

  const updateCardStatus = (index: number, status: 'ideia' | 'em processo' | 'feito') => {
    const updatedCards = [...cards];
    updatedCards[index].status = status;
    setCards(updatedCards);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.TOContaniner} onPress={handleOpenModal}>
        <Text style={styles.btnNP}>Novo Projeto</Text>
      </TouchableOpacity> */}
      {cards.map((card, index) => (
        <TouchableOpacity style={styles.MaxWidth} onPress={() => handleOpenCardModal(card)} key={index}>
          <Card
            key={index}
            title={card.title}
            infos={card.infos}
            onDelete={() => handleDeleteCard(index)}
            status={card.status}
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
                <Text style={styles.addCardText}>Adicionar Card</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
                <Text>Fechar</Text>
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
        <View style={styles.centeredView}>
          <ScrollView>
            <View style={styles.centeredView}>
              <View style={styles.modalViewCard}>
                {selectedCard && (
                  <>
                    <Text style={styles.modalTitleCard}>{selectedCard.title}</Text>
                    

                    <Text style={styles.modalTextCard}>{selectedCard.description}</Text>

                    <View style={styles.infoList}>
                      {selectedCard.infos.map((info, index) => (
                        <View key={index} style={[styles.infoItem, getBulletColor(info)]}>
                          <Text>{info}</Text>
                        </View>
                      ))}
                    </View>

                    <TouchableOpacity style={styles.editBTN}>
                      <Text style={styles.whiteText}>Editar</Text>
                    </TouchableOpacity>
                  </>
                )}
                <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisibleCard(false)}>
                  <Text style={styles.whiteText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

interface CardProps {
  title: string;
  infos: string[];
  onDelete: () => void;
  status: string;
}

const Card: React.FC<CardProps> = ({ title, infos, onDelete, status }) => {
  return (
    <View style={styles.box}>
      <View style={styles.topo}>
        <View style={styles.topo}>
            <Text style={styles.titleBox}>{title}</Text>
            <Text style={[styles.stats, getBulletColor(status)]}></Text>
        </View>
        
        <TouchableOpacity style={styles.excluirBtn} onPress={onDelete}>
          <Text style={styles.whiteText}>X</Text>
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
  );
};

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
    case 'em progresso':
        return { backgroundColor: '#FFD700' };
    case 'feito':
        return { backgroundColor: 'green' };
    case 'ideia':
        return { backgroundColor: '#F02121' };
    default:
      return { backgroundColor: '#FFFFFF' };
  }
};

export { CardContainter };
