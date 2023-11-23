import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import Note from "./note";


export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteArray: [],
      noteText: "",
    };
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My To-Do Lists</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="Add a list"
            placeholderTextColor="#666666"
            underlineColorAndroid="transparent"
          ></TextInput>
        </View>

        <TouchableOpacity
          onPress={this.addTask.bind(this)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
  addTask() {
    if (this.state.noteText) {
      var date = new Date();

      this.state.noteArray.push({
        date:
          date.getFullYear() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getDate(),
        note: this.state.noteText,
      });

      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: this.state.noteText });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFA6CA",
  },
  header: {
    backgroundColor: "#BFA6CA",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "#4C1C5F",
    fontSize: 20,
    fontWeight: "bold",
    padding: 25,
    marginTop:30.
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "#000",
    padding: 20,
    backgroundColor: "#E7E6E7",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#4C1C5F",
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
});
