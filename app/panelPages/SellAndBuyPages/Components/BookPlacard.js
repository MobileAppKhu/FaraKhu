import React, {useState, useEffect} from 'react';
import styles from './styles';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import {Icon} from 'react-native-elements';
import RNFS from 'react-native-fs';

export function getImageFilePath(imageName, extension) {
  const FILE = Platform.OS === 'ios' ? '' : 'file://';
  return FILE + RNFS.CachesDirectoryPath + '/' + imageName + '.' + extension;
}

export function downloadPhoto(avatarId) {
  return new Promise(resolve => {
    fetch(
      'https://api.farakhu.markop.ir/api/File/Download' + '?FileId=' + avatarId,
    )
      .then(response => {
        if (response.status === 200) {
          console.log('getting data was successfull');
          const fileNameWithPath = getImageFilePath(
            avatarId,
            response.headers.map['content-type'].split('/').pop(),
          );
          console.log('filenamepath: ' + fileNameWithPath);
          RNFS.exists(fileNameWithPath)
            .then(file => {
              if (file) {
                console.log('file is existed');
                resolve(fileNameWithPath);
              } else {
                console.log('file is donwloading');
                RNFS.downloadFile({
                  fromUrl:
                    'https://api.farakhu.markop.ir/api/File/Download' +
                    '?FileId=' +
                    avatarId,
                  toFile: fileNameWithPath,
                })
                  .promise.then(res => {
                    console.log(res);
                    resolve(fileNameWithPath);
                  })
                  .catch(err => console.log('downloadFile:', err));
              }
            })
            .catch(err => console.log('exist: ', err));
        } else {
          resolve(null);
        }
      })
      .catch(err => console.log('fetch: ', err));
  });
}

export function BookImage({avatarId, style}) {
  const [imageAddress, setImageAddress] = useState(null);
  useEffect(() => {
    downloadPhoto(avatarId).then(imagePath => {
      setImageAddress(imagePath);
    });
  }, [avatarId]);

  return (
    <>
      {imageAddress == null && (
        <Icon
          type={'feather'}
          name={'camera-off'}
          size={60}
          color={
            window.Theme === 'dark' ? 'rgba(0,173,181,0.5)' : 'rgb(238,238,238)'
          }
        />
      )}
      {imageAddress != null && (
        <Image style={style} source={{uri: imageAddress}} />
      )}
    </>
  );
}

export default function BookPlacard({title, price, avatarId, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={[
          styles.bookPlacard,
          {
            backgroundColor:
              window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(255,255,255)',
            borderColor:
              window.Theme === 'dark'
                ? 'rgba(0,173,181,0.5)'
                : 'rgba(112,112,112,0.2)',
          },
        ]}>
        <View style={styles.placardDescription}>
          <Text
            style={{
              fontFamily: 'Samim',
              fontSize: 16,
              color: window.Theme === 'dark' ? 'white' : 'black',
              textAlign: 'right',
            }}>
            {title}
          </Text>
          <View style={styles.bookPriceConatiner}>
            <Text
              style={{
                fontFamily: 'Samim',
                fontSize: 12,
                color: window.Theme === 'dark' ? 'white' : 'black',
              }}>
              قیمت:
            </Text>
            <Text style={styles.bookPrice}>{price} تومان</Text>
          </View>
        </View>
        <View
          style={[
            styles.placardImageConatiner,
            {
              borderColor:
                window.Theme === 'dark'
                  ? 'rgba(0,173,181,0.2)'
                  : 'rgba(112,112,112, 0.2)',
            },
          ]}>
          <BookImage avatarId={avatarId} style={styles.placardImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
