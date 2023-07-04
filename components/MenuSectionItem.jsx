import React from "react";
import {  TouchableOpacity , View , StyleSheet , Text} from "react-native";
function MenuSectionItem (props){
    return (
        <View style={style.menuBtn}>
        <TouchableOpacity>
          <Text>{props.title}</Text>
        </TouchableOpacity>
      </View>
    );
}
const style = StyleSheet.create({
    menuBtn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#E9E9E9",
        marginHorizontal: 5,
        borderRadius: 15,
      },
});
export default MenuSectionItem;