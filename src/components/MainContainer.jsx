import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";
const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize marker:text-textColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div whileTap={{ scale: 0.75 }} className="arrow-key">
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.75 }} className="arrow-key">
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>
    </div>
  );
};

export default MainContainer;
