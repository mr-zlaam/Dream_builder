import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Home_section_5.scss";
import items from "./accordian.json";

const Home_section_5 = () => {
  return (
    <>
      <div className="home_section_5">
        <h1>{"FAQ'S"}</h1>
        <Accordion allowZeroExpanded={false} className="accordion_container">
          {items.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionItemHeading>
                <AccordionItemButton className="question">
                  {item.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="answer">{item.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Home_section_5;
