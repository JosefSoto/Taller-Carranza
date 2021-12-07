export default function RenderUsersList() {
    const UsersList = [
        { UserID: 1, imgsrc: "", UserName: "Juan Carlos Bodoque", Document: "1010001111", telephone: "6325148741", email: "email@email.co", UserType: "Planta" },
        { UserID: 2, imgsrc: "", UserName: "Maria Camila Garcia", Document: "1010001111", telephone: "6325148741", email: "email@email.co", UserType: "Planta" },
        { UserID: 3, imgsrc: "", UserName: "Johana Maria Campos", Document: "1010001111", telephone: "6325148741", email: "email@email.co", UserType: "Planta" },
        { UserID: 4, imgsrc: "", UserName: "Camila Garcia Gaitan", Document: "1010001111", telephone: "6325148741", email: "email@email.co", UserType: "Planta" },
    ]

    return (
        <>
            {UsersList.map(item => (
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td key={item.UserID}>{item.imgsrc}</td>
                    <td key={item.UserID}>{item.UserName}</td>
                    <td key={item.UserID}>{item.Document}</td>
                    <td key={item.UserID}>{item.telephone}</td>
                    <td key={item.UserID}>{item.email}</td>
                    <td key={item.UserID}>{item.UserType}</td>
                </tr>
            ))}
        </>
    );
}