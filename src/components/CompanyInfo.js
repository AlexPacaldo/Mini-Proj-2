import React from 'react';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'; 


let isLogin = localStorage.getItem('isActive')?JSON.parse(localStorage.getItem('isActive')):false;
const CompanyInfo = (props) => {
    const navigate = useNavigate();
    const company = useLocation().state;
    console.log(company);
    window.scrollTo(0, 0);
    const signinBtn =() => {navigate('/Login')};

    
  return (
    <div className='d-flex justify-content-center maindiv py-4 px-3 py-md-5 px-md-1'>
        <div className='companyDiv d-flex flex-column p-4'>
        <div className='header'>
            <h1 className='display-4'><b>{company.job}</b></h1>
            <br />
            <h4><i class="bi bi-briefcase"></i> {company.company}</h4>
            <h6><i class="bi bi-currency-dollar"></i> {(company.salStart)+" - "+(company.salEnd)}</h6>
        </div>
        
        <div className='d-flex flex-column justify-content-center body'>
            <span className='skills'><b>Required Skills: {company.skills}</b></span>
            <br /><br />
            <span className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat provident accusantium tenetur distinctio iure? Ipsa earum voluptate, nobis labore corrupti ducimus sunt eaque nostrum. Quo neque delectus dicta aspernatur quam. Repellendus assumenda iure voluptatem eveniet repellat, vel optio suscipit minus tenetur fugiat doloribus enim velit ducimus, sequi nulla natus ea, porro in. Nostrum harum quos possimus illo rerum dolorum officia ipsa repellendus ratione debitis at itaque voluptas, commodi est odio provident porro nobis temporibus rem odit. Neque molestiae, a, aspernatur nobis praesentium consequatur voluptate eligendi repellendus voluptatum illo ex omnis dolorem expedita? Nam voluptate voluptates minus laudantium, possimus atque esse dolorum. Voluptate officia, minus reiciendis odit itaque, hic laboriosam officiis quasi velit nisi magnam beatae repellat eveniet. Nihil, praesentium.</span>
                <br /><br />
            <span className='otherInfo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium iusto obcaecati id ipsam? Blanditiis, ipsum. Aut iste animi praesentium consequuntur perferendis tenetur sapiente est eius? Quibusdam consequuntur possimus ducimus. Ullam cumque quasi, aperiam minima quod aliquid libero deleniti, quo dolore sint modi! Omnis obcaecati nam sapiente harum eius fugiat in laboriosam voluptatem sint, labore reprehenderit tempore, quod totam, laborum rem enim incidunt nostrum qui autem? Incidunt explicabo atque maiores quibusdam a optio tempora laudantium facilis modi quo fugit iure vero ipsa autem harum ab quasi sapiente, repellat suscipit deserunt officia!</span>
        </div>
        <br></br>
        <div className='text-center'>
            {isLogin?<button className='btn cardButtonLeft w-25'>Apply Now!</button>:null}
            {!isLogin?<button className='btn cardButtonRight w-25' onClick={()=>signinBtn()}>Sign in to Apply</button>:null}
        </div>
    </div>
    </div>
  )
}

export default CompanyInfo