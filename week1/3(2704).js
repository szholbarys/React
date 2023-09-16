var expect = function(val) {
    const throwError = (errorStr) => {throw new Error(errorStr)};
    return {
            toBe:    (val2) => val2 === val || throwError('Not Equal'),
            notToBe: (val2) => val2 !== val || throwError('Equal'),
        }
}

console.log(expect(55).notToBe(75))
