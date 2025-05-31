import './pageNFComp.css';
import { Images } from '../../assets/images';
import { useNavigate } from 'react-router-dom';

function PageNFComp() {
    const navigate = useNavigate();

    return (
        <div className="page-nf-comp">
            <div className="page-nf-t">
                <p className='page-error'><span>404</span> ERROR</p>
                <h2>Page Not Found</h2>
                <p>Click on the button below to get redirected to Taylor's Lawn and Landscaping, Inc home page</p>
                <a href="#" onClick={() => {navigate("/")}}>Back to Home</a>
            </div>

            <div className="page-nf-b">
                <img src={Images.thumbnail} alt="" />
            </div>
        </div>
    )
}

export default PageNFComp;