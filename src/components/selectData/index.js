import React from 'react';

const SelectData = ({onSelect}) => {
    const smallData = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    const bigData = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    return (
        <div className='jumbotron'>
            <h1 className="display-4">Sortable List</h1>
            <p className="lead">Simple table with search, filters. If click on row, under table display more details.If click on "add" button, will be show modal window with form.</p>
            <hr className="my-4"/>
            <p>Please choose how much data to display.</p>
            <div>
                <button onClick={() => onSelect(smallData)} className="btn btn-success ">show Small data(32 elements)</button>
                <button onClick={() => onSelect(bigData)} className="btn btn-danger m-2">show Big data(1000 elements)</button>
            </div>
        </div>
    )
};
export default SelectData;
