import DayRaces from "../components/DayRaces";
import Form from "../components/Form";
import HighlightedRaces from "../components/HighlightedRaces";

export default function Home() {
  return (
    <>
      <HighlightedRaces />
      <DayRaces />
      <Form />
    </>
  );
}
