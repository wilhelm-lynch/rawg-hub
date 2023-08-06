import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeleton = [1, 2, 3, 4];
  return (
    <>
      {skeleton.map((item) => (
        <HStack key={item} marginY={2}>
          <Skeleton borderRadius={8} boxSize="32px" />

          <SkeletonText
            boxSize="20px"
            borderColor="white"
            noOfLines={2}
            width="100%"
          />
        </HStack>
      ))}
    </>
  );
};

export default GenreListSkeleton;
