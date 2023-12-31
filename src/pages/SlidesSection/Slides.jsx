import React from "react";
import { Flex } from "@chakra-ui/react";
import LeftSideView from "../../components/CreateSlides/LeftSideView";
import MiddleSideView from "../../components/CreateSlides/MiddleSideView";
import RightSideView from "../../components/CreateSlides/RightSideView";
import { useParams } from "react-router-dom";
import { AnimationProvider } from "../../components/CustomHook/AnimationContext";
import SlidesNav from "./SlidesNav";

const Slides = () => {
  const { id } = useParams();
  return (
    <AnimationProvider>
      <SlidesNav />
      <Flex
        borderTop="1px solid black"
        bg="gray.800"
        overflow="hidden"
        justify="space-between"
        height="91vh"
      >
        <Flex w="18%" p={0}>
          <LeftSideView id={id} />
        </Flex>
        <Flex w="63%">
          <MiddleSideView />
        </Flex>

        <Flex  bg="#333026" w="20%" >
          <RightSideView />
        </Flex>
      </Flex>
    </AnimationProvider>
  );
};

export default Slides;
