import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {screenStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleCharacter} from '../../store/actions/charactersActions';
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
  }, []);
  /*
  * Bu useEffect sadece component monte edildiğinde (ilk render) çalışır ve bir abonelik 
  veya event listener gibi sürekli takip edilmesi gereken bir işlem başlatmıyor. 
  Dolayısıyla, return ile bir cleanup işlemi yapmanın burada bir faydası yoktur.
  */

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

        <View style={characterStyle.nameContainer}>
          <Text style={characterStyle.name}>{singleCharacter.name}</Text>
        </View>

        <View style={characterStyle.sectionContainer}>
            <Text style={characterStyle.sectionTitle}>PROPERTIES</Text>
            <View style={{flexDirection:"row", justifyContent: "center", marginVertical: 4}}>
                <View style={{backgroundColor: Colors.BGTAB, padding: 10, borderRadius: 6, justifyContent: "center", alignItems: "center", flex: 1}}>
                    <Text>Gender</Text>
                </View>
                <View style={{backgroundColor: Colors.DETAIL2, padding: 10, marginLeft: 10, borderRadius: 6, justifyContent: "center", alignItems: "center", flex:2}}>
                    <Text>{singleCharacter.gender}</Text>
                </View>
            </View>
            <View style={{flexDirection:"row", justifyContent: "center", marginVertical: 4}}>
                <View style={{backgroundColor: Colors.BGTAB, padding: 10, borderRadius: 6, justifyContent: "center", alignItems: "center", flex: 1}}>
                    <Text>Species</Text>
                </View>
                <View style={{backgroundColor: Colors.DETAIL2, padding: 10, marginLeft: 10, borderRadius: 6, flex:2, justifyContent: "center", alignItems: "center"}}>
                    <Text>{singleCharacter.species}</Text>
                </View>
            </View>
            <View style={{flexDirection:"row", justifyContent: "center", marginVertical: 4}}>
                <View style={{backgroundColor: Colors.BGTAB, padding: 10, borderRadius: 6, justifyContent: "center", alignItems: "center", flex: 1}}>
                    <Text>Status</Text>
                </View>
                <View style={{backgroundColor: Colors.DETAIL2, padding: 10, marginLeft: 10, borderRadius: 6,justifyContent: "center", alignItems: "center", flex:2}}>
                    <Text>{singleCharacter.status}</Text>
                </View>
            </View>
        </View>

        <View style={characterStyle.sectionContainer}>
            <Text style={characterStyle.sectionTitle}>WHEREABOUTS</Text>
            <View style={{flexDirection:"row", justifyContent: "center", marginVertical: 4}}>
                <View style={{backgroundColor: Colors.BGTAB, padding: 10, borderRadius: 6, justifyContent: "center", alignItems: "center", flex: 1}}>
                    <Text>Origin</Text>
                </View>
                <View style={{backgroundColor: Colors.DETAIL2, padding: 10, marginLeft: 10, borderRadius: 6,justifyContent: "center", alignItems: "center", flex:2}}>
                    <Text>{singleCharacter.origin.name}</Text>
                </View>
            </View>
            <View style={{flexDirection:"row", justifyContent: "center", marginVertical: 4}}>
                <View style={{backgroundColor: Colors.BGTAB, padding: 10, borderRadius: 6, justifyContent: "center", alignItems: "center", flex: 1}}>
                    <Text>Location</Text>
                </View>
                <View style={{backgroundColor: Colors.DETAIL2, padding: 10, marginLeft: 10, borderRadius: 6,justifyContent: "center", alignItems: "center", flex:2}}>
                    <Text>{singleCharacter.location.name}</Text>
                </View>
            </View>
        </View>

        <View style={characterStyle.sectionContainer}>
            <Text style={characterStyle.sectionTitle}>FEATURED CHAPTERS</Text>
        </View>

        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetail;
