import React from "react";
import { Text , View , TouchableOpacity , StyleSheet , Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
function CategoryItem(props){
    return (
        <View style={{ marginRight:20 }} >
        <TouchableOpacity activeOpacity={0.8} style={{ alignSelf: "flex-start", }}>
          <View style={style.filterWrapper}>
            <View style={[style.filterButton , {backgroundColor : props.img == null ? '#ccc' : 'transparent'}]}>
              {
                        (props.img == null)? ( <FontAwesome name="sliders" size={25} color="black" />):(<Image source={{uri : props.img}} style = {style.Image}/>)
              }
            </View>
            <Text style={style.filterButtonText} activeOpacity={0.8}>{props.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}
const style = StyleSheet.create({
    filterWrapper: {
        width: 55,
      },
      filterButton: {
        alignItems: "center",
        justifyContent: "center",
        width: 55,
        height: 55,
        backgroundColor: "#ccc",
        borderRadius: 10,
      },
      filterButtonText: { textAlign: "center" },
      Image: {
        width: 55,
        height: 55,
      }
});
export default CategoryItem;