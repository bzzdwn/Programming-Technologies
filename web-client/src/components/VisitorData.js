function VisitorData(props) {

    const { visitors } = props

    if (!visitors || visitors.length === 0) return <p>Нет данных.</p>

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>address</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map((person) =>
                            <tr key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.address}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
      </div>
    )
}

export default VisitorData