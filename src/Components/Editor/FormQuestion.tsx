import React, { type ReactElement, type MutableRefObject } from "react";

import ContainerForm from "./FormBlocks/ContainerForm";
import BlockTitle from "./FormBlocks/BlockTitle";
import BlockImageWidget from "./FormBlocks/BlockImageWidget";
import BlockStory from "./FormBlocks/BlockStory";
import BlockHint from "./FormBlocks/BlockHint";
import BlockQuestion from "./FormBlocks/BlockQuestion";
import BlockAnswer from "./FormBlocks/BlockAnswer";

interface props {
  title: MutableRefObject<string>;
  typeOfModule: MutableRefObject<string>;
  description: MutableRefObject<string>;
  question: MutableRefObject<string>;
  answer: MutableRefObject<string>;
  hint: MutableRefObject<string>;
  imageUrl: MutableRefObject<string>;
  handleModuleUpdateClick: () => void;
}

const FormQuestion = (props: props): ReactElement => {
  const { title, typeOfModule, description, imageUrl, question, answer, hint, handleModuleUpdateClick } = props;

  return (
    <ContainerForm typeOfModule={typeOfModule} handleModuleUpdateClick={handleModuleUpdateClick}>

      <BlockTitle title={title} />
      <BlockImageWidget imageUrl={imageUrl} />
      <BlockStory description={description} />
      <BlockHint hint={hint} />
      <BlockQuestion question={question} />
      <BlockAnswer answer={answer} />

    </ContainerForm>
  );
};

export default FormQuestion;
