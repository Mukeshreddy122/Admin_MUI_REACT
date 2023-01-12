
import { Routes, Route } from "react-router-dom";
import {
  Sidenave,
  DashboardNavbar,
  Footer,
  
} from "@/widgets/layout";
import routes from "@/routes";
import tab from "../tab"
import { useMaterialTailwindController } from "@/context";

export function Dashboard() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenave
        routes={routes}
        tab={tab}

        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
    
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
       
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
           {tab.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
