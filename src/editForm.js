
const EditForm = () => {

    return (
        <div className='row '>
            <div className='col-lg-12 bg-light'>
                <h1 className='text-center'>Edit the Challenge</h1>
            </div>
            <form>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <div className='mb-4'>
                            <label>Challange Name</label>
                            <input type='text' className='form-control' placeholder='Enter challange...' name='challenge' />
                        </div>
                        <div className='mb-4'>
                            <label>Start Date</label>
                            <input type='date' className='form-control' placeholder='Add start date....' name='sdate' />
                        </div>
                        <div className='mb-4'>
                            <label>End Date</label>
                            <input type='date' className='form-control' placeholder='Add end date...' name='edate' />
                        </div>
                        <div className='mb-4'>
                            <label>Description</label><br />
                            <textarea type="text" cols={80} rows={10} name='description' ></textarea>
                        </div>
                        <div className='mb-4'>
                            <label>Image</label>
                            <br />
                            <button type='submit' className='bg-light rounded' name='image' >
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3654 10.186C16.9648 7.03087 14.2634 4.58337 11 4.58337C8.47371 4.58337 6.27921 6.06012 5.27729 8.38754C3.30829 8.97604 1.83337 10.835 1.83337 12.8334C1.83337 15.3606 3.88946 17.4167 6.41671 17.4167H16.5C18.5222 17.4167 20.1667 15.7722 20.1667 13.75C20.1653 12.9283 19.8886 12.1308 19.3808 11.4848C18.8731 10.8388 18.1635 10.3815 17.3654 10.186ZM11.9167 12.8334V15.5834H10.0834V12.8334H7.33337L11 8.25004L14.6667 12.8334H11.9167Z" fill="#666666" />
                                </svg>
                                Upload</button>

                        </div>
                        <div className='mb-4'>
                            <label>Level Type</label>
                            <select className='form-control' name='level' >
                                <option value="">filter</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <button className='btn btn-success'>Create Challange</button>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                    </div>
                </div>
            </form>
        </div>

    )

}

export default EditForm;