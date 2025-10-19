import {StyleProp, StyleSheet, TextStyle} from "react-native";
import {Text, useTheme} from "react-native-paper";
import {Value} from "../utils/expression";

export interface ExpressionValueProps {
    value: Value;
}

const FORMATTER = Intl.NumberFormat(undefined, {style: "decimal", maximumFractionDigits: 16});

export function ExpressionValue({value}: ExpressionValueProps) {
    const theme = useTheme();

    let valueStyle: StyleProp<TextStyle> = [styles.value];
    let formattedValue: string;
    if (value === undefined) {
        formattedValue = '= 0'
    } else if (typeof value === 'number') {
        formattedValue = '= ' + FORMATTER.format(value);
        valueStyle.push({color: theme.colors.onPrimary});
    } else {
        formattedValue = '= NaN';
        valueStyle.push({color: theme.colors.onError});
    }

    return <Text style={valueStyle} variant="labelLarge">{formattedValue}</Text>;
}

const styles = StyleSheet.create({
    value: {
        textAlign: 'right',
    },
});
