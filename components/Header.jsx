import {Text, View, StyleSheet} from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Слава УкраЇні!!!</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2ebedb',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        flexDirection: 'row'
    },
    text: {
        color: '#f5de5b',
        fontWeight: '700'
    }
})