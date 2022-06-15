import React, { useCallback, useState } from "react"
import { Box, Flex, Image, Text } from "rebass"
import SearchIcon from "./images/search.svg"
export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(() => {
    if (isLoading) {
      return
    }
    setIsLoading(true)
  }, [setIsLoading, isLoading])

  console.log("hii isloading", isLoading)

  return (
    <Flex
      sx={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        paddingX: 30,
        flexDirection: "column",
      }}
    >
      <Flex
        sx={{
          paddingTop: 20,
          minHeight: isLoading ? 0 : "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "fit-content",
          transition: "min-height 0.3s ease-in",
          maxWidth: "100%",
          width: 900,
        }}
      >
        <Text
          sx={{
            fontSize: isLoading ? [50, 50] : [50, 80],
            fontWeight: "bold",
            transition: "all 0.2s ease-in",
          }}
        >
          toronto yarns
        </Text>
        <Flex
          sx={{
            marginTop: isLoading ? [15, 15] : [15, 30],
            height: isLoading ? [50, 50] : [60, 80],
            width: "100%",
            border: "3px solid black",
            borderRadius: 40,
            paddingLeft: 15,
            paddingRight: 25,
            alignItems: "center",
            overflow: "none",
            paddingY: ["1px", "5px"],
            transition: "all 0.1s ease-in",
          }}
        >
          <Image
            sx={{
              height: isLoading ? [25, 25] : [30, 40],
              transition: "all 0.1s ease-in",
            }}
            src={SearchIcon}
          />
          <Box
            as="input"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                onSubmit()
              }
            }}
            sx={{
              outline: "none",
              border: "none",
              flex: 1,
              height: "100%",
              fontSize: isLoading ? [20, 20] : [25, 30],
              fontFamily: "Josefin Sans",
              marginLeft: 10,
              transition: "all 0.1s ease-in",
            }}
          />
        </Flex>
      </Flex>

      {/* <Flex sx={{ maxWidth: "100%", width: 900, marginTop: 30 }}>
        <Box
          sx={{
            height: 200,
            width: 200,
            border: "3px solid black",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Image src="https://cdn.shopify.com/s/files/1/0420/0017/products/SandnesGarnDoubleSundayPK6046ElectricBlue2_large.png?v=1650673736" />
        </Box>
      </Flex> */}
    </Flex>
  )
}
