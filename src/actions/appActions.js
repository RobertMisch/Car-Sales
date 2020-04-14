export const removeFeature = (id)=>{
    console.log('remove feature working')
    return{type:'REMOVE_FEATURE', payload:id}
}
export const addFeature = (id)=>{
    console.log('add feature working')
    return{type:'ADD_FEATURE', payload:id}
}
