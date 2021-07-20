import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import FaraKhuBackButton from '../Component/FaraKhuBackButton';
import SuggestionTextInput from '../Component/SuggestionTextInput';
import FaraKhuButton from '../Component/FaraKhuButton';
import Colors from '../colors';

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
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.backgroundColor(),
      }}>
      <View
        style={[
          styles.topPartOfSuggestionPage,
          {
            backgroundColor: Colors.topColor(),
            borderColor: Colors.borderTopColor(),
          },
        ]}>
        <FaraKhuBackButton
          navigationFunction={() => {
            props.navigation.pop();
          }}
        />
      </View>
      <ImageBackground
        style={styles.suggestionBackgroundImage}
        source={
          window.Theme === 'light'
            ? require('../../resources/photos/PanelPages/suggestionImageLight.png')
            : require('../../resources/photos/PanelPages/suggestionImageDark.png')
        }>
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
      <View
        style={[
          styles.bottomPartOfSuggestionPage,
          {
            backgroundColor: Colors.topColor(),
            borderColor: Colors.borderTopColor(),
          },
        ]}
      />
    </View>
  );
}
