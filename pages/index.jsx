import React from "react";
import { Flex } from "reflexbox";
import Link from "next/link";
import Head from "next/head";

const PageOne = () => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="center"
      sx={{
        article: {
          textAlign: "left"
        },
        h1: {
          textAlign: "center"
        }
      }}
    >
      <Head>
        <title>Page One</title>
        <meta name="description" content="Amid AOC pressure" />
        <meta name="keywords" content="amid,pressure,Pelosi" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>This is page1</h1>
      <article>
        Amid AOC pressure, Pelosi suggests impeachment back on the table to
        address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi
        suggests impeachment back on the table to address 'grave new chapter of
        lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
        table to address 'grave new chapter of lawlessness'Amid AOC pressure,
        Pelosi suggests impeachment back on the table to address 'grave new
        chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment
        back on the table to address 'grave new chapter of lawlessness'Amid AOC
        pressure, Pelosi suggests impeachment back on the table to address
        'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests
        impeachment back on the table to address 'grave new chapter of
        lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
        table to address 'grave new chapter of lawlessness'Amid AOC pressure,
        Pelosi suggests impeachment back on the table to address 'grave new
        chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment
        back on the table to address 'grave new chapter of lawlessness'Amid AOC
        pressure, Pelosi suggests impeachment back on the table to address
        'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests
        impeachment back on the table to address 'grave new chapter of
        lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
        table to address 'grave new chapter of lawlessness'
      </article>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        width="100%"
        sx={{
          a: {
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            marginTop: "15px",
            ":hover": {
              textDecoration: "underline"
            }
          }
        }}
      >
        <a href="https://google.com" title="Google">
          Go to Google
        </a>
        <a href="https://yahoo.com" title="Yahoo">
          Go to Yahoo
        </a>
        <a href="https://amazon.com" title="Amazon">
          Go to Amazon
        </a>
        <Link href="/inner">
          <a>Page Two</a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default PageOne;
