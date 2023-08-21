import Header from "@/layouts/Header";
import { Flex, Text } from "@mantine/core";
import React from "react";

export default function About() {
  return (
    <Header>
      <Flex direction="column" gap={30} mx={150} my={80}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          porta imperdiet elit, in luctus urna. Etiam mauris neque, eleifend
          eget mauris rhoncus, congue tristique turpis. Aenean eget mi pharetra,
          consequat eros ut, volutpat nisl. Suspendisse in magna in turpis
          cursus rutrum at vitae orci. Aliquam quis lorem laoreet, dictum nisl
          et, tempor diam. Suspendisse lectus risus, eleifend sit amet hendrerit
          aliquam, fringilla pulvinar magna. Vestibulum varius sit amet ligula
          ac interdum.{" "}
        </Text>
        <Text>
          Vivamus tempor turpis libero, id imperdiet tellus sollicitudin vitae.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          laoreet, sem ac facilisis dignissim, enim massa ultricies orci, eget
          fermentum ligula nisi at augue. Nam luctus augue id erat condimentum,
          vel euismod ligula eleifend. Phasellus cursus turpis nisi, nec tempor
          ipsum dictum et. Integer fringilla dapibus mauris. Ut scelerisque
          felis nec augue sollicitudin, ut imperdiet purus laoreet. Quisque nec
          ligula ex. Donec ac venenatis urna. Nulla vehicula magna vel justo
          dapibus accumsan. Sed aliquam non elit id convallis. Proin sit amet
          feugiat turpis, a malesuada velit. Aliquam dui arcu, fermentum sed
          pellentesque sed, scelerisque id ex. Phasellus volutpat dui nec urna
          imperdiet mattis.
        </Text>

        <Text>
          Nam lorem tellus, auctor in elit sit amet, tempor ultrices ligula.
          Maecenas sit amet hendrerit metus. Sed cursus, enim ut consequat
          auctor, nibh augue sodales massa, faucibus venenatis nibh velit quis
          leo. Phasellus eu erat aliquet, aliquam velit eu, rutrum urna. Sed
          malesuada pellentesque quam, sit amet consectetur odio. Vivamus tellus
          ex, congue id mauris ut, semper mollis massa. Pellentesque aliquet
          metus vel ultricies porttitor. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Suspendisse
          potenti. Ut mattis velit id nunc accumsan scelerisque id at elit. Nunc
          tempor interdum tellus, ac lacinia sem vestibulum a. Vivamus sem
          nulla, facilisis sit amet interdum non, consectetur ut lacus. Maecenas
          laoreet facilisis nisi, dapibus consequat libero placerat at. Sed
          semper velit sit amet sem luctus, vel sodales est laoreet. Etiam
          luctus, mauris nec ornare aliquam, diam enim dictum neque, eget auctor
          lacus massa sit amet orci. Nulla facilisi.
        </Text>
      </Flex>
    </Header>
  );
}
