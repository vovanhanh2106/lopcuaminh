//route là nơi định nghĩa các đường dẫn cho ứng dụng, routes nghĩa là các tuyến đường route, browserrouter là nơi bao bọc toàn bộ ứng dụng để sử dụng chức năng định tuyến
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import { DefaultLayout} from "~/components/Layout";
import { publicRoutes } from "~/routes";
import { Fragment } from "react";

function App() {
  return (
    
    <Router>
      <div className="App">
      
        <Routes>
          {publicRoutes.map((route, index) => {
           
            const Page = route.component;
            let Layout = DefaultLayout;
            if(route.layout){
              Layout=route.layout;
            }else if(route.layout===null){
              Layout = Fragment;
            }
            return <Route key={index} path={route.path} 
            element={
                <Layout> 
                  <Page />
                </Layout>
            } />;
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
