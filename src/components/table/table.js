import React from "react";
import {isEmpty} from 'lodash'

import Spinner from "../spinner";

const Table = ( {posts, loading, onRowSelect, onSort, sort,sortField}) => {

    if (loading) {
        return <Spinner/>
    }

    if (!loading && isEmpty(posts)){
        return <h2>По вашему запросу ничего не найдено</h2>
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
};


export default Table
