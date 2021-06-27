import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import SuggestionTextInput from '../Component/SuggestionTextInput';
import FaraKhuButton from '../Component/FaraKhuButton';

export default function SuggestionPage(props) {
  const [getData, setData] = useState('');

  async function suggestionFunction() {
    try {
      return await fetch(
        'https://api.farakhu.markop.ir/api/Suggestion/CreateSuggestion',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Detail: getData,
          }),
        },
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.topPartOfSuggestionPage}>
        <FaraKhuBackButton
          navigationFunction={() => {
            props.navigation.pop();
          }}
        />
      </View>
      <ImageBackground
        style={styles.suggestionBackgroundImage}
        source={require('../../resources/photos/PanelPages/suggestionImageLight.png')}>
        <Text style={styles.textOfSuggestion}>متن پیام</Text>
        <SuggestionTextInput
          onChangeText={data => {
            setData(data);
          }}
        />
        <View style={{marginTop: '12%'}}>
          <FaraKhuButton
            pressAble={getData.trim() === ''}
            message={'ارسال'}
            onPressFunction={() => {
              suggestionFunction().then(response => {
                if (response.status) {
                  props.navigation.push('SuggestionSuccessfullyPage');
                }
              });
            }}
          />
        </View>
      </ImageBackground>
      <View style={styles.bottomPartOfSuggestionPage} />
    </View>
  );
}
