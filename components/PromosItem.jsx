import React from "react";
import { Image , TouchableOpacity , View , StyleSheet} from "react-native";
function PromoItem (props){
    return (
        <View style={{ width:100 }}>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={{
              uri: props.img
            }}
            style={style.Images}
          ></Image>
        </TouchableOpacity>
        </View>
    );
}
const style = StyleSheet.create({
    Images: {
        width: "100%",
        height: 90,
        borderRadius: 10,
      },
});
export default PromoItem;