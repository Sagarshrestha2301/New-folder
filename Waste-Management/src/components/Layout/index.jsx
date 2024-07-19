import Footer from "./Footer";
import Header from "./Header";

function Index(){
    return<>
        <Header />
        {
            props.childern
            
        }
        <Footer/>
    </>
}

export default Index;