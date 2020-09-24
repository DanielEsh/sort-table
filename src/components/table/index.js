import React from "react";

const Table = ( {posts, loading, onRowSelect, onSort, sort,sortField}) => {

    if (loading) {
        return <h2>Loading...</h2>
    }
    const sortById = (id) => {
        console.log('Сортировка по ID')
        console.log(posts)
        return posts.sort((a,b)=> {
            console.log(a[id])
            if (a.id < b.id ){
                return -1
            }
            if (a.id  > b.id ){
                return 1
            }
            return 0
        })
    }

    return (
        <div>
            <div className='col-lg-12'>
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th onClick={onSort.bind(null, "id")}>
                            ID {sortField === "id" ? <small>{sort}</small> : null}
                        </th>
                        <th onClick={onSort.bind(null, "firstName")}>
                            First Name{" "}
                            {sortField === "firstName" ? <small>{sort}</small> : null}
                        </th>
                        <th onClick={onSort.bind(null, "lastName")}>
                            Last Name{" "}
                            {sortField === "lastName" ? <small>{sort}</small> : null}
                        </th>
                        <th onClick={onSort.bind(null, "email")}>
                            E-mail{" "}
                            {sortField === "email" ? <small>{sort}</small> : null}
                        </th>
                        <th onClick={onSort.bind(null, "phone")}>
                            Phone{" "}
                            {sortField === "phone" ? <small>{sort}</small> : null}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    { posts.map(item =>(
                        <tr key={item.id + item.phone} onClick={onRowSelect.bind(null, item)}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default Table
