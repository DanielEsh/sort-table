import React from "react";
import { useForm } from "react-hook-form";

const AddForm = ({onSubmit}) => {
    const { register,errors, handleSubmit } = useForm();

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="form-id">id</label>
                    <input type="text" className={`form-control ${errors.id ? 'form-error':''}`} id="form-id" ref={register({required: true})} name='id'/>
                    <div className="form-error-info">
                        {errors.id && "id is required"}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="form-first-name">firstName</label>
                    <input type="text" className={`form-control ${errors.firstName ? 'form-error':''}`} id="form-first-name" ref={register({required: true})} name='firstName'/>
                    <div className="form-error-info">
                        {errors.firstName && "firstName is required"}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="form-last-name">lastName</label>
                    <input type="text" className={`form-control ${errors.lastName ? 'form-error':''}`} id="form-last-name" ref={register({required: true})} name='lastName'/>
                    <div className="form-error-info">
                        {errors.lastName && "lastName is required"}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="form-email">email</label>
                    <input type="text" className={`form-control ${errors.email ? 'form-error':''}`} id="form-email" ref={register({required: true})} name='email'/>
                    <div className="form-error-info">
                        {errors.email && "email is required"}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="form-phone">phone</label>
                    <input type="text" className={`form-control ${errors.phone ? 'form-error':''}`} id="form-phone" ref={register({required: true})} name='phone'/>
                    <div className="form-error-info">
                        {errors.phone && "phone is required"}
                    </div>
                </div>

                <button type="submit" className='btn btn-success btn-block'>Submit</button>
            </form>
        </>
    );
};

export default AddForm
