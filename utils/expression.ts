export type Value = undefined | number | Error;

export class Expression {
    public readonly display: string;
    public readonly value: Value;

    private constructor(display: string, value?: number) {
        this.display = display;
        this.value = value !== undefined ? value : calcValue(display);
    }

    public static empty(): Expression {
        return new Expression('');
    }

    public push(c: string): Expression {
        return new Expression(this.display + c);
    }

    public pop(): Expression {
        if (this.display === '') {
            return this;
        }

        return new Expression(this.display.slice(0, this.display.length - 1));
    }

    public eval() {
        if (typeof this.value !== 'number') {
            return this;
        }

        return new Expression(this.value.toString(), this.value);
    }
}

function calcValue(str: string): Value {
    if (str === '') {
        return undefined;
    }

    try {
        return new Function('return ' + str).call(undefined) as number
    } catch (e) {
        return new Error('Invalid expression');
    }
}
