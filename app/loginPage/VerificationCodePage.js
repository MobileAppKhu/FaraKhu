import React, {useRef, useState} from 'react';
import {View, Image, TextInput} from 'react-native';
import styles from './styles';
import FaraKhuButton from './Component/FaraKhuButton';
import FaraKhuText from './Component/FaraKhuText';
import FaraKhuBackButton from './Component/FaraKhuBackButton';
import SignUpSuccessfully from './SignUpSuccessfully';

export default function VerificationCodePage(props) {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();

  async function verificationCode() {
    const address = props.route.params.isChangePasswordPage
      ? 'https://api.farakhu.markop.ir/api/Account/ResetPasswordValidation'
      : 'https://api.farakhu.markop.ir/api/Account/EmailVerify';
    try {
      const {data, status} = await fetch(address, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: props.route.params.email,
          Token: getCode.toUpperCase(),
        }),
      });
      // console.log(props.route.params.email + '  ' + getCode);
      //console.log(status);
      console.log(address);
      return status;
    } catch (e) {
      return e;
    }
  }

  const [getCode, setCode] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  return (
    <View style={styles.background}>
      <FaraKhuBackButton
        function={() => {
          props.navigation.pop();
        }}
      />
      <Image
        source={require('../resources/photos/emailSentLogo.png')}
        style={styles.verificationCodeImage}
      />
      <FaraKhuText
        style={{
          fontSize: 14,
          color: 'rgb(238,238,238)',
          marginTop: 25,
          marginBottom: 35,
        }}>
        کد تایید به {props.route.params.email} ارسال گردید
      </FaraKhuText>
      <View style={{flexDirection: 'row'}}>
        <WhiteTextInput
          ref={input1Ref}
          onChangeText={id => {
            setCode(getCode.substr(0, 0) + id + getCode.substr(0 + id.length));
            setIsCorrect(true);
            if (id) {
              input2Ref.current.focus();
            }
          }}
        />
        <WhiteTextInput
          ref={input2Ref}
          onChangeText={id => {
            setCode(getCode.substr(0, 1) + id + getCode.substr(1 + id.length));
            setIsCorrect(true);

            if (id) {
              input3Ref.current.focus();
            } else {
              input1Ref.current.focus();
            }
          }}
        />
        <WhiteTextInput
          ref={input3Ref}
          onChangeText={id => {
            setCode(getCode.substr(0, 2) + id + getCode.substr(2 + id.length));
            setIsCorrect(true);
            if (id) {
              input4Ref.current.focus();
            } else {
              input2Ref.current.focus();
            }
          }}
        />
        <WhiteTextInput
          ref={input4Ref}
          onChangeText={id => {
            setCode(getCode.substr(0, 3) + id + getCode.substr(3 + id.length));
            setIsCorrect(true);
            if (id) {
              input5Ref.current.focus();
            } else {
              input3Ref.current.focus();
            }
          }}
        />
        <WhiteTextInput
          ref={input5Ref}
          onChangeText={id => {
            setCode(getCode.substr(0, 4) + id + getCode.substr(4 + id.length));
            setIsCorrect(true);
            if (!id) {
              input4Ref.current.focus();
            }
          }}
        />
      </View>
      {!isCorrect && (
        <View>
          <FaraKhuText style={{color: 'rgb(225,74,74)'}}>
            کد وارد شده صحیح نمی باشد
          </FaraKhuText>
        </View>
      )}
      <View style={styles.greenPartDownPage}>
        <FaraKhuButton
          marginTop={'5%'}
          opacity={1}
          textOpacity={0.65}
          backgroundColor={'rgb(57,62,70)'}
          buttonText={'تایید'}
          fontSize={20}
          fontWeight={'bold'}
          color={'white'}
          function={() => {
            verificationCode().then(responseJson => {
              console.log(responseJson);
              if (responseJson === 200) {
                if (props.route.params.isChangePasswordPage) {
                  props.navigation.push('ChangePasswordPage', {
                    email: props.route.params.email,
                  });
                } else {
                  props.navigation.push('SignUpSuccessfully');
                }
              } else {
                setIsCorrect(false);
              }
            });
          }}
        />
      </View>
    </View>
  );
}

export const WhiteTextInput = React.forwardRef((props, ref) => {
  // keyboardType={''}
  return (
    <View>
      <TextInput
        ref={ref}
        style={{
          height: 45,
          width: 45,
          backgroundColor: 'white',
          borderRadius: 5,
          margin: 3,
          borderWidth: 1,
          borderColor: 'rgb(0,173,181)',
        }}
        textAlign={'center'}
        maxLength={1}
        onChangeText={props.onChangeText}
      />
    </View>
  );
});
