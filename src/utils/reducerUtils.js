export const updateObjectsInArray = (items, itemId, objPropsName, newObjProp) => {
    return items.map(u => {
        if (u[objPropsName] === itemId) {
            return {...u, ...newObjProp}
        }
        return u;
    })
}
