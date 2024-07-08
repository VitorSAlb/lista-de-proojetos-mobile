import { CardContainter } from '@/components/card';
import { StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollViewContent}>
      <StatusBar backgroundColor='#1E1E1E' barStyle='light-content'></StatusBar>
      <View style={styles.container}>
          <Text style={styles.mainText}>Meus Projetos</Text>
          <CardContainter/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent:{
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
  }

});
