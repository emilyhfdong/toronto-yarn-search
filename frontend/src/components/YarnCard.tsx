import React from "react"
import { Flex, Text, Box } from "rebass"
import { YarnResult } from "../services"

type YarnCardProps = { yarn: YarnResult }

export const YarnCard: React.FC<YarnCardProps> = ({ yarn }) => {
  return (
    <Flex
      as="a"
      href={yarn.href}
      target="_blank"
      sx={{
        position: "relative",
        flexDirection: "column",
        width: 200,
        marginBottom: 25,
        cursor: "pointer",
        textDecoration: "none",
        ":hover": {
          transform: "scale(1.04)",
          transition: "all 0.1s",
        },
      }}
    >
      <Flex
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          fontWeight: "bold",
          backgroundColor: "black",
          color: "white",
          height: 20,
          paddingX: 10,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text sx={{ fontSize: 12 }}>{yarn.store}</Text>
      </Flex>
      <Box
        sx={{
          height: 200,
          width: 200,
          border: "3px solid black",
          borderRadius: 20,
          backgroundImage: `url(${yarn.img})`,
          backgroundSize: "cover",
        }}
      />
      <Flex sx={{ paddingX: "3px", marginTop: 10, color: "black" }}>
        <Text
          sx={{
            fontSize: 14,
            flex: 1,
          }}
        >
          {yarn.name}
        </Text>
        <Text
          sx={{
            fontSize: 14,
            marginLeft: "5px",
          }}
        >
          {yarn.price?.replace(" CAD", "")}
        </Text>
      </Flex>
    </Flex>
  )
}
