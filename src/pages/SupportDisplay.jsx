import { useSelector } from "react-redux";

const SupportDisplay = () => {
  const { fields } = useSelector((state) => state.form);
  console.log(fields);
  return <>here</>;
};
export default SupportDisplay;
