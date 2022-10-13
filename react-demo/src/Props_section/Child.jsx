function Child(properties) {
    const myChild = {
        minion: ['Thom', 'Mike','Mimi'],
        age: 36

    }
    return(
        <>
        <p>{properties.minion}</p>
        <p>{properties.age}</p>
        </>
    )
}
export default Child();