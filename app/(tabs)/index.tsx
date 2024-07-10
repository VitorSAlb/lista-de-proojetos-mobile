import React from 'react';
import { AddCard } from '@/components/AddCard';
import { CardContainter } from '@/components/card';
import { StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';
import { ModalProvider } from '@/scripts/ModalContext'; // Ajuste o caminho conforme necessário

const HomeScreen = () => {
  return (
    <ModalProvider>
      <>
        <StatusBar backgroundColor='#1E1E1E' barStyle='light-content' />
        <View style={styles.bgColorFull}>
          <ScrollView style={styles.scrollViewContent}>
            <View style={styles.container}>
              <Text style={styles.mainText}>Meus Projetos</Text>
              <CardContainter />
            </View>
          </ScrollView>
          <AddCard />
        </View>
      </>
    </ModalProvider>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#1E1E1E',
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  mainText: {
    color: '#FAFAFA',
    marginBottom: 5,
  },
  bgColorFull: {
    backgroundColor: '#1E1E1E',
    height: '100%',
  },
});

export default HomeScreen;
