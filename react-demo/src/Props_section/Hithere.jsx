import myChild from '../Props_section/Child'
function Hithere() {
    const intro = {
        firstname: "Billy",
        surname: "James",
        age: 28,
        dreams: "My dream is to be a builder"

    }
    return (
        <>
        <h1> thisshould be my parent jsx </h1>
        <myChild
            name = "Harry"
        />
        </>
        )
}

export default Hithere;