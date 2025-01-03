export const User = (props: any) => {
    const { name, age, nationality } = props;

    // console.log(props);
    // console.log(props.name);

    return (
        <div>
            <h1>Nombre: {name}</h1>
            <p>Edad: {age}</p>
            <p>Nacionalidad: {nationality}</p>
            <hr />
        </div>
    )
}