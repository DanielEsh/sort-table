import React, {useState} from 'react';
import {orderBy} from 'lodash';

import Table from "./components/table/table";
import Pagination from "./components/table/pagination";
import RowDetails from "./components/table/rowDetails"
import Search from "./components/table/search";
import Modal from "./components/modal";
import AddForm from "./components/form";
import SelectData from "./components/selectData";

import './app.css';

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(50);
    const [pagination, setPagination] = useState(true);
    const [row, setRow] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [sort, setSort] = useState('');
    const [sortByField, setSortByField] = useState('id');
    const [selectData, setSelectData] = useState(false);

    const fetchData = async (url) => {
        setLoading(true);
        setSelectData(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
    };
    // Modal
    const openModal = () => {
        setIsOpen(true);
    };

    const addRowInData = (newRow) => {
        data.unshift(newRow);
        setIsOpen(false);

    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    // Get current post
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const onRowSelect = row => {
        setRow(row);
    };

    // Sort
    const onSort = sortField => {

        const cloneData = data.concat();
        const sortType = sort === 'asc' ? 'desc' : 'asc';
        const orderedData = orderBy(cloneData, sortField, sortType);

        setData(orderedData);
        setSort(sortType);
        setSortByField(sortField);
    };

    // Search
    const searchHandler = (search) => {
        search.length ? setPagination(false) : setPagination(true);
        setSearchData(search);
    };

    const getSearchedData = () => {
        if (!searchData) {
            return data.slice(indexOfFirstPost, indexOfLastPost);
        }
        let result = data.filter(item => {
            return (
                item["firstName"].toLowerCase().includes(searchData.toLowerCase()) ||
                item["lastName"].toLowerCase().includes(searchData.toLowerCase()) ||
                item["email"].toLowerCase().includes(searchData.toLowerCase())
            );
        });
        if (!result.length) {
            result = [];
        }
        return result.slice(indexOfFirstPost, indexOfLastPost);

    };

    if(!selectData){
        return (
            <div className="container">
                <SelectData onSelect={fetchData}/>
            </div>
        )
    }

    return (
        <div className="container">
            <SelectData onSelect={fetchData}/>
            <div className='table-header col-lg-12'>
                <Search onSearch={searchHandler}/>
                <div>
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={openModal}>add new row +</button>
                </div>
            </div>

            <Modal
                title="Add new row in table"
                isOpen={isOpen}
                onCancel={handleCancel}
                onSubmit={addRowInData}
            >
                <AddForm onSubmit={addRowInData}/>
            </Modal>


            <Table posts={getSearchedData()}
                   loading={loading}
                   onRowSelect={onRowSelect}
                   onSort={onSort}
                   sort={sort}
                   sortField={sortByField}
            />

            {pagination ? <Pagination postsPerPage={itemsPerPage} totalPosts={data.length} paginate={paginate}/> : null}

            {row ? <RowDetails person={row}/> : null}
        </div>
    );
};

export default App;

