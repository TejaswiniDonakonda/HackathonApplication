// import React from 'react';
// import { useSelector,useDispatch} from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const DetailsForm = () => {
//     const formData = useSelector(state => state.FormData);
//     const navigate = useNavigate();

//     const handleEdit= (index) => {
//         navigate.push(`/edit/${index}`);
//     };
 
//     const dispatch=useDispatch()
//     const delChallenge=(index)=>{
//         dispatch({ type: 'removechallenge', index });
//     }


//     return (
//         <div className='container'>
//             <h2>Challenge Details</h2>
//             <div className='row'>
//                 {formData.length > 0 ? (
//                     formData.map((form, index) => (
//                         <div key={index} className='col-lg-4 mb-4'>
//                             <div className='card'>
//                                 <div className='card-body'>
//                                     <h5 className='card-title'>{form.challenge}</h5>
//                                     <p className='card-text'>Start Date: {form.sdate}</p>
//                                     <p className='card-text'>End Date: {form.edate}</p>
//                                     <p className='card-text'>Description: {form.description}</p>
//                                     <p className='card-text'>Level: {form.level}</p>
//                                     <p className='card-text'>Image: {form.image ? form.image : "No image uploaded"}</p>
//                                     <p>
//                                         <button className='btn btn-info me-3' onClick={()=>handleEdit(index)}>Edit</button>
//                                         <button className='btn btn-danger'onClick={()=>delChallenge(index)}>Delete</button>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No challenges available</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default DetailsForm;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DetailsForm = () => {
    const formData = useSelector(state => state.FormData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (index) => {
        navigate(`/hackathonForm/${index}`);
    };

    const handleDelete = (index) => {
        dispatch({ type: 'removechallenge', index });
    };

    return (
        <div className='container'>
            <h2>Challenge Details</h2>
            <div className='row'>
                {formData.length > 0 ? (
                    formData.map((form, index) => (
                        <div key={index} className='col-lg-4 mb-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>{form.challenge}</h5>
                                    <p className='card-text'>Start Date: {form.sdate}</p>
                                    <p className='card-text'>End Date: {form.edate}</p>
                                    <p className='card-text'>Description: {form.description}</p>
                                    <p className='card-text'>Level: {form.level}</p>
                                    <p className='card-text'>Image: {form.image ? form.image.name : "Not yet uploaded"}</p>
                                    <p>
                                        <button className='btn btn-info me-3' onClick={() => handleEdit(index)}>Edit Info</button>
                                        <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No challenges available</p>
                )}
            </div>
        </div>
    );
}

export default DetailsForm;



