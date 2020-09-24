import React, {useEffect, useState} from 'react';
import {orderBy} from 'lodash'

import Table from "./components/table";
import Pagination from "./components/table/pagination";
import ViewTableRow from "./components/table/viewTableRow"
import Search from "./components/table/search";
import Modal from "./components/modal";
import AddForm from "./components/form";

import './app.css'

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(50)
    const [row, setRow] = useState(null)
    const [searchData, setSearchData] = useState(null)

    const [isOpen, setIsOpen] = useState(false)

    const [newIdValue, setNewIdValue] = useState('')
    const [newFirstNameValue, setNewFirstNameValue] = useState('')
    const [newLastNameValue, setNewLastNameValue] = useState('')
    const [newEmailValue, setNewEmailValue] = useState('')
    const [newPhoneValue, setNewPhoneValue] = useState('')
    const [formIdError, setIdError] = useState('')
    const [formFirstNameError, setFirstNameError] = useState('')
    const [formLastNameError, setLastNameError] = useState('')
    const [formEmailError, setEmailError] = useState('')
    const [formPhoneError, setPhoneError] = useState('')
    const [formIdInput, setFormIdInput] = useState('')
    const [formFirstNameInput, setFormFirstNameInput] = useState('')
    const [formLastNameInput, setFormLastNameInput] = useState('')
    const [formEmailInput, setFormEmailInput] = useState('')
    const [formPhoneInput, setFormPhoneInput] = useState('')

    const [sort, setSort] = useState('')
    const [sortByField, setSortByField] = useState('id')

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch(` http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
            const data = await response.json()
            setData(data)
            setLoading(false)
        }

        fetchData();
        console.log(123)
    }, [])

    const openModal = () => {
        setIsOpen(true)
    }

    const formValidation = () => {
        if (newIdValue === '') {
            setIdError('id не может быть пустым')
            setFormIdInput('form-error')
        } else if (!/^[0-9]+$/.test(newIdValue)) {
            setIdError('в строке не может быть букв')
            setFormIdInput('form-error')
        } else {
            setIdError('')
            setFormIdInput('form-success')
        }

        if (newFirstNameValue === '') {
            setFirstNameError('firstName не может быть пустым')
            setFormFirstNameInput('form-error')
        } else {
            setFirstNameError('')
            setFormFirstNameInput('form-success')
        }

        if (newLastNameValue === '') {
            setLastNameError('lastName не может быть пустым')
            setFormLastNameInput('form-error')
        } else {
            setLastNameError('')
            setFormLastNameInput('form-success')
        }

        if (newEmailValue === '') {
            setEmailError('email не может быть пустым')
            setFormEmailInput('form-error')
        } else if (!/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm.test(newEmailValue)) {
            setEmailError('email не корректен')
            setFormEmailInput('form-error')
        } else {
            setEmailError('')
            setFormEmailInput('form-success')
        }

        if (newPhoneValue === '') {
            setPhoneError('phone не может быть пустым')
            setFormPhoneInput('form-error')
        } else if (!/^[0-9]+$/.test(newPhoneValue)) {
            setPhoneError('phone не должен содержать букв')
            setFormPhoneInput('form-error')
        } else {
            setPhoneError('')
            setFormPhoneInput('form-success')
        }


    }

    const handleSubmit = (event) => {
        event.preventDefault()
        formValidation()
        console.log('Submit function!');

        const newRow = {
            id: newIdValue,
            firstName: newFirstNameValue,
            lastName: newLastNameValue,
            email: newEmailValue,
            phone: newPhoneValue,
        }
        console.log(newRow)
        data.unshift(newRow)
        // setIsOpen(false);

    }


    const handleCancel = () => {
        console.log('Cancel function!');
        setIsOpen(false);
    }

// Get current post
    const indexOfLastPost = currentPage * itemsPerPage
    const indexOfFirstPost = indexOfLastPost - itemsPerPage
    let currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

// Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const onRowSelect = row => {
        setRow(row)
    }

    const onSort = sortField => {

        const cloneData = data.concat();
        const sortType = sort === 'asc' ? 'desc' : 'asc';
        const orderedData = orderBy(cloneData, sortField, sortType);

        setData(orderedData)
        setSort(sortType)
        setSortByField(sortField)
    }


    const searchHandler = (search) => {
        setSearchData(search)
    }
    const getFilteredData = () => {
        if (!searchData) {
            return data.slice(indexOfFirstPost, indexOfLastPost)
        }
        let result = data.filter(item => {
            return (
                item["firstName"].toLowerCase().includes(searchData.toLowerCase()) ||
                item["lastName"].toLowerCase().includes(searchData.toLowerCase()) ||
                item["email"].toLowerCase().includes(searchData.toLowerCase())
            );
        });
        if (!result.length) {
            result = []
        }
        return result.slice(indexOfFirstPost, indexOfLastPost)
    }


    return (
        <div className='container'>
            <h1 className='text-center'>Sortable List</h1>
            <button type="button" className="btn btn-primary btn-lg">Отобразить мало данных</button>
            <button type="button" className="btn btn-primary btn-lg">Отобразить много данных</button>

            <Search onSearch={searchHandler}/>
            <button type="button" className="btn btn-primary" onClick={openModal}>Добавить</button>
            <Modal
                title="Add new row in table"
                isOpen={isOpen}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
            >
                <form>
                    <div className="form-group">
                        <label htmlFor="form-lase-name">id</label>
                        <input type="email" className={"form-control " + formIdInput} id="form-id" value={newIdValue}
                               onChange={event => setNewIdValue(event.target.value)}/>
                        <div className="form-error-info">
                            {formIdError}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-first-name">firstName</label>
                        <input type="text" className={"form-control " + formFirstNameInput} id="form-first-name"
                               value={newFirstNameValue} onChange={event => setNewFirstNameValue(event.target.value)}/>
                        <div className="form-error-info">
                            {formFirstNameError}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-lase-name">lastName</label>
                        <input type="text" className={"form-control " + formLastNameInput} id="form-lase-name"
                               value={newLastNameValue} onChange={event => setNewLastNameValue(event.target.value)}/>
                        <div className="form-error-info">
                            {formLastNameError}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-email">email</label>
                        <input type="text" className={"form-control " + formEmailInput} id="form-email"
                               value={newEmailValue} onChange={event => setNewEmailValue(event.target.value)}/>
                        <div className="form-error-info">
                            {formEmailError}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-phone">phone</label>
                        <input type="text" className={"form-control " + formPhoneInput} id="form-phone"
                               value={newPhoneValue} onChange={event => setNewPhoneValue(event.target.value)}/>
                        <div className="form-error-info">
                            {formPhoneError}
                        </div>
                    </div>
                </form>
            </Modal>
            <Table posts={getFilteredData()} loading={loading} onRowSelect={onRowSelect} onSort={onSort} sort={sort} sortField={sortByField}/>
            <Pagination
                postsPerPage={itemsPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />
            {row ? <ViewTableRow person={row}/> : null}
        </div>
    );
}

export default App;

