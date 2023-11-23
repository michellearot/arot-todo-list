import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>

        <View style={styles.pinnedIcon}>
          <FontAwesome name="thumb-tack" size={30} color="#fff" />
        </View>

        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <IconButton
            style={styles.noteDeleteText}
            icon="trash-can"
            iconColor="#4C1C5F"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pinnedIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    top: 10,
    bottom: 10,
    left: 5,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1, 
  },
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
  },
  noteText: {
    paddingLeft: 50,
    fontWeight: "bold",
    color: "#fff",
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 5,
  },
  noteDeleteText: {
    marginRight: 10,
  },
});
