import React, { useCallback, useState } from "react"
import { Box, Flex, Image, Text } from "rebass"
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
      if (result.length) {
        setYarns(result)
      }
    } catch (e) {
      setHasError(true)
    }
    setIsLoading(false)
  }, [isLoading, searchTerm])

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
            fontWeight: "bold",
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

      <Flex
        sx={{
          maxWidth: "100%",
          width: 900,
          marginTop: 30,
          opacity: yarns ? 1 : 0,
          transition: "opacity 0.2s ease-in 0.3s",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {yarns?.map((yarn) => (
          <YarnCard yarn={yarn} />
        ))}
      </Flex>
    </Flex>
  )
}
