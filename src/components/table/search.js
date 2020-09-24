import React, {useState} from 'react'

const Search = ({onSearch}) => {
    const [value, setValue] = useState('');

    const valueChangeHandler = event => {
        setValue(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(value)
    };

    return (
        <div className='table-search'>
            <div className="input-group mb-3 mt-3 ">
                <div className="input-group-prepend ">
                    <form onSubmit={handleSubmit} className='d-flex'>
                        <input
                            type="text"
                            className="form-control"
                            onChange={valueChangeHandler}
                            value={value}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type='submit'
                        >
                            Search
                        </button>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Search
