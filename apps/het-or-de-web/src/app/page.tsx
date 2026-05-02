"use client";
import { SearchIcon } from "@chakra-ui/icons";
import styles from "./page.module.css";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Text, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useGetNoumQuery } from "./api/queries";

export default function Home() {
  const [search, setSearch] = useState("");

  const { data, isLoading, error } = useGetNoumQuery(search);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className={styles.main}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <InputGroup
          style={{
            minWidth: "400px",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "row",
            margin: "10px",
          }}
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Type a dutch noun here"
            value={search}
            onChange={handleSearch}
          />
        </InputGroup>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "50vh",
        }}
      >
        {isLoading && <Spinner size="lg" />}
        {error && (
          <Text
            style={{
              textAlign: "center",
            }}
            fontSize="4xl"
          >
            An error occured
          </Text>
        )}
        <Text
          style={{
            textAlign: "center",
          }}
          fontSize="4xl"
        >
          {data?.noun}
        </Text>
      </Box>
    </main>
  );
}
