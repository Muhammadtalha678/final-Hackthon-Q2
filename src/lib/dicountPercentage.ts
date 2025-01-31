export const discountPercentage = (OP: number, DP: number) => {
    return '-' + (((OP - DP) / OP) * 100).toFixed(0) + '%'
}