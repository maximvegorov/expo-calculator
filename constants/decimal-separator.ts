export const DECIMAL_SEPARATOR = new Intl.NumberFormat(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    .format(0.0)
    .charAt(1);
