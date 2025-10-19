import {Text, useTheme} from "react-native-paper";
import {StyleProp, StyleSheet, TextStyle} from "react-native";

export interface ExpressionDisplayProps {
    display: string;
}

export function ExpressionDisplay({display}: ExpressionDisplayProps) {
    const theme = useTheme();

    const hasInput = display !== '';

    const displayStyle: StyleProp<TextStyle> = [styles.display];
    if (hasInput) {
        displayStyle.push({color: theme.colors.onPrimary})
    }
    const formattedDisplay = hasInput ? display : '0';

    return <Text style={displayStyle} variant="displayLarge">{formattedDisplay}</Text>
}

const styles = StyleSheet.create({
    display: {
        textAlign: 'right'
    },
});
