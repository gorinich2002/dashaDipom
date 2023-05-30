export const getLineData = (dataStr, fieldName) =>{
    console.log('dataStr',dataStr)
    const strings = dataStr.split('\n')
    return strings.map(e=>({name: e.split(' ')[0], [fieldName]: e.split(' ')[1]}))
}