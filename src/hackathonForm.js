// import { React } from 'react';
// import { useState } from 'react';
// import { useDispatch,useSelector } from 'react-redux';


// const HackathonForm = () => {

//     let formData=useSelector(state=>state.HackathonForm);
//     let [finfo,pickInfo]=useState({});

//     const pickValue=(obj)=>{
//         finfo[obj.target.name]= obj.target.value;
//         pickInfo(finfo);

//     }

//     let dispatch=useDispatch();
//     const save=(object)=>{
//         object.preventDefault()  //prevent from page reloading
//         // console.log(pinfo);
//         let dispatchData={type:"newchallenge", formdata:finfo};
//         dispatch(dispatchData);
//         pickInfo({});
//         object.target.reset() //clear the form

//     }
//     return (
//         <div className='container'>
//             <div className='row '>
//                 <div className='col-lg-12 bg-light'>
//                     <h1 className='text-center'>Create New Challenge</h1>
//                 </div>
//                 <form onSubmit={save}>
//                     <div className='row'>
//                         <div className='col-lg-2'></div>
//                         <div className='col-lg-7'>
//                             <div className='mb-4'>
//                                 <label>Challange Name</label>
//                                 <input type='text' className='form-control' placeholder='Enter challange...' name='challenge' onChange={pickValue} />
//                             </div>
//                             <div className='mb-4'>
//                                 <label>Start Date</label>
//                                 <input type='date' className='form-control' placeholder='Add start date....' name='sdate' onChange={pickValue} />
//                             </div>
//                             <div className='mb-4'>
//                                 <label>End Date</label>
//                                 <input type='date' className='form-control' placeholder='Add end date...' name='edate' onChange={pickValue} />
//                             </div>
//                             <div className='mb-4'>
//                                 <label>Description</label><br />
//                                 <textarea type="text" cols={70} rows={10} name='description' onChange={pickValue}></textarea>
//                             </div>
//                             <div className='mb-4'>
//                                 <label>Image</label>
//                                 <br />
//                                 <button type='submit' className='bg-light rounded' name='image' onChange={pickValue}>
//                                     <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
//                                         xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M17.3654 10.186C16.9648 7.03087 14.2634 4.58337 11 4.58337C8.47371 4.58337 6.27921 6.06012 5.27729 8.38754C3.30829 8.97604 1.83337 10.835 1.83337 12.8334C1.83337 15.3606 3.88946 17.4167 6.41671 17.4167H16.5C18.5222 17.4167 20.1667 15.7722 20.1667 13.75C20.1653 12.9283 19.8886 12.1308 19.3808 11.4848C18.8731 10.8388 18.1635 10.3815 17.3654 10.186ZM11.9167 12.8334V15.5834H10.0834V12.8334H7.33337L11 8.25004L14.6667 12.8334H11.9167Z" fill="#666666" />
//                                     </svg>
//                                     Upload</button>

//                             </div>
//                             <div className='mb-4'>
//                                 <label>Level Type</label>
//                                 <select className='form-control' name='level' onChange={pickValue}>
//                                     <option value="">filter</option>
//                                     <option>Easy</option>
//                                     <option>Medium</option>
//                                     <option>Hard</option>
//                                 </select>
//                             </div>
//                             <div className='mb-4'>
//                                 <button className='btn btn-success'>Create Challange</button>
//                             </div>
//                         </div>
//                         <div className='col-lg-3'>     
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )

// }
// export default HackathonForm;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const HackathonForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    // Select form data from the Redux store
    const formDataList = useSelector(state => state.FormData);
    const existingData = id !== undefined ? formDataList[parseInt(id)] : null;

    const [formData, setFormData] = useState({
        challenge: '',
        sdate: '',
        edate: '',
        description: '',
        level: '',
        image: ''
    });

    useEffect(() => {
        if (existingData) {
            setFormData(existingData);
        }
    }, [existingData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id !== undefined) {
            dispatch({ type: 'editchallenge', index: parseInt(id), updatedData: formData });
        } else {
            dispatch({ type: 'newchallenge', formdata: formData });
        }
        navigate('/detailsForm');
    };

    return (
        <div className='container'>
            <h1 className='text-center'>{id !== undefined ? 'Edit Challenge' : 'Create New Challenge'}</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label>Challenge Name</label>
                    <input type='text' className='form-control' placeholder='Enter challenge...' name='challenge' 
                    value={formData.challenge} onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label>Start Date</label>
                    <input type='date' className='form-control' name='sdate'
                        value={formData.sdate} onChange={handleChange}/>
                </div>
                <div className='mb-4'>
                    <label>End Date</label>
                    <input
                        type='date' className='form-control' name='edate'
                        value={formData.edate} onChange={handleChange}/>
                </div>
                <div className='mb-4'>
                    <label>Description</label><br />
                    <textarea cols={80} rows={10} name='description'
                     value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div className='mb-4'>
                    <label>Image</label><br />
                    <input type='file' name='image'
                        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}/>
                </div>
                <div className='mb-4'>
                    <label>Level Type</label>
                    <select className='form-control' name='level' value={formData.level} onChange={handleChange}>
                        <option value="">Select Level</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <button type='submit' className='btn btn-success'>
                        {id !== undefined ? 'Update Challenge' : 'Create Challenge'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HackathonForm;

