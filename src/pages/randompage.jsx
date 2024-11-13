import { Navigate, useParams } from "react-router-dom"
import ParentComponent from "../components/ParentComponent";


const Randompage = () => {
    // const param = useParams();
    const {pageId} = useParams();
    // const pageId = param.pageId;
    const testRegex = /^page-\d+$/
    // console.log({param});

    if (testRegex.test(pageId)) {
        return (
        <div style={{backgroundColor: 'pink', minHeight: "100vh"}}>
            <h1>pageID: {pageId}</h1>
            <ParentComponent/>                
            {/* <h1>First child</h1> */}
            
        </div>);
    }
    
    // Redirect to the 404 page if the pattern doesn't match
    return <Navigate to="/404" />;
  
}

export default Randompage