import React from "react";
import { Flex } from "reflexbox";
import Link from "next/link";
import Head from "next/head";

const PageTwo = () => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
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
        <title>Page Two</title>
        <meta name="description" content="This is page2" />
        <meta name="keywords" content="page2, page, is page" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>This is page2</h1>
      <article>
        This is page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2
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
        <a href="https://facebook.com" title="Facebook">
          Facebook
        </a>
        <a href="https://instagram.com" title="Instagram">
          Instagram
        </a>
        <a href="https://twitter.com" title="Twitter">
          Twitter
        </a>
        <Link href="/">
          <a>Page One</a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default PageTwo;
