export const getWithNewData = (oldData, newData, fieldName) => {
    const namesMap = new Map();
    const oldDataClone = JSON.parse(JSON.stringify(oldData));
    const resutArray = []
    newData.map(e=>{
        namesMap.set(e.name, e)
    })
    while(oldDataClone.length > 0){
        const nextEl = oldDataClone.pop()
        const name = namesMap.get(nextEl.name)
        if(name !== undefined){
            resutArray.push({...nextEl, [fieldName]: nextEl[fieldName]})
        }else{
            resutArray.push({nextEl})
        }

    }

    
    return resutArray
} 