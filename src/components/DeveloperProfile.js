import React from 'react';
import { useLocation } from 'react-router-dom';
import male from '../assets/m.png'
import female from '../assets/f.jpg'
import '../assets/developerProfile.css'



const DeveloperProfile = () => {
    const applicant = useLocation().state;
    window.scrollTo(0,0,);

  return (
        <div className='d-flex justify-content-center maindiv py-4 px-3 py-md-5'>
            <div className='applicantDiv d-flex flex-column p-4'>
                <h1 className='display-4'><b>PROFILE</b></h1>
                <div className='d-flex flex-column align-items-center'>
                    <div className='profPic'>
                        {(applicant.gender==="F")? <img src={female} alt=""/>:<img src={male} alt=""/>}
                    </div>
                    <br></br>
                    <div className='display-5'><b>{applicant.fname} {applicant.lname}</b></div>
                    <h4>{applicant.email}</h4>
                    <h6>{applicant.experience} with {applicant.yearsOfExp} years of experience</h6>
                    <br></br>
                    <div className='row row-cols-3 g-2'>
                        {applicant.skills.map((skill)=>
                            <div className='col'>
                                <div className='skill text-center p-1'>{skill}</div>
                            </div>
                        )}
                    </div>
                    <br></br><br></br>

                </div>
                <div className='d-flex flex-column justify-content-center para'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis officiis unde voluptas accusantium, molestiae 
                        inventore a assumenda et eius nostrum error rem, possimus sapiente obcaecati eaque iste distinctio earum accusamus doloremque 
                        fuga architecto. Consequuntur distinctio quo nesciunt ducimus vero excepturi quos. Iusto nobis est voluptates saepe dolorum 
                        ad quia quisquam repellat iste? Labore deleniti porro laboriosam mollitia exercitationem reiciendis eligendi repellat, ullam 
                        eius dolorem molestiae, delectus at sequi facilis!
                    </p>
                    <br /><br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis officiis unde voluptas accusantium, molestiae 
                        inventore a assumenda et eius nostrum error rem, possimus sapiente obcaecati eaque iste distinctio earum accusamus doloremque 
                        fuga architecto. Consequuntur distinctio quo nesciunt ducimus vero excepturi quos. Iusto nobis est voluptates saepe dolorum 
                        ad quia quisquam repellat iste? Labore deleniti porro laboriosam mollitia exercitationem reiciendis eligendi repellat, ullam 
                        eius dolorem molestiae, delectus at sequi facilis!
                    </p>                    
                    <br /><br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis officiis unde voluptas accusantium, molestiae 
                        inventore a assumenda et eius nostrum error rem, possimus sapiente obcaecati eaque iste distinctio earum accusamus doloremque 
                        fuga architecto. Consequuntur distinctio quo nesciunt ducimus vero excepturi quos. Iusto nobis est voluptates saepe dolorum 
                        ad quia quisquam repellat iste? Labore deleniti porro laboriosam mollitia exercitationem reiciendis eligendi repellat, ullam 
                        eius dolorem molestiae, delectus at sequi facilis!
                    </p>                    
                    <br /><br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis officiis unde voluptas accusantium, molestiae 
                        inventore a assumenda et eius nostrum error rem, possimus sapiente obcaecati eaque iste distinctio earum accusamus doloremque 
                        fuga architecto. Consequuntur distinctio quo nesciunt ducimus vero excepturi quos. Iusto nobis est voluptates saepe dolorum 
                        ad quia quisquam repellat iste? Labore deleniti porro laboriosam mollitia exercitationem reiciendis eligendi repellat, ullam 
                        eius dolorem molestiae, delectus at sequi facilis!
                    </p>                
                </div>

            </div>

        </div>
  )
}

export default DeveloperProfile