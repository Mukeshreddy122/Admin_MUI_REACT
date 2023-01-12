import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function Footer({ }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year}, Paatvihar
          
        </Typography>
     
      </div>
    </footer>
  );
}



Footer.propTypes = {
  
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
