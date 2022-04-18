export const parseColors = colors => {
    const handleExceptions = x => {
        switch (x) {
            case 'Navy Blue':
                return 'navy'
            case 'Sky Blue':
                return 'skyblue'
            default:
                return x
        }
    }
    const arr = colors.split(' / ')
    const parsedArr = arr.reduce((acc, v) => {
        return [...acc, handleExceptions(v)]
    }, [])
    if (parsedArr.length === 2) {
        return `linear-gradient(${parsedArr[0]} 30%, ${parsedArr[1]} 40%)`
    } else {
        return `linear-gradient(${parsedArr[0]} 30%, ${parsedArr[1]} 40%, ${parsedArr[2]} 52%)`
    }
}

export const parseColorsCards = colors => {
    const handleExceptions = x => {
        switch (x) {
            case 'Navy Blue':
                return 'navy'
            case 'Sky Blue':
                return 'skyblue'
            default:
                return x
        }
    }
    const arr = colors.split(' / ')
    const parsedArr = arr.reduce((acc, v) => {
        return [...acc, handleExceptions(v)]
    }, [])
    if (parsedArr.length === 2) {
        return `linear-gradient(45deg, ${parsedArr[0]} 30%, ${parsedArr[1]} 40%, ${parsedArr[0]} 50%)`
    } else {
        return `linear-gradient(45deg, ${parsedArr[0]} 30%, ${parsedArr[1]} 40%, ${parsedArr[2]} 52%)`
    }
}