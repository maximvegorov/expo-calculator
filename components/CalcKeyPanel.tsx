import {CalcKey, OnKeyPress} from "./CalcKey";
import {StyleSheet, View} from "react-native";
import {DECIMAL_SEPARATOR} from "../constants/decimal-separator";
import * as commands from "../constants/commands"

export interface CalcKeyPanelProps {
    onKeyPress: OnKeyPress;
}

export function CalcKeyPanel({onKeyPress}: CalcKeyPanelProps) {
    return (
        <View style={styles.panel}>
            <View style={styles.row}>
                <CalcKey label='C' code={commands.CLEAR} onKeyPress={onKeyPress}/>
                <CalcKey label='⌫' code={commands.POP} onKeyPress={onKeyPress}/>
                <CalcKey label='%' onKeyPress={onKeyPress}/>
                <CalcKey label='*' onKeyPress={onKeyPress}/>
            </View>
            <View style={styles.row}>
                <CalcKey label='7' onKeyPress={onKeyPress}/>
                <CalcKey label='8' onKeyPress={onKeyPress}/>
                <CalcKey label='9' onKeyPress={onKeyPress}/>
                <CalcKey label='/' onKeyPress={onKeyPress}/>
            </View>
            <View style={styles.row}>
                <CalcKey label='4' onKeyPress={onKeyPress}/>
                <CalcKey label='5' onKeyPress={onKeyPress}/>
                <CalcKey label='6' onKeyPress={onKeyPress}/>
                <CalcKey label='+' onKeyPress={onKeyPress}/>
            </View>
            <View style={styles.row}>
                <CalcKey label='1' onKeyPress={onKeyPress}/>
                <CalcKey label='2' onKeyPress={onKeyPress}/>
                <CalcKey label='3' onKeyPress={onKeyPress}/>
                <CalcKey label='-' onKeyPress={onKeyPress}/>
            </View>
            <View style={styles.row}>
                <CalcKey label='00' onKeyPress={onKeyPress}/>
                <CalcKey label='0' onKeyPress={onKeyPress}/>
                <CalcKey label={DECIMAL_SEPARATOR} code='.' onKeyPress={onKeyPress}/>
                <CalcKey label='=' code={commands.EVAL} onKeyPress={onKeyPress}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        gap: 10,
        justifyContent: 'space-evenly',
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        gap: 10,
        justifyContent: 'space-evenly'
    }
});
