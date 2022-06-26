import react from 'react';
import {StyleSheet, Image, View, SafeAreaView, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/100587829?v=4'

const urlToMyGithub = 'https://github.com/lira-hugo';

const App = () => {

  const handlePressGoToGithub = async ()=>{
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGitHub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link...');
      await Linking.openURL(urlToMyGithub);
    }
   
  };
  return ( 
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
      <View style={style.content}>
      <Image
        accessibilityLabel="Foto de Hugo Lira" 
        style={style.avatar} 
        source={{uri:imageProfileGithub}}
        />
        <Text accessibilityLabel='Nome: Hugo Lira' style={[style.defaultText, style.name]}>Hugo Lira</Text>
        <Text accessibilityLabel='Nickname: lira-hugo'style={[style.defaultText, style.nickname]}>lira-hugo</Text>
        <Text accessibilityLabel='Descrição: Graduando em Análise e Desenvolvimento de Sistemas | 
        Realizando o bootcamp Decola Tech Avanade 3ª edição - DIO' style={[style.defaultText, style.description]}>
        Graduando em Análise e Desenvolvimento de Sistemas | 
        Realizando o bootcamp Decola Tech Avanade 3ª edição - DIO
        </Text>
        <Pressable onPress={ handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    //column
      backgroundColor: colorGithub,
      flex: 1, //expandir para a tela inteira
      justifyContent: 'center',
      alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
avatar:{
  height: 200,
  width: 200,
  borderRadius: 100,
  borderColor: 'white',
  borderWidth: 1
},
defaultText: {
  color: colorFontGithub,
},
name: {
  marginTop: 20,
  fontWeight: 'bold',
  fontSize: 24,
},
nickname:{
  fontSize: 18,
  color: colorDarkFontGithub,
},
descriction:{
  fontWeight: 'bold',
  fontSize: 14
},
button:{
  marginTop: 20,
  backgroundColor: colorDarkFontGithub,
  borderRadius: 10,
  padding: 20,
},
textButton: {
  fontWeight: 'bold',
  fontSize: 15,
}

});
