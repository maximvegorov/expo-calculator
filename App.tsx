import {useState} from 'react'
import {StyleSheet, View} from 'react-native';
import {PaperProvider} from "react-native-paper";
import {Expression} from "./utils/expression";
import {ExpressionDisplay} from "./components/ExpressionDisplay";
import {ExpressionValue} from "./components/ExpressionValue";
import {CalcKeyPanel} from "./components/CalcKeyPanel";
import * as commands from "./constants/commands"

export default function App() {
    const [expression, setExpression] = useState(() => Expression.empty());

    const onKeyPress = (c: string) => {
        let newExpression: Expression;
        switch (c) {
            case commands.CLEAR:
                newExpression = Expression.empty();
                break;
            case commands.POP:
                newExpression = expression.pop();
                break;
            case commands.EVAL:
                newExpression = expression.eval();
                break;
            default:
                newExpression = expression.push(c);
                break;
        }
        setExpression(newExpression)
    }

    return (
        <PaperProvider>
            <View style={styles.container}>
                <ExpressionDisplay display={expression.display}/>
                <ExpressionValue value={expression.value}/>
                <CalcKeyPanel onKeyPress={onKeyPress}/>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
        padding: 5
    },
});
