// #3 Uploading Files and Images to Firebase Cloud Storage in React Native
// https://aboutreact.com/react-native-firebase-cloud-storage/

// Import React in our code
import React from "react";

// Import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={(style = styles.container)}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>
          Uploading Files and Images to Firebase Cloud
          Storage in React Native
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            props.navigation.navigate("UploadFileScreen")
          }
        >
          <Text style={styles.buttonTextStyle}>
            Upload File
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            props.navigation.navigate("FilesListingScreen")
          }
        >
          <Text style={styles.buttonTextStyle}>
            Uploaded File Listing
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerHeading}>
        React Native Firebase Cloud Storage
      </Text>
      <Text style={styles.footerText}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    padding: 35,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
    width: "100%",
    marginTop: 16,
  },
  footerHeading: {
    fontSize: 18,
    textAlign: "center",
    color: "grey",
  },
  footerText: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
  },
});
