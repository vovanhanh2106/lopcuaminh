import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/profile";
import Search from "~/pages/search";
import Upload from "~/pages/upload";
import HeaderOnly from "~/components/Layout/HeaderOnly";
//cái này là file định nghĩa các route cho ứng dụng ko cần mạng vẫn dùng đc
const publicRoutes = [
  
    {path: "/lopcuaminh", component: Home },
    {path: "/following", component: Following },
    {path: '/@:nickname',  element: <Profile /> },
    {path: "/search", component: Search,layout: null },
    {path: "/upload", component: Upload ,layout: HeaderOnly},   

 ];

//cái này là file định nghĩa các route cho ứng dụng cần mạng mới dùng đc
const privateRoutes = [
  {}];



export { publicRoutes, privateRoutes } ;