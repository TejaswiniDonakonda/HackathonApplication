import { React } from 'react';
import { Link } from 'react-router-dom';
import RocketImage from './Rocket.gif';
import Image1 from './1.png';
import Image2 from './2.png';
import Image3 from './3.png';
import Image4 from './4.png';
import Image5 from './5.png';
import Image6 from './6.png';

const DashBoard = () => {
    return (
        <section>
            {/*--------------- Body starts here---------------------- */}
            <div className='body-section bg-blue text-white'>
                <div className='row'>
                    <div className='col-lg-6 mt-4 '>
                        <h1 className='mt-5 ms-4 ps-2'>Accelerate Innovation<br /> with Global AI Challenge</h1>

                        <p className='mt-4 ms-4 ps-2'>AI Challange at DPhi simulate real-world problems.<br />
                            It is a great place to put your AI/Data Science skills to test on<br />
                            diverse datasets allowing you to foster learning through competitions.
                        </p>
                        <Link to='hackathonForm' className='text-white mt-4 ms-5' ><button className='btn btn-rounded text-dark bg-white ms-3'>Create Challange</button></Link>
                    </div>
                    <div className='col-lg-6'>
                        <img className='mt-5 ms-5' src={RocketImage} style={{ height: '300px', width: '350px' }} />
                    </div>
                </div>
            </div>
            <div className='second'>
                <div className='row'>
                    <div className='col-lg-4 mt-5'style={{ display: 'grid', justifyContent: 'center',alignItems:'center'}}>
                        <center>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <rect width="55" height="55" rx="15" fill="#F2F4FF" />
                            <path d="M39.25 26.75V24.25H36.75V21.75C36.748 21.0876 36.484 20.4528 36.0156 19.9844C35.5472 19.516 34.9124 19.252 34.25 19.25H31.75V16.75H29.25V19.25H26.75V16.75H24.25V19.25H21.75C21.0876 19.252 20.4528 19.516 19.9844 19.9844C19.516 20.4528 19.252 21.0876 19.25 21.75V24.25H16.75V26.75H19.25V29.25H16.75V31.75H19.25V34.25C19.252 34.9124 19.516 35.5472 19.9844 36.0156C20.4528 36.484 21.0876 36.748 21.75 36.75H24.25V39.25H26.75V36.75H29.25V39.25H31.75V36.75H34.25C34.9124 36.748 35.5472 36.484 36.0156 36.0156C36.484 35.5472 36.748 34.9124 36.75 34.25V31.75H39.25V29.25H36.75V26.75H39.25ZM34.25 34.25H21.75V21.75H34.25V34.25Z" fill="#002A3B" />
                            <path d="M27.2012 23H25.5199L23.0074 33H24.2912L24.8712 30.6562H27.7662L28.3312 33H29.6587L27.2012 23ZM25.0399 29.655L26.3124 24.1875H26.3699L27.5987 29.655H25.0399ZM30.8049 23H32.0549V33H30.8049V23Z" fill="#002A3B" />
                        </svg>
                        </center>
                        
                        <h3 className='text-center'>100K+</h3>
                        <p className='text-center'>AI model submissions</p>
                    </div>
                    <div className='col-lg-4 mt-5'style={{ display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
                        <center>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <rect width="55" height="55" rx="15" fill="#F2F4FF" />
                            <g clip-path="url(#clip0_27_121)">
                                <path d="M36.875 20.8979V21.602C36.875 23.4083 38.2969 23.3323 38.4375 23.3323C38.5896 23.3323 40 23.4187 40 21.602V20.8979C40 19.0916 38.5781 19.1677 38.4375 19.1677C38.2854 19.1677 36.875 19.0812 36.875 20.8979ZM39.0885 20.7833V21.7062C39.0885 22.4385 38.8604 22.6854 38.4479 22.6854C38.0354 22.6854 37.7969 22.4385 37.7969 21.7062V20.7843C37.7969 20.0708 38.0365 19.8239 38.4375 19.8239C38.85 19.8135 39.0885 20.0708 39.0885 20.7843V20.7833ZM36.875 28.1895V28.8937C36.875 30.7 38.2969 30.6239 38.4375 30.6239C38.5896 30.6239 40 30.7104 40 28.8937V28.1895C40 26.3833 38.5781 26.4593 38.4375 26.4593C38.2854 26.4593 36.875 26.3729 36.875 28.1895ZM39.0885 28.075V28.9979C39.0885 29.7302 38.8604 29.977 38.4479 29.977C38.0354 29.977 37.7969 29.7302 37.7969 28.9979V28.076C37.7969 27.3625 38.0365 27.1156 38.4375 27.1156C38.85 27.1052 39.0885 27.3625 39.0885 28.076V28.075ZM36.875 35.4812V36.1854C36.875 37.9916 38.2969 37.9156 38.4375 37.9156C38.5896 37.9156 40 38.002 40 36.1854V35.4812C40 33.675 38.5781 33.751 38.4375 33.751C38.2854 33.751 36.875 33.6645 36.875 35.4812ZM39.0885 35.3666V36.2895C39.0885 37.0218 38.8604 37.2687 38.4479 37.2687C38.0354 37.2687 37.7969 37.0218 37.7969 36.2895V35.3677C37.7969 34.6541 38.0365 34.4073 38.4375 34.4073C38.85 34.3968 39.0885 34.6541 39.0885 35.3677V35.3666ZM32.7083 25.0645V25.7687C32.7083 27.575 34.1302 27.4989 34.2708 27.4989C34.4229 27.4989 35.8333 27.5854 35.8333 25.7687V25.0645C35.8333 23.2583 34.4115 23.3343 34.2708 23.3343C34.1187 23.3343 32.7083 23.2479 32.7083 25.0645ZM34.9219 24.95V25.8729C34.9219 26.6052 34.6938 26.852 34.2812 26.852C33.8687 26.852 33.6302 26.6052 33.6302 25.8729V24.951C33.6302 24.2375 33.8698 23.9906 34.2708 23.9906C34.6833 23.9802 34.9219 24.2375 34.9219 24.951V24.95ZM32.7083 16.6562V17.3302L33.75 17.0823V20.2083H34.7917V16.0416M32.7083 31.2395V31.9135L33.75 31.6656V34.7916H34.7927V30.625M31.6667 36.875V40H15V36.875C15 34.1041 20.5521 32.7083 23.3333 32.7083C26.1146 32.7083 31.6667 34.1041 31.6667 36.875Z" fill="#002A3B" />
                                <path d="M23.3333 31.6667C25.6345 31.6667 27.5 29.8012 27.5 27.5C27.5 25.1989 25.6345 23.3334 23.3333 23.3334C21.0321 23.3334 19.1666 25.1989 19.1666 27.5C19.1666 29.8012 21.0321 31.6667 23.3333 31.6667Z" fill="#002A3B" />
                                <path d="M33.6302 39.5344C33.6302 38.8209 33.8698 38.574 34.2709 38.574C34.6834 38.5636 34.9219 38.8209 34.9219 39.5344V40.0001H35.8334V39.648C35.8334 37.8417 34.4115 37.9178 34.2709 37.9178C34.1188 37.9178 32.7084 37.8313 32.7084 39.648V40.0001H33.6302V39.5344Z" fill="#002A3B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_27_121">
                                    <rect width="25" height="25" fill="white" transform="translate(15 15)" />
                                </clipPath>
                            </defs>
                        </svg>
                        </center>
                        <h3 className='text-center'>50K+</h3>
                        <p className='text-center'>Data Scientists</p>
                    </div>
                    <div className='col-lg-4 mt-5' style={{ display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
                        <center>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <rect width="55" height="55" rx="15" fill="#F2F4FF" />
                            <g clip-path="url(#clip0_27_127)">
                                <path d="M26.9166 17.3334H29.0833V18.4167H26.9166V17.3334Z" fill="#002A3B" />
                                <path d="M24.75 18.4167C25.3483 18.4167 25.8333 17.9316 25.8333 17.3333C25.8333 16.735 25.3483 16.25 24.75 16.25C24.1517 16.25 23.6666 16.735 23.6666 17.3333C23.6666 17.9316 24.1517 18.4167 24.75 18.4167Z" fill="#002A3B" />
                                <path d="M31.25 18.4167C31.8483 18.4167 32.3333 17.9316 32.3333 17.3333C32.3333 16.735 31.8483 16.25 31.25 16.25C30.6517 16.25 30.1666 16.735 30.1666 17.3333C30.1666 17.9316 30.6517 18.4167 31.25 18.4167Z" fill="#002A3B" />
                                <path d="M34.5 23.8333H29.0833V21.6667L32.3333 21.6558C33.1934 21.6558 34.0184 21.3149 34.6276 20.7078C35.2368 20.1006 35.5805 19.2767 35.5833 18.4167V16.25C35.5808 15.3888 35.2375 14.5637 34.6286 13.9547C34.0197 13.3458 33.1945 13.0026 32.3333 13H23.6667C22.8055 13.0026 21.9803 13.3458 21.3714 13.9547C20.7625 14.5637 20.4192 15.3888 20.4167 16.25V18.4167C20.4192 19.2778 20.7625 20.103 21.3714 20.7119C21.9803 21.3209 22.8055 21.6641 23.6667 21.6667H26.9167V23.8333H21.5C20.6388 23.8359 19.8137 24.1791 19.2047 24.7881C18.5958 25.397 18.2526 26.2222 18.25 27.0833V35.75C18.2526 36.6112 18.5958 37.4363 19.2047 38.0453C19.8137 38.6542 20.6388 38.9974 21.5 39H34.5C35.3612 38.9974 36.1863 38.6542 36.7953 38.0453C37.4042 37.4363 37.7474 36.6112 37.75 35.75V27.0833C37.7474 26.2222 37.4042 25.397 36.7953 24.7881C36.1863 24.1791 35.3612 23.8359 34.5 23.8333ZM23.6667 19.5C23.3796 19.4991 23.1046 19.3847 22.9016 19.1818C22.6986 18.9788 22.5842 18.7037 22.5833 18.4167V16.25C22.5842 15.9629 22.6986 15.6879 22.9016 15.4849C23.1046 15.2819 23.3796 15.1675 23.6667 15.1667H32.3225C32.6107 15.1672 32.887 15.2812 33.0918 15.4839C33.2965 15.6867 33.4133 15.9619 33.4167 16.25V18.4167C33.4133 18.7048 33.2965 18.98 33.0918 19.1827C32.887 19.3855 32.6107 19.4995 32.3225 19.5H23.6667ZM28.4713 34.7447L28 35.2083L27.5287 34.7403C25.855 33.0861 24.75 31.9952 24.75 30.6562C24.7375 30.4104 24.774 30.1647 24.8574 29.9332C24.9408 29.7017 25.0694 29.4891 25.2358 29.3079C25.4021 29.1266 25.6029 28.9802 25.8264 28.8773C26.0499 28.7744 26.2916 28.7169 26.5375 28.7083C26.8212 28.7136 27.1001 28.7829 27.3534 28.911C27.6066 29.0391 27.8277 29.2228 28 29.4482C28.1724 29.2228 28.3934 29.0391 28.6466 28.911C28.8999 28.7829 29.1788 28.7136 29.4625 28.7083C29.7084 28.7169 29.9501 28.7744 30.1736 28.8773C30.3971 28.9802 30.5979 29.1266 30.7642 29.3079C30.9306 29.4891 31.0592 29.7017 31.1426 29.9332C31.226 30.1647 31.2625 30.4104 31.25 30.6562C31.25 31.9952 30.145 33.0861 28.4713 34.7447Z" fill="#002A3B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_27_127">
                                    <rect width="26" height="26" fill="white" transform="translate(15 13)" />
                                </clipPath>
                            </defs>
                        </svg>
                        </center>
                       
                        <h3 className='text-center'>100K+</h3>
                        <p className='text-center'>AI Challanges hosted</p>
                        
                    </div>
                </div>
            </div>
            <div className='third'>
                <h1 className='mt-4 text-dark text-center'>
                    Why Participate in <strong className='text-success'>AI Challenges ?</strong>
                </h1>
                <div className='row m-2'>
                    <div className='col-lg-6'>
                        <div className='card m-3 bg-light'>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-2'>
                                <path d="M5.375 26.875V29.5625H10.1937L2.6875 37.0687L4.58756 38.9688L12.0938 31.4626V36.2812H14.7812V26.875H5.375ZM25.5312 13.4375H34.9375V16.125H25.5312V13.4375ZM25.5312 20.1562H34.9375V22.8438H25.5312V20.1562ZM25.5312 26.875H34.9375V29.5625H25.5312V26.875Z" fill="#0FA958" />
                                <path d="M37.625 6.71875H5.375C4.66245 6.71946 3.97929 7.00284 3.47544 7.50669C2.97159 8.01054 2.68821 8.6937 2.6875 9.40625V22.8438H5.375V9.40625H20.1562V36.2812H37.625C38.3376 36.2805 39.0207 35.9972 39.5246 35.4933C40.0284 34.9895 40.3118 34.3063 40.3125 33.5938V9.40625C40.3118 8.6937 40.0284 8.01054 39.5246 7.50669C39.0207 7.00284 38.3376 6.71946 37.625 6.71875ZM22.8438 33.5938V9.40625H37.625L37.6277 33.5938H22.8438Z" fill="#0FA958" />
                            </svg>
                            <br />
                            <h3>Prove Your Skills</h3>
                            <p className='text-left'>Gain substaintial experience by saving real-world problems and
                                pit againt others to come up with innovative solutions.
                            </p>

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='card m-3 bg-light'>
                            <svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-3'>
                                <path d="M26 6C26 7.5913 25.3152 9.11742 24.0962 10.2426C22.8772 11.3679 21.2239 12 19.5 12C17.7761 12 16.1228 11.3679 14.9038 10.2426C13.6848 9.11742 13 7.5913 13 6C13 4.4087 13.6848 2.88258 14.9038 1.75736C16.1228 0.632141 17.7761 0 19.5 0C21.2239 0 22.8772 0.632141 24.0962 1.75736C25.3152 2.88258 26 4.4087 26 6ZM36.8333 10C36.8333 11.0609 36.3768 12.0783 35.5641 12.8284C34.7515 13.5786 33.6493 14 32.5 14C31.3507 14 30.2485 13.5786 29.4359 12.8284C28.6232 12.0783 28.1667 11.0609 28.1667 10C28.1667 8.93913 28.6232 7.92172 29.4359 7.17157C30.2485 6.42143 31.3507 6 32.5 6C33.6493 6 34.7515 6.42143 35.5641 7.17157C36.3768 7.92172 36.8333 8.93913 36.8333 10ZM28.1667 24C28.1667 21.8783 27.2536 19.8434 25.6283 18.3431C24.0029 16.8429 21.7985 16 19.5 16C17.2015 16 14.9971 16.8429 13.3717 18.3431C11.7464 19.8434 10.8333 21.8783 10.8333 24V30H28.1667V24ZM10.8333 10C10.8333 11.0609 10.3768 12.0783 9.56413 12.8284C8.75147 13.5786 7.64927 14 6.5 14C5.35073 14 4.24853 13.5786 3.43587 12.8284C2.62321 12.0783 2.16667 11.0609 2.16667 10C2.16667 8.93913 2.62321 7.92172 3.43587 7.17157C4.24853 6.42143 5.35073 6 6.5 6C7.64927 6 8.75147 6.42143 9.56413 7.17157C10.3768 7.92172 10.8333 8.93913 10.8333 10ZM32.5 30V24C32.5031 21.9666 31.9438 19.9661 30.875 18.188C31.8356 17.9611 32.8396 17.9397 33.8105 18.1254C34.7814 18.3112 35.6936 18.6992 36.4773 19.2598C37.2611 19.8205 37.8958 20.5389 38.3329 21.3604C38.7701 22.1819 38.9983 23.0847 39 24V30H32.5ZM8.125 18.188C7.05629 19.9661 6.49696 21.9666 6.5 24V30H5.75727e-07V24C-0.000417014 23.0841 0.226337 22.1802 0.662885 21.3577C1.09943 20.5352 1.73419 19.8159 2.5185 19.2548C3.30281 18.6938 4.21586 18.306 5.18767 18.121C6.15948 17.9361 7.16426 17.959 8.125 18.188Z" fill="#0FA958" />
                            </svg>
                            <br />
                            <h3 >Learn from community</h3>
                            <p className='text-left'>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.
                            </p>

                        </div>
                    </div>

                </div>
                <div className='row m-2'>
                    <div className='col-lg-6'>
                        <div className='card m-3 bg-light'>
                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-2'>
                                <path d="M36.7188 10.2812H10.2812C7.84775 10.2812 5.875 12.254 5.875 14.6875V35.25C5.875 37.6835 7.84775 39.6562 10.2812 39.6562H36.7188C39.1523 39.6562 41.125 37.6835 41.125 35.25V14.6875C41.125 12.254 39.1523 10.2812 36.7188 10.2812Z" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M30.1094 26.4375H16.8906C14.8627 26.4375 13.2188 28.0815 13.2188 30.1094C13.2188 32.1373 14.8627 33.7812 16.8906 33.7812H30.1094C32.1373 33.7812 33.7812 32.1373 33.7812 30.1094C33.7812 28.0815 32.1373 26.4375 30.1094 26.4375Z" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M27.1719 26.4375V33.7812" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.8281 26.4375V33.7812" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.5 10.2812V2.9375" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.4219 22.0312C16.6386 22.0312 17.625 21.0449 17.625 19.8281C17.625 18.6114 16.6386 17.625 15.4219 17.625C14.2051 17.625 13.2188 18.6114 13.2188 19.8281C13.2188 21.0449 14.2051 22.0312 15.4219 22.0312Z" fill="#0FA958" />
                                <path d="M31.5781 22.0312C32.7949 22.0312 33.7812 21.0449 33.7812 19.8281C33.7812 18.6114 32.7949 17.625 31.5781 17.625C30.3614 17.625 29.375 18.6114 29.375 19.8281C29.375 21.0449 30.3614 22.0312 31.5781 22.0312Z" fill="#0FA958" />
                            </svg>
                            <br />
                            <h3>Challenge Yourself</h3>
                            <p className='text-left'>There is nothing for you to loose by participating in a challenge.
                                You can fail safe,learn out of the entire experience and bounce back harder.
                            </p>

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='card m-3 bg-light'>
                            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-2'>
                                <path d="M32.6562 24.0625H41.25" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M32.6562 30.9375H41.25" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.7877 30.9375C22.6354 30.9375 24.944 28.629 24.944 25.7812C24.944 22.9335 22.6354 20.625 19.7877 20.625C16.94 20.625 14.6315 22.9335 14.6315 25.7812C14.6315 28.629 16.94 30.9375 19.7877 30.9375Z" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.1276 36.0938C13.5062 34.615 14.3663 33.3042 15.5722 32.3682C16.7781 31.4321 18.2612 30.9241 19.7877 30.9241C21.3143 30.9241 22.7974 31.4321 24.0033 32.3682C25.2092 33.3042 26.0692 34.615 26.4479 36.0938" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M46.4062 10.3125H8.59375C7.64451 10.3125 6.875 11.082 6.875 12.0312V42.9688C6.875 43.918 7.64451 44.6875 8.59375 44.6875H46.4062C47.3555 44.6875 48.125 43.918 48.125 42.9688V12.0312C48.125 11.082 47.3555 10.3125 46.4062 10.3125Z" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <br />
                            <h3>Earn Recognition</h3>
                            <p className='text-left'>
                                You will stand out if you do well in AI challenges,
                                it not only helps you shine in the community but also earns rewards.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
            <div className='fourth' >
                <h1 className='text-center mt-5 '>Explore Challenges</h1>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'><input type='text' className='form-control' placeholder='Search here....' /></div>
                    <div className='col-lg-1'>
                        <select className='form-control'>
                            <option value="">filter</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>

                </div>
                <div className='row mt-2'style={{backgroundColor:'darkblue', height:'60vh'}}>
                            <div className='col-lg-4'>
                                <div className='card m-4' style={{ height: '450px', width: '400px' }}>
                                    <img className='m-2' src={Image1}
                                        style={{ height: '150px', width: '350px' }} />
                                        <p className='text-center bg-light rounded mt-2'>Upcoming</p>
                                        <h4 className='text-center'>Travel Insurance Claim<br/> Prediction</h4>
                                        <p className='p-2 text-center'>Ended on</p>
                                        <h4 className='text-center'>16th May'22 09:00 PM</h4>
                                        <button className='btn btn-success text-white text-center'><i className='fa fa-circle-check'></i>Participate Now</button>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='card m-4' style={{ height: '450px', width: '400px' }}>
                                    <img className='m-2' src={Image2}
                                        style={{ height: '150px', width: '350px' }} />
                                        <p className='text-center bg-light rounded mt-2'>Upcoming</p>
                                        <h4 className='text-center'>Data Sprint 72- Butterfly<br/>Identification</h4>
                                        <p className='p-2 text-center'>Ended on</p>
                                        <h4 className='text-center'>16th May'22 09:00 PM</h4>
                                        <button className='btn btn-success text-white text-center'><i className='fa fa-circle-check'></i>Participate Now</button>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='card m-4' style={{ height: '450px', width: '400px' }}>
                                    <img className='m-2' src={Image3}
                                        style={{ height: '150px', width: '350px' }} />
                                        <p className='text-center bg-light rounded mt-2'>Active</p>
                                        <h4 className='text-center'>Data Sprint 71- Weather<br/>Recognition</h4>
                                        <p className='p-2 text-center'>Ended on</p>
                                        <h4 className='text-center'>16th May'22 09:00 PM</h4>
                                        <button className='btn btn-success text-white text-center'><i className='fa fa-circle-check'></i>Participate Now</button>
                                </div>
                            </div>
                </div>
                <div className='row  mt-3'style={{backgroundColor:'darkblue', height:'60vh'}}>
                            <div className='col-lg-4'>
                                <div className='card m-4' style={{ height: '450px', width: '400px' }}>
                                    <img className='m-2' src={Image4}
                                        style={{ height: '150px', width: '350px' }} />
                                        <p className='text-center bg-light rounded mt-2'>Upcoming</p>
                                        <h4 className='text-center'>Data Science Bootcamp-<br/>Granded Datathon</h4>
                                        <p className='p-2 text-center'>Starts in</p>
                                        <h4 className='text-center'>00:15:22</h4>
                                        <button className='btn btn-success text-white text-center'><i className='fa fa-circle-check'></i>Participate Now</button>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='card m-4' style={{ height: '450px', width: '400px' }}>
                                    <img className='m-2' src={Image5}
                                        style={{ height: '150px', width: '350px' }} />
                                        <p className='text-center bg-light rounded mt-2'>Upcoming</p>
                                        <h4 className='text-center'>Data Sprint 70-Airline <br/>Passenger Satisfaction</h4>
                                        <p className='p-2 text-center'>Ends in</p>
                                        <h4 className='text-center'>00:11:27</h4>
                                        <button className='btn btn-success text-white text-center'><i className='fa fa-circle-check'></i>Participate Now</button>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='card m-4' style={{ height: '450px', width: '400px' }}>
                                    <img className='m-2' src={Image6}
                                        style={{ height: '150px', width: '350px' }} />
                                        <p className='text-center bg-light rounded mt-2'>Past</p>
                                        <h4 className='text-center'>Engineering Graduates Employement Outcomes</h4>
                                        <p className='p-2 text-center'>Ended on</p>
                                        <h4 className='text-center'>16th May'22 09:00 PM</h4>
                                        <button className='btn btn-success text-white text-center'><i className='fa fa-circle-check'></i>Participate Now</button>
                                </div>
                            </div>
                </div>

                
            </div>

            {/* -----------------Body ends here---------------------- */}

            {/* -----------------footer starts------------- */}
            <section className="footer_section pt-5 mt-0 pb-2 bg-dark" id="footer_section" >
                <footer className='footer'>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 col-6 pl-5 pl-small-15">
                                <div className="footer_title">
                                    <a href="index.html " style={{ textDecoration: 'none' }}>
                                        <i className="fas fa-book fa-2x text-white pe-2"></i>
                                        <h4 className='text-white'>Hackathon EduTech</h4>
                                    </a>
                                </div>
                                <div className="text-white">
                                    Hackathon Management Platform is designed to streamline the creation and management of hackathons,
                                    making it easier for educational institutions and organizations to foster innovation and collaboration.
                                    
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="footer_title pt-3 mb-3">
                                    <h4 className="text-white"><a href="dashboard" style={{ textDecoration: 'none' }} className="text-white" >About</a></h4>
                                    <p className='text-white'>
                                        Hackathon Management Platform is designed to streamline the creation and management of hackathons,
                                        making it easier for educational institutions and organizations to foster innovation and collaboration.
                                </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="footer_title pt-3 mb-3">
                                    <h4 className="text-white"><a href="hackathonForm" style={{ textDecoration: 'none' }} className="text-white" >Create Challange</a></h4>
                                    <p className='text-white'>
                                        Create New challenge here
                                    </p>

                                    <p className='text-white'>Social Media</p>

                                    <p className='text-white '>
                                        <i className='fab fa-google fa-xl text-white pe-2'></i>
                                        <i className='fab fa-facebook fa-xl text-white pe-2'></i>
                                        <i className='fab fa-twitter fa-x1 text-white pe-2'></i>
                                        <i className='fab fa-instagram fa-xl text-white'></i>
                                    </p>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="border-top">
                        <h6 className="text-center mt-3 text-white">Copyright ©2020 All rights reserved
                        </h6>
                    </div>
                </footer>
            </section>


            {/* -------footer ends here----------- */}
        </section>

    )

}
export default DashBoard;