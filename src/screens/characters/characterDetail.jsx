import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {screenStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleCharacter, resetData} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import { characterStyle } from '../../styles/characterStyle';
import { statusTypes } from '../../utils/constants';
import Colors from '../../theme/colors';

const CharacterDetail = ({route}) => {
  // route'un altındaki paramsın içinde, gelinen screen'den yolladığımız characterID var.
  const {characterID} = route?.params;
  // console.log(characterID);

  const dispatch = useDispatch();
  const {pendingSingleCharacter, singleCharacter} = useSelector(state => state.characters);

  useEffect(() => {
    dispatch(getSingleCharacter(characterID));

    // başka ekrana geçince veriler de silinsin istedik
    return ()=> {
        dispatch(resetData());
    }
  }, []);
  /*
  * Bu useEffect sadece component monte edildiğinde (ilk render) çalışır ve bir abonelik 
  veya event listener gibi sürekli takip edilmesi gereken bir işlem başlatmıyor. 
  Dolayısıyla, return ile bir cleanup işlemi yapmanın burada bir faydası yoktur.
  */

  const originalDate = singleCharacter.created; // apiden gelen tarihi al değişken at
  const dateObj = new Date(originalDate);
  // Tarihi gün-ay-yıl şeklinde formatla
  const formattedDate = `${dateObj.getDate().toString()}-${(dateObj.getMonth() + 1).toString()}-${dateObj.getFullYear()}`;


  return (
    <View style={screenStyle.container}>
      {pendingSingleCharacter ? (
        <Spinner />
      ) : (
        // * liste gösterirken array olduğu için Flatlist kullanıyoruz ama burada
        // scroolview kullanıyoruz. artık bir liste yok burada. burası tek bir obje.
        <ScrollView>
          <View style={characterStyle.imgContainer}>
            <Image source={{uri: singleCharacter.image}} 
            style={[characterStyle.image, singleCharacter.status === statusTypes.ALIVE ? characterStyle.statusAliveBorder : characterStyle.statusDeadBorder]} />
            {/* style'ın içine böyle dizi açıp virgül ile ayırdığımızda 2 tane style alsın demiş olduk !! */}

            <View style={singleCharacter.status === statusTypes.ALIVE ? characterStyle.aliveStatusContainer : characterStyle.deadStatusContainer}>
                <Text style={characterStyle.status}>{singleCharacter.status}</Text>
            </View>
          </View>

        {/* character name */}
        <View style={characterStyle.nameContainer}>
          <Text style={characterStyle.name}>{singleCharacter.name}</Text>
        </View>

        {/* properties */}
        <View style={characterStyle.sectionContainer}>
            <Text style={characterStyle.sectionTitle}>PROPERTIES</Text>
            <View style={characterStyle.rowContainer}>
                <View style={characterStyle.infoContainer}>
                    <Text>Gender</Text>
                </View>
                <View style={characterStyle.infoBox}>
                    <Text>{singleCharacter.gender}</Text>
                </View>
            </View>
            <View style={characterStyle.rowContainer}>
                <View style={characterStyle.infoContainer}>
                    <Text>Species</Text>
                </View>
                <View style={characterStyle.infoBox}>
                    <Text>{singleCharacter.species}</Text>
                </View>
            </View>
            <View style={characterStyle.rowContainer}>
                <View style={characterStyle.infoContainer}>
                    <Text>Status</Text>
                </View>
                <View style={characterStyle.infoBox}>
                    <Text>{singleCharacter.status}</Text>
                </View>
            </View>
        </View>

        {/* whereabouts */}
        <View style={characterStyle.sectionContainer}>
            <Text style={characterStyle.sectionTitle}>WHEREABOUTS</Text>
            <View style={characterStyle.rowContainer}>
                <View style={characterStyle.infoContainer}>
                    <Text>Origin</Text>
                </View>
                <View style={characterStyle.infoBox}>
                    {/* obje içindeki verileri okuyorsak ? koymayı unutma. olmayadabilir undefined olur ve patlar uygulama !! */}
                    <Text>{singleCharacter?.origin?.name}</Text>
                </View>
            </View>
            <View style={characterStyle.rowContainer}>
                <View style={characterStyle.infoContainer}>
                    <Text>Location</Text>
                </View>
                <View style={characterStyle.infoBox}>
                    <Text>{singleCharacter?.location?.name}</Text>
                </View>
            </View>
        </View>

        {/* featured chapters */}
        <View style={characterStyle.sectionContainer}>
            <Text style={characterStyle.sectionTitle}>CREATED</Text>
            <View style={characterStyle.rowContainer}>
                <View style={characterStyle.infoContainer}>
                    <Text>Created</Text>
                </View>
                <View style={characterStyle.infoBox}>
                    <Text>{formattedDate}</Text>
                </View>
            </View>
        </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetail;
