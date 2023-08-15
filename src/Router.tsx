import { Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Post } from "./pages/post";


export function Router() {
    return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Blog />} />
          <Route path="/post/1" element={<Post />} />
          
          
        </Route>
      </Routes>
    );
  }