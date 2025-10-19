import {Button} from "react-native-paper";
import {GestureResponderEvent, StyleSheet} from "react-native";

export type OnKeyPress = (c: string) => void;

export interface CalcKeyProps {
    label: string;
    code?: string;
    onKeyPress: (c: string) => void;
}

export function CalcKey({label, code, onKeyPress}: CalcKeyProps) {
    function onButtonPressed(e: GestureResponderEvent) {
        e.preventDefault();
        onKeyPress(code === undefined ? label : code);
    }

    return (
        <Button mode='contained' style={styles.calcKey} onPress={onButtonPressed}>{label}</Button>
    );
}

const styles = StyleSheet.create({
    calcKey: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
});
