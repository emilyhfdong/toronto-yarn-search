import React, { useCallback, useEffect, useState } from "react"
import { Box, Flex, Text } from "rebass"
import { SearchBar, YarnCard } from "./components"
import { Backend, YarnResult } from "./services"
export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [hasError, setHasError] = useState(false)
  const [yarns, setYarns] = useState<YarnResult[] | null>(null)

  const onSubmit = useCallback(async () => {
    if (isLoading) {
      return
    }
    setIsLoading(true)
    try {
      const result = await Backend.searchYarns(searchTerm)
      setYarns(result)
    } catch (e) {
      setHasError(true)
    }
    setIsLoading(false)
  }, [isLoading, searchTerm])

  useEffect(() => {
    if (hasError) {
      setTimeout(() => setHasError(false), 2000)
    }
  }, [hasError])

  return (
    <Flex
      sx={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        paddingX: ["1rem", 30],
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "3rem",
          paddingY: "1rem",
          paddingX: "2rem",
          backgroundColor: "#B64E4B",
          color: "white",
          borderRadius: "0.5rem",
          opacity: hasError ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      >
        oops! something went wrong :( try again
      </Box>
      <Flex
        sx={{
          minHeight: yarns ? 0 : "100vh",
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "fit-content",
          transition: "min-height 0.3s ease-in",
          maxWidth: "100%",
          width: 900,
          flexShrink: 0,
        }}
      >
        <Text
          sx={{
            fontSize: yarns ? [50, 50] : [50, 80],
            fontWeight: "600",
            transition: "all 0.2s ease-in",
          }}
        >
          toronto yarns
        </Text>
        <SearchBar
          onSubmit={onSubmit}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isLoading={isLoading}
          isMinimized={Boolean(yarns)}
          clearYarns={() => setYarns(null)}
        />
      </Flex>
      {yarns && yarns.length === 0 && (
        <Flex
          sx={{
            maxWidth: "100%",
            width: 900,
            marginTop: ["2rem", 30],
            opacity: yarns ? 1 : 0,
            transition: "opacity 0.2s ease-in 0.3s",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text sx={{ fontSize: 20, textAlign: "center" }}>
            😭 no results! <br />
            try searching something else
          </Text>
        </Flex>
      )}
      <Box
        sx={{
          maxWidth: "100%",
          width: 900,
          marginTop: ["2rem", 30],
          opacity: yarns ? 1 : 0,
          transition: "opacity 0.2s ease-in 0.3s",
          display: "grid",
          gridTemplateColumns: [
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ],
          columnGap: ["1rem", "1.5rem"],
        }}
      >
        {yarns?.map((yarn) => (
          <YarnCard yarn={yarn} />
        ))}
      </Box>
    </Flex>
  )
}
