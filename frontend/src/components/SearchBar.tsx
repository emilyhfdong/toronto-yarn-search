import React, { useEffect, useRef, useState } from "react"
import { Flex, Image, Box, Text } from "rebass"
import SearchIcon from "../images/search.svg"
import CloseIcon from "../images/close.svg"

type SearchBarProps = {
  onSubmit: () => void
  isMinimized: boolean
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  isLoading: boolean
  clearYarns: () => void
}

const LOADING_TEXTS = [
  "getting yarns from eweknit...",
  "getting yarns from knitting loft...",
  "getting yarns from knit-o-matic...",
  "getting yarns from romni wools...",
  "almost done!",
]

export const SearchBar: React.FC<SearchBarProps> = ({
  onSubmit,
  isMinimized,
  searchTerm,
  setSearchTerm,
  isLoading,
  clearYarns,
}) => {
  const [loadingTextIndex, setLoadingTextIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isLoading) {
      setLoadingTextIndex(0)
    }
  }, [isLoading])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timer
    if (isLoading) {
      interval = setInterval(() => {
        if (loadingTextIndex !== LOADING_TEXTS.length - 1) {
          setLoadingTextIndex(loadingTextIndex + 1)
        }
      }, 3000)
    }
    return () => interval && clearInterval(interval)
  }, [isLoading, loadingTextIndex])
  return (
    <>
      <Flex
        sx={{
          marginTop: isMinimized ? [15, 15] : [15, 30],
          height: isMinimized ? [50, 50] : [60, 80],
          width: "100%",
          border: "3px solid black",
          borderRadius: 40,
          paddingX: 15,
          alignItems: "center",
          overflow: "hidden",
          paddingY: ["1px", "5px"],
          transition: "all 0.1s ease-in",
          position: "relative",
          justifyContent: "space-between",
          isolation: "isolate",
          WebkitMaskImage: "-webkit-radial-gradient(white, black);",
          willChange: "transform",
        }}
      >
        <Box
          sx={{
            borderRadius: 40,
            position: "absolute",
            zIndex: isLoading ? 1 : -1,
            height: "100%",
            width: "100%",
            overflow: "hidden",
            background: "linear-gradient(45deg, #b6b5ff, #ff9797)",
            left: "0%",
            animation: isLoading ? "load 3s linear infinite" : "",
            opacity: isLoading ? 0.8 : 0,
          }}
        ></Box>
        <Image
          sx={{
            height: isMinimized ? [25, 25] : [30, 40],
            transition: "all 0.1s ease-in",
          }}
          src={SearchIcon}
        />
        <Box
          ref={inputRef}
          value={searchTerm}
          as="input"
          onKeyUp={(e) => {
            if (e.key === "Enter" && searchTerm) {
              onSubmit()
              inputRef.current?.blur()
            }
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          disabled={isLoading}
          sx={{
            outline: "none",
            border: "none",
            flex: 1,
            height: "100%",
            fontSize: isMinimized ? [20, 20] : [25, 30],
            fontFamily: "Josefin Sans",
            marginLeft: [0, 10],
            transition: "all 0.1s ease-in",
            backgroundColor: "transparent",
          }}
        />
        <Image
          sx={{
            height: isMinimized ? [25, 25] : [30, 40],
            transition: "all 0.3s ease-in",
            cursor: searchTerm ? "pointer" : "default",
            opacity: searchTerm ? 1 : 0,
            ":hover": {
              opacity: searchTerm ? 0.6 : 0,
            },
            ":active": {
              opacity: searchTerm ? 1 : 0,
            },
          }}
          src={CloseIcon}
          onClick={() => {
            if (searchTerm) {
              setSearchTerm("")
              if (inputRef) {
                inputRef.current?.focus()
              }
              clearYarns()
            }
          }}
        />
      </Flex>
      {!isMinimized && (
        <Text
          sx={{
            marginTop: [15, 30],
            animation:
              isLoading && loadingTextIndex !== LOADING_TEXTS.length - 1
                ? "opacity 3s linear infinite"
                : "",
            opacity: isLoading ? 1 : 0,
          }}
        >
          {LOADING_TEXTS[loadingTextIndex]}
        </Text>
      )}
    </>
  )
}
